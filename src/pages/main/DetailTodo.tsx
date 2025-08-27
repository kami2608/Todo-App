import { useParams, useOutletContext } from "react-router";

type ContextType = { close: () => void };

export default function DetailTodo() {
  const { taskId } = useParams();
  const { close } = useOutletContext<ContextType>();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={close}
    >
      <div
        className="bg-primary p-6 rounded-2xl shadow-xl w-[80%] h-[80%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center pb-2">
          <h1 className="text-xl font-bold flex-1 text-center">
            Task Detail - {taskId}
          </h1>
          <button className="pr-4" onClick={close}>
            &#10060;
          </button>
        </div>
      </div>
    </div>
  );
}
