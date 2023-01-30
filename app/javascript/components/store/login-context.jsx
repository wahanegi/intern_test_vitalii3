import React, {useState} from 'react';

const LoginContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: ()=>{},
    logout: ()=>{}
});

export const LoginContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const userIsLoggedIn = !!token
    const loginHandler = (token) =>{
        setToken(token)
        console.log(token)
    }
    const logoutHandler = () =>{
        setToken(null)
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