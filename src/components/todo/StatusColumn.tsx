import type { FC } from "react";
import type { Status } from "../../types/Status";
import { Droppable } from "@hello-pangea/dnd";
import type { Task } from "../../types/Task";
import { column } from "../../styles/column.variants";
import TaskCard from "./TaskCard";

interface StatusColumnProps {
  taskStatus: Status;
  items: Task[];
}

const StatusColumn: FC<StatusColumnProps> = ({ taskStatus, items }) => {
  return (
    <Droppable droppableId={taskStatus}>
      {(provided, snapshot) => (
        <div
          className={column({
            status: taskStatus,
            isDraggingOver: snapshot.isDraggingOver,
          })}
        >
          <h2 className="text-xl font-semibold mb-2 border-b-2">
            {taskStatus}
          </h2>

          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col overflow-y-auto max-h-[400px]"
          >
            {items.map((task, index) => (
              <TaskCard
                key={task.id}
                index={index}
                taskId={task.id}
                taskTitle={task.title}
                taskStatus={task.status}
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default StatusColumn;
