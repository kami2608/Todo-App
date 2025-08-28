import { tv } from "tailwind-variants";
import { Status, STATUS_FILTER_OPTIONS } from "../types/Status";

export const card = tv({
  base: "p-4 m-2 border rounded-lg shadow-sm transition-colors duration-200",
  variants: {
    status: {
      [STATUS_FILTER_OPTIONS[Status.TODO]]:
        "bg-gray-200 text-gray-800 hover:bg-gray-300",
      [STATUS_FILTER_OPTIONS[Status.IN_PROGRESS]]:
        "bg-blue-200 text-blue-900 hover:bg-blue-300",
      [STATUS_FILTER_OPTIONS[Status.IN_REVIEW]]:
        "bg-yellow-200 text-yellow-900 hover:bg-yellow-300",
      [STATUS_FILTER_OPTIONS[Status.DEPLOY]]:
        "bg-purple-200 text-purple-900 hover:bg-purple-300",
      [STATUS_FILTER_OPTIONS[Status.IN_TESTING]]:
        "bg-orange-200 text-orange-900 hover:bg-orange-300",
      [STATUS_FILTER_OPTIONS[Status.VERIFY]]:
        "bg-teal-200 text-teal-900 hover:bg-teal-300",
      [STATUS_FILTER_OPTIONS[Status.DONE]]:
        "bg-green-200 text-green-900 hover:bg-green-300",
    },
    isDragging: {
      true: "bg-blue-500 text-white shadow-lg",
    },
  },
  defaultVariants: {
    status: STATUS_FILTER_OPTIONS[Status.TODO],
    isDragging: false,
  },
});
