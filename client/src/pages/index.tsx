import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./about/about";
import ContactPage from "./contact-us/contact-us";
import ErrorPage from "./error/error";
import HomePage from "./home/home";
import Layout from "./layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
