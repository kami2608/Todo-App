import type { ButtonHTMLAttributes, FC } from "react";
import { button, type ButtonVariants } from "../../styles/button.variants";
import clsx from "clsx";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonVariants>,
    ButtonVariants {
  title?: string;
}

export const Button: FC<ButtonProps> = ({ title, color, size, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(button({ color, size }), props.className)}
    >
      {title}
    </button>
  );
};
