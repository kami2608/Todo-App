import type { FC } from "react";
import type { Status } from "../../types/Status";
import { Droppable } from "@hello-pangea/dnd";
import type { Task } from "../../types/Task";
import { card } from "../../styles/card.variants";
import { column } from "../../styles/column.variants";
import { InnerList } from "./InnerTaskList";

interface StatusColumnProps {
  taskStatus: Status;
  items: Task[];
}

export const StatusColumn: FC<StatusColumnProps> = ({ taskStatus, items }) => {
  return (
    <Droppable
      droppableId={taskStatus}
      mode="virtual"
      renderClone={(provided, snapshot, rubric) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={card({
            status: items[rubric.source.index].status,
            isDragging: snapshot.isDragging,
          })}
          style={provided.draggableProps.style}
        >
          <h3 className="text-base font-medium">
            {items[rubric.source.index].title}
          </h3>
        </div>
      )}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={column({
            status: taskStatus,
            isDraggingOver: snapshot.isDraggingOver,
          })}
        >
          <h2 className="text-xl font-semibold mb-2 border-b-2">
            {taskStatus}
          </h2>
          <InnerList items={items} />
        </div>
      )}
    </Droppable>
  );
};
