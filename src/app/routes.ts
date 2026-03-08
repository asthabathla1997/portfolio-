import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
    ],
  },
]);
