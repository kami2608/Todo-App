import { tv } from "tailwind-variants";
import { Status, STATUS_FILTER_OPTIONS } from "../types/Status";

export const column = tv({
  base: "p-4 border rounded-lg w-[300px] max-h-[400px] min-h-[150px] flex flex-col",
  variants: {
    status: {
      [STATUS_FILTER_OPTIONS[Status.TODO]]: "bg-gray-100 text-gray-800",
      [STATUS_FILTER_OPTIONS[Status.IN_PROGRESS]]: "bg-blue-100 text-blue-900",
      [STATUS_FILTER_OPTIONS[Status.IN_REVIEW]]:
        "bg-yellow-100 text-yellow-900",
      [STATUS_FILTER_OPTIONS[Status.DEPLOY]]: "bg-purple-100 text-purple-900",
      [STATUS_FILTER_OPTIONS[Status.IN_TESTING]]:
        "bg-orange-100 text-orange-900",
      [STATUS_FILTER_OPTIONS[Status.VERIFY]]: "bg-teal-100 text-teal-900",
      [STATUS_FILTER_OPTIONS[Status.DONE]]: "bg-green-100 text-green-900",
    },
    isDraggingOver: {
      true: "bg-blue-200",
    },
  },
  defaultVariants: {
    status: STATUS_FILTER_OPTIONS[Status.TODO],
    isDraggingOver: false,
  },
});
