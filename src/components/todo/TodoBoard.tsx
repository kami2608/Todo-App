import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { dummyTasks } from "../../data/dummyTasks";
import type { Task } from "../../types/Task";
import StatusColumn from "./StatusColumn";
import { Status, STATUS_FILTER_OPTIONS } from "../../types/Status";
import { useState, type FC } from "react";

const getTasksByStatus = (status: Status, data: Task[]) => {
  return data.filter((task) => task.status === status);
};

const checkValidStatus = (
  currentStatus: Status,
  updateStatus: Status,
): boolean => {
  const currentIndex = Object.keys(STATUS_FILTER_OPTIONS).indexOf(
    currentStatus,
  );
  const updateIndex = Object.keys(STATUS_FILTER_OPTIONS).indexOf(updateStatus);

  if (currentIndex === -1 || updateIndex === -1) return false;
  return updateIndex > currentIndex;
};

const TodoBoard: FC = () => {
  const [data, setData] = useState<Task[]>(dummyTasks);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const currentStatus = result.source.droppableId as Status;
    const updateStatus = result.destination.droppableId as Status;

    const currentIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const draggedTask = data.find((task) => task.id === result.draggableId);

    if (currentStatus === updateStatus) {
      const taskList = getTasksByStatus(currentStatus, data);
      const [moved] = taskList.splice(currentIndex, 1);
      taskList.splice(destinationIndex, 0, moved);
      const otherTasks = data.filter((task) => task.status !== currentStatus);
      const newData = [...otherTasks, ...taskList];
      setData(newData);
      return;
    }

    if (checkValidStatus(currentStatus, updateStatus) && draggedTask) {
      const sourceTasks = data.filter((task) => task.status === currentStatus);
      const destinationTasks = data.filter(
        (task) => task.status === updateStatus,
      );

      sourceTasks.splice(currentIndex, 1);
      draggedTask.status = updateStatus;

      destinationTasks.splice(destinationIndex, 0, draggedTask);

      const otherTasks = data.filter(
        (task) => task.status !== currentStatus && task.status !== updateStatus,
      );

      setData([...otherTasks, ...sourceTasks, ...destinationTasks]);
    } else {
      alert("Invalid action!");
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-6">
        {Object.keys(STATUS_FILTER_OPTIONS).map((key) => (
          <StatusColumn
            key={STATUS_FILTER_OPTIONS[key as Status]}
            taskStatus={STATUS_FILTER_OPTIONS[key as Status] as Status}
            items={getTasksByStatus(
              STATUS_FILTER_OPTIONS[key as Status] as Status,
              data,
            )}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default TodoBoard;
