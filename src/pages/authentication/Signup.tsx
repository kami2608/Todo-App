import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import type z from "zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "../../schemas/userInfoSchema";
import { signup } from "../../api/signupFirebase.api";

type SignupUser = z.infer<typeof SignupSchema>;

export default function Signup() {
  const methods = useForm<SignupUser>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(SignupSchema),
  });

  const navigate = useNavigate();

  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<SignupUser> = async (data) => {
    await signup(data.email, data.password);
    navigate("/home");
  };

  return (
    <>
      <div className="bg-blue-200 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-600 text-center p-10 pb-6">
          Welcome to Todo App
        </h1>
        <div className="flex justify-center p-5">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-5 flex-col w-md bg-blue-50 rounded-xl shadow-[0_0_30px_rgba(0,0,150,0.3)]"
            >
              <Input
                name="email"
                label="Enter your email:"
                type="email"
                placeholder="Your email..."
              />
              <Input
                name="password"
                label="Enter your password:"
                type="password"
                placeholder="Your password..."
              />
              <Input
                name="confirmPassword"
                label="Confirm your password:"
                type="password"
                placeholder="Confirm your password"
              />
              <Button title="Sign up" type="submit" />
              <p className="text-center pt-7 pb-5">
                Already have an account?{" "}
                <Link to="/login" className="font-bold text-blue-950">
                  Login
                </Link>
              </p>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
