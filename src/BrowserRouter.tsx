import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const Signup = lazy(() => import("./pages/authentication/Signup"));
const Login = lazy(() => import("./pages/authentication/Login"));
const TodoDashBoard = lazy(() => import("./pages/main/TodoDashBoard"));
const DetailTodo = lazy(() => import("./pages/main/DetailTodo"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={() => redirect("/dashboard")} />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Navbar>
              <h1 className="text-center text-heading font-bold">
                Welcome to Todo App
              </h1>
            </Navbar>
          </Suspense>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Navbar>
              <TodoDashBoard />
            </Navbar>
          </Suspense>
        }
      >
        <Route
          path="task/:taskId"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <DetailTodo />
            </Suspense>
          }
        />
      </Route>
    </>,
  ),
);
