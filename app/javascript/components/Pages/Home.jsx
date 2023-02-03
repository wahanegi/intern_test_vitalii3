import React from 'react';
import Header from "../Wrappers/Header";
import {list_messages_on} from "../helper_function/flash";

const Home = () => {
    list_messages_on()
    return (
        <Header>
        <h1>
            THIS IS HOME PAGE CREATED REACT LIBRARY
        </h1>
        </Header>
    );
};

export default Home;