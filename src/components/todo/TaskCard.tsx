import type { FC } from "react";
import { Draggable } from "@hello-pangea/dnd";
import type { Status } from "../../types/Status";
import { card } from "../../styles/card.variants";
import { useNavigate } from "react-router";

interface TaskCardProps {
  index: number;
  taskId: string;
  taskTitle: string;
  taskStatus: Status;
}

export const TaskCard: FC<TaskCardProps> = ({
  index,
  taskId,
  taskTitle,
  taskStatus,
}) => {
  const navigate = useNavigate();

  return (
    <Draggable key={taskId} draggableId={taskId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={card({
            status: taskStatus,
            isDragging: snapshot.isDragging,
          })}
          style={provided.draggableProps.style}
          onClick={() => navigate(`/dashboard/task/${taskId}`)}
        >
          <h3 className="text-base font-medium">{taskTitle}</h3>
        </div>
      )}
    </Draggable>
  );
};
