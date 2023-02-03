import React, {useState} from 'react';
import useHttp from "../hooks/use-http";
import {requests_answers} from "../lib/api";

const LoginContext = React.createContext({
    postedMessages: [],
    token: '',
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{},
    setPostedMessages: (data)=>{}
});

export const LoginContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const [messages, setMessages] = useState([])
    const {sendRequest, status, data, error} = useHttp(requests_answers)

    const userIsLoggedIn = !!token
    const loginHandler = (token) =>{
        setToken(token)
        console.log(token)
        localStorage.setItem('token', token)
    }
    const logoutHandler = () =>{
        setToken(null)
        localStorage.removeItem('token')
    //TODO     request to the server with Log out
        sendRequest(
            {dataUser:{'react': 'true'},
                url:"/users/sign_out",
                method: 'DELETE'}
        )
    }
    const setData = (data) =>{
        setMessages(data)
    }
    const ContextValue = {
        postedMessages: messages,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        setPostedMessages: setData
    }
    return (
       <LoginContext.Provider value = {ContextValue}>
           {props.children}
       </LoginContext.Provider>
    );
};

export default LoginContext;