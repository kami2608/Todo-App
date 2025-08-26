import { Link } from "react-router-dom";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schemas/userInfoSchema";
import { Input } from "../../components/common/Input";
import ErrorMessage from "../../components/common/ErrorMessage";
import { Button } from "../../components/common/Button";

type LoginUser = z.infer<typeof LoginSchema>;

export default function Login() {
  const methods = useForm<LoginUser>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginUser> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-primary min-h-screen">
        <h1 className="text-heading font-bold text-secondary text-center p-10">
          Welcome to Todo App
        </h1>
        <div className="flex justify-center p-8">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-5 flex-col w-md bg-blue-50 rounded-xl"
            >
              <Input
                name="email"
                label="Enter your email:"
                type="email"
                variant="outlined"
                placeholder="Your email..."
              />
              <Input
                name="password"
                label="Enter your password:"
                type="password"
                variant="outlined"
                placeholder="Your password..."
              />
              {errors.root && (
                <div className="text-center">
                  <ErrorMessage error={errors.root} />
                </div>
              )}
              <div className="text-center mt-10">
                <Button title="Login" type="submit" className="text-center" />
              </div>
              <p className="text-center pt-10 pb-5">
                Don't have an account?{" "}
                <Link to="/signup" className="font-bold text-secondary">
                  Register
                </Link>
              </p>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}
