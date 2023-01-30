import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registrations from "./Pages/Registrations";
import ResendInstruction from "./Pages/ResendInstruction";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/login", element: <Login/>},
    {path: "/logout", element: ""},
    {path: "/registration", element: <Registrations/>},
    {path: "/forgot_password", element: <ForgotPassword/>},
    {path: "/reset_password", element: <ResetPassword/>},
    {path: "/resend_instruction", element: <ResendInstruction/>}
    ])
const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;