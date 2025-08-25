import { tv, type VariantProps } from "tailwind-variants";

export const button = tv({
  base: "border rounded-xl p-2 font-bold",
  variants: {
    color: {
      primary: "bg-blue-600 text-white hover:bg-blue-500",
      secondary: "bg-green-600 text-white hover:bg-green-400",
      error: "bg-red-800 text-white hover:bg-red-700",
      delete: "bg-red-400 text-gray-700 hover:bg-red-500",
      edit: "bg-amber-200 text-gray-700 hover:bg-amber-300",
    },
    size: {
      small: "text-sm",
      medium: "text-lg",
      large: "text-xl",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "medium",
  },
});

export type ButtonVariants = VariantProps<typeof button>;
