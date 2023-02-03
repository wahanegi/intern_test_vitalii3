import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registrations from "./Pages/Registrations";
import ResendInstruction from "./Pages/ResendInstruction";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword from "./Pages/ForgotPassword";
import NotFound from "./Pages/NotFound";
import ListPostedMessages from "./Pages/ListPostedMessages";
import NewMessage from "./Pages/NewMessage";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/login", element: <Login/>},
    {path: "/logout", element: ""},
    {path: "/react_home", element: <ListPostedMessages/>},
    {path: "/new_message", element: <NewMessage/>},
    {path: "/registration", element: <Registrations/>},
    {path: "/forgot_password", element: <ForgotPassword/>},
    {path: "/reset_password", element: <ResetPassword/>},
    {path: "/resend_instruction", element: <ResendInstruction/>},
    { path:"*", element: <Home />}
    ])
const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;