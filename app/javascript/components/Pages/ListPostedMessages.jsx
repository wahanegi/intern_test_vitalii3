import React, {useContext, useEffect, useState} from 'react';
import Card from "./Card";
import Header from "../Wrappers/Header";
import useHttp from "../hooks/use-http";
import {requests_answers} from "../lib/api";
import loginContext from "../store/login-context";

const ListPostedMessages = () => {
    const {sendRequest, status, data, error} = useHttp(requests_answers)
    const messCntx= useContext(loginContext)
console.log (messCntx.postedMessages)
    useEffect(()=>{
        if (data !== null) {
            messCntx.setPostedMessages(data.info.data)
        }
    },[data])

    useEffect(()=>{
        sendRequest(
            {dataUser:{json:{count: messCntx.postedMessages.length }},
                url:"/api",
                method: 'POST'}
        )
    },[])

    return (
        <Header>
        <div className="road">
            { !!messCntx.postedMessages.length &&  <ul>
                {messCntx.postedMessages.map((dt)=>(<Card key={dt.id_posted}>{dt}</Card>))}
            </ul>}
        </div>
        </Header>
    );
};

export default ListPostedMessages;