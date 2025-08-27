import type { FC, HTMLProps } from "react";
import {
  textarea,
  type TextareaVariants,
} from "../../styles/textarea.variants";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import clsx from "clsx";

interface TextAreaProps
  extends Omit<HTMLProps<HTMLTextAreaElement>, keyof TextareaVariants | "name">,
    TextareaVariants {
  name: string;
}

export const TextArea: FC<TextAreaProps> = ({
  id,
  label,
  variant,
  name,
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
      {label && <label htmlFor={unique}>{label}</label>}
      <textarea
        id={unique}
        {...register(name)}
        {...props}
        className={clsx(textarea({ variant: variant }), props.className)}
      />
      {methods && methods.formState.errors[name] && (
        <ErrorMessage error={methods.formState.errors[name]} />
      )}
    </div>
  );
};
