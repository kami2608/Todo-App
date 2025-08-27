import type { FC, HTMLProps } from "react";
import { select, type SelectVariant } from "../../styles/select.variants";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import clsx from "clsx";

interface SelectProps
  extends Omit<HTMLProps<HTMLSelectElement>, keyof SelectVariant | "name">,
    SelectVariant {
  name: string;
  options: { value: string; label: string }[];
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  name,
  id,
  variant,
  ...props
}) => {
  let register: any;
  const methods = useFormContext();

  if (methods) {
    register = methods.register;
  }

  const unique = id || name;

  return (
    <div className="flex items-center gap-2">
      <label htmlFor={unique}>{label}</label>
      <select
        {...(register ? register(name) : {})}
        name={name}
        id={unique}
        {...props}
        className={clsx(select({ variant: variant }), props.className)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {methods && methods.formState.errors[name] && (
        <ErrorMessage error={methods.formState.errors[name]} />
      )}
    </div>
  );
};
