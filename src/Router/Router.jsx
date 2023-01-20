import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import Home from "../Home/Home";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Registration />,
            },
        ],
    },
]);
