import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./utils/layouts.jsx";
import Error from "./Pages/Error/Error.jsx";
import Home from "./Pages/Home/Home";
import Covid from "./Pages/Health/Covid";
import Temperature from "./Pages/Climate/Temperature.jsx";
import Soil from "./Pages/Agriculture/Soil.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/covid",
                element: <Covid />,
            },
            {
                path: "/temperature",
                element: <Temperature />,
            },
            {
                path: "/soil",
                element: <Soil />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
