import { useState } from "react";
import { Button } from "../common/Button";
import FilterDialog from "./FilterDialog";

export default function TodoHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-blue-100 border-b-2 flex p-3 pl-10 pr-10 justify-between items-center fixed top-0 left-40 right-0">
        <h1 className="text-secondary text-heading font-bold">Todo App</h1>
        <div className="flex gap-4">
          <Button title="Filter" onClick={() => setIsOpen(!isOpen)} />
          <Button title="Create new task" />
        </div>
      </div>
      <div className="fixed top-20 right-4 z-1">
        <FilterDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}
