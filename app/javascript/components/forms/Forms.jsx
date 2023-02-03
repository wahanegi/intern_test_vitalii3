import React, {useEffect} from 'react';
import MainWrapper from "../Wrappers/MainWrapper";
import FieldInput from "../Wrappers/FieldInput";

import {useState} from "react";

//TODO - howFields by default setup with value 4
// for 2 fields (password & password_confirmation)  must be 3
//for 2 fields (email&password) must be 2
//for 1 fields (email only) must be 1
const Forms = (props) => {
    const[formData, setFormData] = useState({isValid: true, data:{}})
    const [enteredName, setEnteredName] = useState({})
    const [enteredEmail, setEnteredEmail] = useState({})
    const [enteredPsw, setEnteredPsw] = useState({})
    const [enteredPswCnf, setEnteredPswCnf] = useState({})
    const [fields, setFields] =useState(4)

    //Conditions and error's messages
    const nameCond = value => value.trim() !== '' && value.length > 1 &&  value.length < 20
    const errName = "can't be empty or less 2 chars and more 20 chars"
    const emailCond = value =>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    const errEmail = "can't be empty and must be really"

    const pswCond = value => value.trim() !== '' && value.length > 5 &&  value.length < 128
    const errPsw = "can't be empty and must be \nhave minimum 6 chars and equal to password"

    useEffect(()=>{
        setFields(props.howFields*1)
    })

    const formSubmissionHandler = event =>{
        event.preventDefault()
        props.action(formData.data)
    }

    useEffect(() => {
        if ((fields !== 4 || enteredName.isValid)
            && (((fields !== 1) && (fields !== 2) && (fields !== 4)) || enteredEmail.isValid)
            && (((fields % 2) && (fields % 3)) || enteredPsw.isValid)
            && (((fields !== 4) && (fields !== 3)) || enteredPswCnf.isValid)
        ){
            setFormData({isValid:true, data:{
                    name: enteredName.value,
                    email: enteredEmail.value,
                    password: enteredPsw.value,
                    password_confirmation: enteredPswCnf.value,
                    return_secure_token: true
                }})
        } else {
            setFormData({isValid:false, data:{}})
        }
    }, [enteredName, enteredEmail, enteredPswCnf, enteredPsw])

    const nameData = obj => {
        setEnteredName(obj)
    }
    const emailData = obj => {
        setEnteredEmail(obj)
    }
    const pswData = obj => {
        setEnteredPsw(obj)
    }
    const pswCnfData = obj => {
        setEnteredPswCnf(obj)
    }

    return (
        <MainWrapper chapter={props.title}>
            <form onSubmit={formSubmissionHandler}>
                { fields === 4 &&
                    <FieldInput label="name" type="text" data={nameData} cond={nameCond} err={errName}/>}
                { (fields === 4|| fields === 2 || fields === 1 ) &&
                    <FieldInput label="email" type="email" data={emailData} cond={emailCond} err={errEmail}/>}
                { (fields === 4 || fields === 2 || fields === 3 ) &&
                    <FieldInput label="password" type="password" data={pswData} cond={pswCond} err={errPsw}/>}
                {  (fields === 4 || fields === 3 ) &&
                    <FieldInput label="password confirmation" type="password" data={pswCnfData} cond={pswCond} err={errPsw}/>}
                <button className="button" disabled={!formData.isValid}>{props.wrtOnBtn || "Submit"}</button>
                {props.children}
            </form>
        </MainWrapper>
    )
}

export default Forms