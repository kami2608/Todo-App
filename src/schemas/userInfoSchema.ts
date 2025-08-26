import z from "zod";

export const LoginSchema = z.object({
  email: z.email("Invalid email address format!"),
  password: z
    .string()
    .min(7, "Password must be at least 7 characters!")
    .refine((val) => /[A-Z]/.test(val), {
      error: "Password must contain at least one uppercase letter!",
    })
    .refine((val) => /[a-z]/.test(val), {
      error: "Password must contain at least one lowercase letter!",
    })
    .refine((val) => /[0-9]/.test(val), {
      error: "Password must be contain at least one digit",
    })
    .refine((val) => /[^A-Za-z0-9]/.test(val), {
      error: "Password must contain at least one special character!",
    })
    .refine((val) => !/\s/.test(val), {
      error: "Password must not contain space!",
    }),
});
