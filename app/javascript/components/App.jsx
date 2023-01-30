import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registrations from "./Pages/Registrations";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/login", element: <Login/>},
    {path: "/logout", element: ""},
    {path: "/registration", element: <Registrations/>},
    ])
const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;