import { tv, type VariantProps } from "tailwind-variants";

export const input = tv({
  base: "block w-full rounded-lg border p-2 text-sm focus:outline-none text-gray-900",
  variants: {
    variant: {
      filled:
        "px-2.5 pb-2.5 pt-5 bg-gray-100 border-0 border-b-2 border-gray-300 focus:border-blue-600",
      outlined:
        "px-2.5 pb-2.5 pt-4 bg-transparent border-1 border-gray-300 focus:border-blue-600r",
      standard:
        "py-2.5 px-2 bg-transparent border-0 border-b-2 border-gray-300 focus:border-blue-600",
    },
  },
  defaultVariants: {
    variant: "standard",
  },
});

export type InputVariants = VariantProps<typeof input>;
