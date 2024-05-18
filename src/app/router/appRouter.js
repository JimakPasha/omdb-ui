import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage, ErrorPage } from "../../pages";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage type={"unknownError"} />,
    },
    {
      path: "*",
      element: <ErrorPage type={"notFound"} />,
    },
  ]);

  return <RouterProvider router={router} />;
};