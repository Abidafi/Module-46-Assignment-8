import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import NotFoundPage from "../Pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
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
      },
      {
        path: "/apps/:id",
        element: <AppDetails />,
      }
    ]
  },
  {
    path:'*',
    element: <NotFoundPage />,
  }
]);

export default router;
