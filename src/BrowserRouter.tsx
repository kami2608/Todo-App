import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from "react-router-dom";
import AuthRoute from "./pages/authentication/AuthRoute";

const Login = lazy(() => import("./pages/authentication/Login"));
const Signup = lazy(() => import("./pages/authentication/Signup"));
const Home = lazy(() => import("./pages/main/Home"));
const Todo = lazy(() => import("./pages/main/Todo"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={() => redirect("/login")} />
      <Route
        path="/login"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/signup"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Signup />
          </Suspense>
        }
      />
      <Route element={<AuthRoute />}>
        <Route
          path="/home"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/todo-list"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Todo />
            </Suspense>
          }
        />
      </Route>
    </>,
  ),
);
