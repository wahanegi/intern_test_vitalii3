import React from 'react';
import Forms from "../forms/Forms";
import Links from "../forms/Links";

const Login = () => {
    const sendData = (data) => {
        console.log(data)
    }
    return (
        <Forms howFields='2' title="Login" wrtOnBtn="It's my account" action={sendData}>
            <Links form="Login"/>
        </Forms>
    );
};

export default Login;