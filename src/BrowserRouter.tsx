import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LoadingPage from "./pages/LoadingPage";
import { Paths } from "./paths";

const Signup = lazy(() => import(Paths.signup));
const Login = lazy(() => import(Paths.login));
const TodoDashBoard = lazy(() => import(Paths.dashboard));
const DetailTodo = lazy(() => import(Paths.detailTodo));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={() => redirect("/dashboard")} />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<LoadingPage />}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<LoadingPage />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<LoadingPage />}>
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
          <Suspense fallback={<LoadingPage />}>
            <Navbar>
              <TodoDashBoard />
            </Navbar>
          </Suspense>
        }
      >
        <Route
          path="task/:taskId"
          element={
            <Suspense fallback={<LoadingPage />}>
              <DetailTodo />
            </Suspense>
          }
        />
      </Route>
    </>,
  ),
);
