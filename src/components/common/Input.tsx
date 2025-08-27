import type { FC, HTMLProps } from "react";
import { input, type InputVariants } from "../../styles/input.variants";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import clsx from "clsx";

interface InputProps
  extends Omit<HTMLProps<HTMLInputElement>, keyof InputVariants | "name">,
    InputVariants {
  label?: string;
  name: string;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  variant,
  id,
  ...props
}) => {
  let register: any;
  const methods = useFormContext();

  if (methods) {
    register = methods.register;
  }

  const unique = id || name;

  return (
    <div>
      {label && (
        <label htmlFor={unique} className="text-blue-800">
          {label}
        </label>
      )}
      <input
        {...(register ? register(name) : {})}
        id={unique}
        {...props}
        className={clsx(input({ variant }), props.className)}
      />
      {methods && methods.formState.errors[name] && (
        <ErrorMessage error={methods.formState.errors[name]} />
      )}
    </div>
  );
};
