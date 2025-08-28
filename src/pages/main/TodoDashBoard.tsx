import { Outlet, useNavigate } from "react-router";
import TodoHeader from "../../components/todo/TodoHeader";
import TodoBoard from "../../components/todo/TodoBoard";
import { AppURLs } from "../../constants/app.paths";
import type { FC } from "react";

const TodoDashBoard: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary min-w-max h-full">
      <TodoHeader />
      <div className="p-10 pt-35">
        <TodoBoard />
      </div>
      <Outlet context={{ close: () => navigate(AppURLs.dashboard) }} />
    </div>
  );
};

export default TodoDashBoard;
