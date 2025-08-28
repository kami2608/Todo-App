import { Link } from "react-router-dom";
import type z from "zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "../../schemas/userInfoSchema";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { AuthURLs } from "../../constants/auth.paths";
import type { FC } from "react";

type SignupUser = z.infer<typeof SignupSchema>;

const Signup: FC = () => {
  const methods = useForm<SignupUser>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(SignupSchema),
  });

  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<SignupUser> = async (data) => {
    console.log(data);
  };

  return (
    <div className="bg-primary min-h-screen">
      <h1 className="text-heading font-bold text-blue-600 text-center p-10 pb-6">
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
            <Input
              name="confirmPassword"
              label="Confirm your password:"
              type="password"
              variant="outlined"
              placeholder="Confirm your password"
            />
            <div className="text-center mt-10">
              <Button title="Sign up" type="submit" />
            </div>
            <p className="text-center pt-7 pb-5">
              Already have an account?{" "}
              <Link to={AuthURLs.login} className="font-bold text-secondary">
                Login
              </Link>
            </p>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Signup;
