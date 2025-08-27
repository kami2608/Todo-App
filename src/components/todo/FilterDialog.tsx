import { Input } from "../common/Input";
import { Checkbox } from "../common/Checkbox";
import { Priority } from "../../types/Priority";

const members: string[] = ["Member 1", "Member 2", "Member 3"];

type FilterDialogProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FilterDialog({ isOpen, setIsOpen }: FilterDialogProps) {
  function handleClose() {
    setIsOpen(false);
  }

  return (
    isOpen && (
      <div className="bg-blue-200 text-secondary border-1 rounded-lg p-4 w-[400px]">
        <div className="flex items-center pb-2">
          <h1 className="text-xl font-bold flex-1 text-center">Filter</h1>
          <button className="pr-4" onClick={handleClose}>
            &#10060;
          </button>
        </div>
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
          <Checkbox name={member}>{member}</Checkbox>
        ))}

        <p className="font-bold">Priority</p>
        {Object.keys(Priority).map((priority) => (
          <Checkbox name={priority}>{priority}</Checkbox>
        ))}
      </div>
    )
  );
}
