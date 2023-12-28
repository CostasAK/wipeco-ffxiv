import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FullViewportSpinner } from "../components/FullViewportSpinner";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

export default function Router() {
  return (
    <RouterProvider router={router} fallbackElement={<FullViewportSpinner />} />
  );
}
