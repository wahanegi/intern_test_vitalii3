import React, {useContext} from 'react';
import {Link, redirect, Route, useNavigate} from "react-router-dom";
import LoginContext from "../store/login-context";
import IconReact from "../icons/IconReact";
import Login from "../Pages/Login";

const Header = (props) => {
    const navigate = useNavigate();
    const loginContext = useContext(LoginContext)

    const logoutHandler = () => {
        loginContext.logout()
        navigate("/")
    }

    const signInHandler = (event) => {
        navigate("/login")
    }
    const newMessageHandler = () => {
        navigate("/new_message")
    }
    const registrationsHandler = event =>{
        navigate("/registration")
    }


    return (
        <div>
            <div className="lower-header">
                <div className="list-of-links">


                        <div className="button_to">
                            {!loginContext.isLoggedIn && <button className="button_menu" onClick={signInHandler}>SIGN IN <IconReact/></button>}
                            {loginContext.isLoggedIn && <button className="button_menu" onClick={newMessageHandler}>NEW MESSAGE <IconReact/></button>}
                        </div>
                        <div className="button_to">
                            {!loginContext.isLoggedIn &&  <button className="button_menu1" onClick={registrationsHandler}>SIGN UP <IconReact/></button>}
                            {loginContext.isLoggedIn &&  <button className="button_menu1" onClick={logoutHandler}>LOGOUT <IconReact/></button>}
                        </div>

                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Header;