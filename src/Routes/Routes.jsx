import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

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
        path: "/products",
        element: <Products />,
      }
    ]
  },
  {
    path:'*',
    element: <ErrorPage />,
  }
]);

export default router;
