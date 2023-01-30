import React from 'react';
import Forms from "../forms/Forms";
import Links from "../forms/Links";

const ForgotPassword = () => {
    return (
        <Forms howFields='1' title="Forgot your password?" wrtOnBtn="Get instruction to reset password">
            <Links form="ForgotPassword"/>
        </Forms>

    );
};

export default ForgotPassword;