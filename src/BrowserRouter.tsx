import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LoadingPage from "./pages/LoadingPage";
import { AuthURLs } from "./constants/auth.paths";
import { AppURLs } from "./constants/app.paths";

const Signup = lazy(() => import("./pages/authentication/Signup"));
const Login = lazy(() => import("./pages/authentication/Login"));
const TodoDashBoard = lazy(() => import("./pages/main/TodoDashBoard"));
const DetailTodo = lazy(() => import("./pages/main/DetailTodo"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" loader={() => redirect(AuthURLs.login)} />
      <Route
        path={AuthURLs.signup}
        element={
          <Suspense fallback={<LoadingPage />}>
            <Signup />
          </Suspense>
        }
      />
      <Route
        path={AuthURLs.login}
        element={
          <Suspense fallback={<LoadingPage />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path={AppURLs.home}
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
        path={AppURLs.dashboard}
        element={
          <Suspense fallback={<LoadingPage />}>
            <Navbar>
              <TodoDashBoard />
            </Navbar>
          </Suspense>
        }
      >
        <Route
          path={AppURLs.detailTodo}
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

export default router;
