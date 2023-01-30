import React, {useState} from 'react';

const UseInput = (validateValue) => {
    const [ valueEntered, setValueEntered ] = useState('')
    const [ isTouched, setIsTouched ] = useState(false)

    const valueIsValid = validateValue(valueEntered)
    const hasError = !valueIsValid && isTouched;

    const valueChangeInputHandler = event =>{
        setValueEntered(event.target.value)
    }
    const blurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setValueEntered('')
        setIsTouched(false)
    }

    return (
        {
            value: valueEntered,
            isValid: valueIsValid,
            hasError,
            valueChangeInputHandler,
            blurHandler,
            reset
        })
};

export default UseInput;