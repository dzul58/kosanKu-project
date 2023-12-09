import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Parent from "../pages/Parent";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import AddPage from "../pages/AddPage";
import EditPage from "../pages/EditPage";
import UploadImage from "../pages/UploadImage";
import TypePage from "../pages/TypePage";
import AddUser from "../pages/AddUser";

const aunthBeforeLogin = () => {
  const access_token = localStorage.access_token;
  if (!access_token) {
    throw redirect("/login");
  }
  return null;
};

const aunthAfterLogin = () => {
  const access_token = localStorage.access_token;
  if (access_token) {
    throw redirect("/");
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader: aunthAfterLogin,
  },
  {
    element: <Parent />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: aunthBeforeLogin,
      },
      {
        path: "/add",
        element: <AddPage />,
        loader: aunthBeforeLogin,
      },
      {
        path: "/addUser",
        element: <AddUser />,
        loader: aunthBeforeLogin,
      },
      {
        path: "/type",
        element: <TypePage />,
        loader: aunthBeforeLogin,
      },
      {
        path: "/:id",
        element: <Detail />,
        loader: aunthBeforeLogin,
      },
      {
        path: "/edit/:id",
        element: <EditPage />,
        loader: aunthBeforeLogin,
      },
      {
        path: "/upload/:id",
        element: <UploadImage />,
        loader: aunthBeforeLogin,
      },
    ],
  },
]);

export default router;
