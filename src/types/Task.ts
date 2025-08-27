import type { Priority } from "./Priority";
import type { Status } from "./Status";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  startAt: string;
  updateAt: string;
  endAt: string;
  priority: Priority;
  assignees: string[];
}
