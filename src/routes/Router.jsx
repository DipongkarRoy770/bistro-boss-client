import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import OrderFood from "../component/OrderFood";
import Login from "../component/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path:'order',
        element:<OrderFood></OrderFood>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ],
  },
]);
