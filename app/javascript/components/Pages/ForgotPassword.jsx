import React from 'react';
import Forms from "../forms/Forms";
import Links from "../forms/Links";
import Home from "./Home";
import useHttp from "../hooks/use-http";
import {requests_answers} from "../lib/api";
import Header from "../Wrappers/Header";

const ForgotPassword = () => {
    const {sendRequest, status, data, error} = useHttp(requests_answers)
    const sendData = (data) => {
        sendRequest(
            {dataUser:{user:data},
                url:"/users/password",
                method: 'POST'}
        )
    }

    if (status === 'completed' && (data.info['danger'] === null || data.info['danger'] === undefined)) {
        return <Home/>
    }
    return (
        <Header>
        <Forms howFields='1' title="Forgot your password?" wrtOnBtn="Get instruction to reset password" action={ sendData }>
            <Links form="ForgotPassword"/>
        </Forms>
        </Header>

    );
};

export default ForgotPassword;