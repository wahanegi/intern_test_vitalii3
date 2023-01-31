import React, {useState} from 'react';

const LoginContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: ()=>{},
    logout: ()=>{}
});

export const LoginContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
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
    }
    const ContextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return (
       <LoginContext.Provider value = {ContextValue}>
           {props.children}
       </LoginContext.Provider>
    );
};

export default LoginContext;