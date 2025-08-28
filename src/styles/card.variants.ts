import { tv } from "tailwind-variants";
import { Status, StatusObject } from "../types/Status";

export const card = tv({
  base: "p-4 m-2 border rounded-lg shadow-sm transition-colors duration-200",
  variants: {
    status: {
      [StatusObject[Status.TODO]]:
        "bg-gray-200 text-gray-800 hover:bg-gray-300",
      [StatusObject[Status.IN_PROGRESS]]:
        "bg-blue-200 text-blue-900 hover:bg-blue-300",
      [StatusObject[Status.IN_REVIEW]]:
        "bg-yellow-200 text-yellow-900 hover:bg-yellow-300",
      [StatusObject[Status.DEPLOY]]:
        "bg-purple-200 text-purple-900 hover:bg-purple-300",
      [StatusObject[Status.IN_TESTING]]:
        "bg-orange-200 text-orange-900 hover:bg-orange-300",
      [StatusObject[Status.VERIFY]]:
        "bg-teal-200 text-teal-900 hover:bg-teal-300",
      [StatusObject[Status.DONE]]:
        "bg-green-200 text-green-900 hover:bg-green-300",
    },
    isDragging: {
      true: "bg-blue-500 text-white shadow-lg",
    },
  },
  defaultVariants: {
    status: StatusObject[Status.TODO],
    isDragging: false,
  },
});
