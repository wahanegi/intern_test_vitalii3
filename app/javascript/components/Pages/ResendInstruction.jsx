import React from 'react';
import Forms from "../forms/Forms";
import Links from "../forms/Links";
import useHttp from "../hooks/use-http";
import { requests_answers } from "../lib/api";
import Home from "./Home";
import Header from "../Wrappers/Header";

const ResendInstruction = () => {
    const {sendRequest, status, data, error} = useHttp(requests_answers)
    const sendData = (data) => {
        sendRequest(
            {dataUser:{user:data},
                url:"/users/confirmation",
                method: 'POST'}
        )
    }

    if (status === 'completed' && data.info['danger'] === undefined) {
        return <Home/>
    }
    //  action={{func: Send, url:"/users/confirmation", method:'POST'}}>

    return (
        <Header>
        <Forms howFields='1' title="Resend confirmation instruction" wrtOnBtn="Get instruction again"
               action={ sendData }>
            <Links form="ResendInstruction"/>
        </Forms>
        </Header>
    );
};

export default ResendInstruction;