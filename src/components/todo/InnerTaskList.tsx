import { memo } from "react";
import type { Task } from "../../types/Task";
import { FixedSizeList, type ListChildComponentProps } from "react-window";
import { TaskCard } from "./TaskCard";

interface InnerListProps {
  items: Task[];
}

export const InnerList = memo<InnerListProps>(({ items }) => (
  <FixedSizeList
    height={440}
    width={280}
    itemCount={items.length}
    itemSize={60}
    itemData={items}
    overscanCount={5}
  >
    {({ index, style, data }: ListChildComponentProps<Task[]>) => (
      <div style={style}>
        <TaskCard
          index={index}
          taskId={data[index].id}
          taskTitle={data[index].title}
          taskStatus={data[index].status}
        />
      </div>
    )}
  </FixedSizeList>
));
