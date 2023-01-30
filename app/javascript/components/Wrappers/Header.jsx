import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import LoginContext from "../store/login-context";
import IconReact from "../icons/IconReact";

const Header = (props) => {
    const loginContext = useContext(LoginContext)
    return (
        <div>
            <div className="lower-header">
                <div className="list-of-links">

                    <ul>
                        <li>
                            {!loginContext.isLoggedIn && <Link to="/login">SIGN IN <IconReact/></Link>}
                            {loginContext.isLoggedIn && <Link to="/">NEW MESSAGE <IconReact/></Link>}
                        </li>
                        <li>
                            {!loginContext.isLoggedIn &&  <Link to="/registration">SIGN UP <IconReact/></Link>}
                            {loginContext.isLoggedIn &&  <Link to="/registration">LOGOUT <IconReact/></Link>}
                        </li>
                    </ul>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default Header;