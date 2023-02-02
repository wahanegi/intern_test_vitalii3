import React, {useContext, useEffect} from 'react';
import MainWrapper from "../Wrappers/MainWrapper";
import {Link} from "react-router-dom";
import ListPostedMessages from "./ListPostedMessages";
import useInput from "../hooks/use-input";
import useHttp from "../hooks/use-http";
import {requests_answers} from "../lib/api";
import flash, {list_messages_off} from "../helper_function/flash";
import Header from "../Wrappers/Header";
import LoginContext from "../store/login-context";

const NewMessage = () => {
    list_messages_off()
    const loginContext = useContext(LoginContext)
    const {sendRequest, status, data, error} = useHttp(requests_answers)
    const {
        value: valueEntered,
        isValid: valueIsValid,
        hasError: thisInputHasError,
        valueChangeInputHandler: valueChangeInputHandler,
        blurHandler: blurHandler,
        reset: resetInput
    } = useInput(value => value.length !==0 && value.length<256);

    const sendDataOnServer = (event) =>{
        event.preventDefault()
        sendRequest(
            {dataUser:{"posted_message":{"content":valueEntered, 'picture': ""}, react: true},
                url:"/posted_messages",
                method: 'POST'}
        )
    }
    useEffect(() =>{
        try {
            if (status === 'completed' && (data.info['danger'] === null || data.info['danger'] === undefined)) {
                resetInput()
            }
        } catch (e) {flash('danger', e.message)}
    },[ status, data, error ])
    return (
        <Header>
            {loginContext.isLoggedIn && <MainWrapper chapter="NEW MESSAGE">
                <div className="cover">

                    <form onSubmit={sendDataOnServer}>
                        <div className="content">
                            <textarea id="posted_message_content"
                                      name="posted_message"
                                      value={valueEntered}
                                      onChange={valueChangeInputHandler}
                                      onBlur={blurHandler}>
                            </textarea>
                            {thisInputHasError &&
                                <p id="error_explanation_react">"Message can't be empty and more 256 chars"</p>}
                        </div>
                        <button className="button" disabled={!valueIsValid}> Post new message</button>
                    </form>

                    <br/>

                    <div className="link">
                        <Link to="/eg">BACK TO MAIN PAGE</Link>
                    </div>
                </div>
        </MainWrapper>}
            </Header>
    );
};

export default NewMessage;