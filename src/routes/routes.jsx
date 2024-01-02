import ErrorPage from "./ErrorPage";
import { Index } from "./Index";
import Root from "./Root";

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <Index /> }],
      },
    ],
  },
];
