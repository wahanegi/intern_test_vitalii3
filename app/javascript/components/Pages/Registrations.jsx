import React from 'react';
import Forms from "../forms/Forms";
import Links from "../forms/Links";
import useHttp from "../hooks/use-http";
import {registrations, requests_answers} from "../lib/api";
import Home from "./Home";
import Header from "../Wrappers/Header";
import {list_messages_off} from "../helper_function/flash";

const Registrations = () => {
    list_messages_off()
    // const {sendRequest, status, error} = useHttp(registrations)
    // const sendData = (data) => {
    //     const answer = sendRequest({user:data, commit:"Sign up"})
    //     console.log(status, error, answer)
    // }
    const {sendRequest, status, data, error} = useHttp(requests_answers)
    const sendData = (data) => {
        sendRequest(
            {dataUser:{user:data},
                url:"/users",
                method: 'POST'}
        )
    }

    if (status === 'completed' && data.info['danger'] === undefined) {
        return <Home/>
    }
    return (
        <Header>
        <Forms howFields='4' title="Sign Up" wrtOnBtn="Want Account" action={sendData}>
            <Links form="Registrations"/>
        </Forms>
        </Header>
    );
};

export default Registrations;