import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Checkbox } from "./components/common/Checkbox";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<div></div>} />
    </>,
  ),
);
