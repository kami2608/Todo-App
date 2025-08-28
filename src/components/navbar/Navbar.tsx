import { Link, useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import type { ReactChildren } from "../../types/ReactChildren";

export default function Navbar({ children }: ReactChildren) {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen z-10">
      <aside className="w-40 bg-gray-800 text-white p-4 fixed inset-y-0 left-0">
        <h2 className="text-lg font-bold mb-4 border-b-2 text-center">
          TODO APP
        </h2>
        <nav className="flex flex-col justify-between h-[90%]">
          <div className="flex flex-col gap-4">
            <Link
              to="/home"
              className="font-bold rounded-lg p-2 hover:bg-blue-900"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="font-bold rounded-lg p-2 hover:bg-blue-900"
            >
              Dashboard
            </Link>
          </div>
          <Button title="Logout" onClick={() => navigate("/login")} />
        </nav>
      </aside>
      <main className="flex-1 ml-40 bg-gray-100 overflow-x-auto overflow-y-hidden">
        {children}
      </main>
    </div>
  );
}
