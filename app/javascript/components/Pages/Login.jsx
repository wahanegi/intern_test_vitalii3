import React, {useContext, useEffect} from 'react';
import Forms from "../forms/Forms";
import Links from "../forms/Links";
import useHttp from "../hooks/use-http";
import {requests_answers} from "../lib/api";
import Home from "./Home";
import flash, {list_messages_off} from "../helper_function/flash";
import LoginContext from "../store/login-context";
import Header from "../Wrappers/Header";

const Login = () => {
    list_messages_off()
    const {sendRequest, status, data, error} = useHttp(requests_answers)
    const loginContext = useContext(LoginContext)
    const sendData = (dt) => {
        sendRequest(
            {dataUser:{user:dt},
                url:"/users/sign_in",
                method: 'POST'}
        )
    }
    useEffect(() =>{
    try {
        if (status === 'completed' && (data.info['danger'] === null || data.info['danger'] === undefined)) {
            loginContext.login(data.info['token'])
        }
    } catch (e) {flash('danger', e.message)}
    // finally {
    //     console.log ("Error bind with Login exception")
    // }
     },[ status, data, error ])

    return (
        <Header>
            {!loginContext.isLoggedIn && <Forms howFields='2' title="Login" wrtOnBtn="It's my account" action={sendData}>
            <Links form="Login"/>
        </Forms>}
            {loginContext.isLoggedIn && <Home/>}
        </Header>
    );
};

export default Login;