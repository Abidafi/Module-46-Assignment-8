import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Products />,
      },
      {
        path: "/installation",
        element: <Installation />,
      }
    ]
  },
  {
    path:'*',
    element: <ErrorPage />,
  }
]);

export default router;
