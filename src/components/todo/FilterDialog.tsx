import { Input } from "../common/Input";
import { Checkbox } from "../common/Checkbox";
import { Priority, PRIORITY_FILTER_OPTIONS } from "../../types/Priority";
import { FormProvider, useForm } from "react-hook-form";
import type { FC } from "react";

const members: string[] = ["Member 1", "Member 2", "Member 3"];

type FilterDialogProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterDialog: FC<FilterDialogProps> = ({ isOpen, setIsOpen }) => {
  const methods = useForm();
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div
      className={`bg-blue-200 text-secondary border-1 rounded-lg p-4 w-[400px] ${isOpen ? "block" : "hidden"}`}
    >
      <div className="flex items-center pb-2">
        <h1 className="text-xl font-bold flex-1 text-center">Filter</h1>
        <button className="pr-4" onClick={handleClose}>
          &#10060;
        </button>
      </div>
      <FormProvider {...methods}>
        <p className="font-bold">Keyword (Search title)</p>
        <Input
          name="keyword"
          placeholder="Enter a keyword..."
          className="bg-amber-200"
          variant="filled"
        />

        <p className="font-bold">Members</p>
        <Checkbox name="no-member">No members</Checkbox>
        {members.map((member) => (
          <Checkbox key={member} name={member}>
            {member}
          </Checkbox>
        ))}

        <p className="font-bold">Priority</p>
        {Object.keys(PRIORITY_FILTER_OPTIONS).map((key) => (
          <Checkbox
            key={PRIORITY_FILTER_OPTIONS[key as Priority]}
            name={PRIORITY_FILTER_OPTIONS[key as Priority]}
          >
            {PRIORITY_FILTER_OPTIONS[key as Priority]}
          </Checkbox>
        ))}
      </FormProvider>
    </div>
  );
};

export default FilterDialog;
