import { tv } from "tailwind-variants";

export const column = tv({
  base: "p-4 border rounded-lg w-[300px] max-h-[400px] min-h[150px] flex flex-col",
  variants: {
    status: {
      TODO: "bg-gray-100 text-gray-800",
      "IN PROGRESS": "bg-blue-100 text-blue-900",
      "IN REVIEW": "bg-yellow-100 text-yellow-900",
      DEPLOY: "bg-purple-100 text-purple-900",
      "IN TESTING": "bg-orange-100 text-orange-900",
      VERIFY: "bg-teal-100 text-teal-900",
      DONE: "bg-green-100 text-green-900",
    },
    isDraggingOver: {
      true: "bg-blue-200",
    },
  },
  defaultVariants: {
    status: "TODO",
    isDraggingOver: false,
  },
});
