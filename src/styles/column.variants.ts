import { tv } from "tailwind-variants";
import { Status, StatusObject } from "../types/Status";

export const column = tv({
  base: "p-4 border rounded-lg w-[300px] max-h-[400px] min-h-[150px] flex flex-col",
  variants: {
    status: {
      [StatusObject[Status.TODO]]: "bg-gray-100 text-gray-800",
      [StatusObject[Status.IN_PROGRESS]]: "bg-blue-100 text-blue-900",
      [StatusObject[Status.IN_REVIEW]]: "bg-yellow-100 text-yellow-900",
      [StatusObject[Status.DEPLOY]]: "bg-purple-100 text-purple-900",
      [StatusObject[Status.IN_TESTING]]: "bg-orange-100 text-orange-900",
      [StatusObject[Status.VERIFY]]: "bg-teal-100 text-teal-900",
      [StatusObject[Status.DONE]]: "bg-green-100 text-green-900",
    },
    isDraggingOver: {
      true: "bg-blue-200",
    },
  },
  defaultVariants: {
    status: StatusObject[Status.TODO],
    isDraggingOver: false,
  },
});
