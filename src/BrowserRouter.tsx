import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from "react-router-dom";

const Login = lazy(() => import("./pages/authentication/Login"));

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
    </>,
  ),
);
