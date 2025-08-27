import { Outlet, useNavigate } from "react-router";
import TodoBoard from "../../components/todo/TodoBoard";
import TodoHeader from "../../components/todo/TodoHeader";

export default function TodoDashBoard() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary min-w-max h-full">
      <TodoHeader />
      <div className="p-10 pt-35">
        <TodoBoard />
      </div>
      <Outlet context={{ close: () => navigate("/dashboard") }} />
    </div>
  );
}
