import React from 'react';
import Forms from "../forms/Forms";
import Links from "../forms/Links";

const ResetPassword = () => {
    return (
        <Forms howFields='3' title="Reset your password" wrtOnBtn="Create new password">
            <Links form="ResetPassword"/>
        </Forms>
    );
};

export default ResetPassword;