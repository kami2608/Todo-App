import { tv, type VariantProps } from "tailwind-variants";

export const select = tv({
  base: "text-sm text-gray-700",
  variants: {
    variant: {
      standard:
        "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1",
      underline:
        "py-2.5 px-0 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200",
    },
  },
  defaultVariants: {
    variant: "standard",
  },
});

export type SelectVariant = VariantProps<typeof select>;
