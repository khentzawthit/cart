import { createBrowserRouter } from "react-router";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetails from "../pages/ProductDetails";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "product-details/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
