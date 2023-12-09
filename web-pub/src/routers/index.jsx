import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Parent from "../pages/Parent";
import Detail from "../pages/Detail";
// import Details from "../pages/Details";
// import Login from "../views/Login";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Parent />,
  },
  {
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
