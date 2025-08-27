import { useState } from "react";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import { dummyTasks } from "../../data/dummyTasks";
import type { Task } from "../../types/Task";
import { StatusColumn } from "./StatusColumn";
import { Status, statusOrder } from "../../types/Status";

const getTasksByStatus = (status: Status, data: Task[]) => {
  return data.filter((task) => task.status === status);
};

const checkValidStatus = (
  currentStatus: Status,
  updateStatus: Status,
): boolean => {
  const currentIndex = statusOrder.indexOf(currentStatus);
  const updateIndex = statusOrder.indexOf(updateStatus);

  if (currentIndex === -1 || updateIndex === -1) return false;
  return updateIndex > currentIndex;
};

export default function TodoBoard() {
  const [data, setData] = useState<Task[]>(dummyTasks);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    if (result.destination.droppableId === result.source.droppableId) {
      const taskList = getTasksByStatus(
        result.source.droppableId as Status,
        data,
      );
      const [moved] = taskList.splice(result.source.index, 1);
      taskList.splice(result.destination.index, 0, moved);
      const otherTasks = data.filter(
        (task) => task.status !== (result.source.droppableId as Status),
      );
      const newData = [...otherTasks, ...taskList];
      setData(newData);
      return;
    }

    const currentStatus = result.source.droppableId as Status;
    const updateStatus = result.destination.droppableId as Status;
    const draggedTask = data.find((task) => task.id === result.draggableId);

    if (checkValidStatus(currentStatus, updateStatus) && draggedTask) {
      const sourceTasks = data.filter((task) => task.status === currentStatus);
      const destinationTasks = data.filter(
        (task) => task.status === updateStatus,
      );

      sourceTasks.splice(result.source.index, 1);
      draggedTask.status = result.destination.droppableId as Status;

      destinationTasks.splice(result.destination.index, 0, draggedTask);

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
        {Object.values(Status).map((status) => (
          <StatusColumn
            key={status}
            taskStatus={status}
            items={getTasksByStatus(status, data)}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
