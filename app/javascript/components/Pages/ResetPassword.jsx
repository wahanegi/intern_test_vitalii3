import React from 'react';
import Forms from "../forms/Forms";
import Links from "../forms/Links";
import Header from "../Wrappers/Header";

const ResetPassword = () => {
    return (
        <Header>
        <Forms howFields='3' title="Reset your password" wrtOnBtn="Create new password">
            <Links form="ResetPassword"/>
        </Forms>
        </Header>
    );
};

export default ResetPassword;