import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../schemas/userInfoSchema";
import { login } from "../../api/loginFirebase.api";
import DisplayError from "../../components/common/DisplayError";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/authentication/AuthProvider";

type LoginUser = z.infer<typeof LoginSchema>;

export default function Login() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  useEffect(() => {
    if (user) navigate("/home");
  }, []);

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
    setError,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginUser> = async (data) => {
    try {
      const response = await login(data.email, data.password);
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setError("root", {
        message: "Your email or password is wrong!",
      });
    }
  };

  return (
    <>
      <div className="bg-blue-200 min-h-screen">
        <h1 className="text-4xl font-bold text-blue-600 text-center p-10">
          Welcome to Todo App
        </h1>
        <div className="flex justify-center p-8">
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
              <div className="text-center">
                <DisplayError error={errors.root} />
              </div>
              <Button title="Login" type="submit" />
              <p className="text-center pt-10 pb-5">
                Don't have an account?{" "}
                <Link to="/signup" className="font-bold text-blue-950">
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
