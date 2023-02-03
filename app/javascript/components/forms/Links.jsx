import React from 'react';
import {Link} from "react-router-dom";

const Links = (props) => {
    return (
        <div className="links">

            {props.form !== "Login" &&
                <div className="link"><Link to="/login">LOGIN</Link></div>}
            {props.form !== "Registrations" &&
                <div className="link"><Link to="/registration">SIGN UP</Link></div>}
            {props.form !== "ForgotPassword" && props.form !== "Registrations"  &&
                <div className="link"><Link to="/forgot_password">Forgot your password?</Link></div>}
            {props.form !== "ResendInstruction" &&
                <div className="link"><Link to="/resend_instruction">Didn't receive confirmation instructions?</Link></div>}

        </div>
    );
};

export default Links;