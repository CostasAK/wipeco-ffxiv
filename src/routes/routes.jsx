import ErrorPage from "./ErrorPage";
import Root from "./Root";

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [{ index: true, element: <>Under Construction...</> }],
      },
    ],
  },
];
