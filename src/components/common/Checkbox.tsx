import type { FC, HTMLProps } from "react";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import clsx from "clsx";

interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, "name"> {
  name: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  children,
  id,
  name,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const unique = id || name;

  return (
    <div className="flex items-center gap-1">
      <input
        {...register(name)}
        type="checkbox"
        id={unique}
        {...props}
        className={clsx(
          "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm",
          props.className,
        )}
      />{" "}
      <label htmlFor={unique}>{children}</label>
      {errors[name] && <ErrorMessage error={errors[name]} />}
    </div>
  );
};
