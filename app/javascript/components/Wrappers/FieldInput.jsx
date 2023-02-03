import React, {useEffect} from 'react';

import useInput from "../hooks/use-input";

const FieldInput = props => {
    const {
        value: valueEntered,
        isValid: valueIsValid,
        hasError: thisInputHasError,
        valueChangeInputHandler: valueChangeInputHandler,
        blurHandler: blurHandler,
        reset: resetInput
    } = useInput(props.cond);

    useEffect(() => {
        props.data({
            value: valueEntered,
            hasError: thisInputHasError,
            isValid: valueIsValid,
            reset: resetInput
        })

    }, [thisInputHasError, valueEntered, valueIsValid] )
    const inputClasses = thisInputHasError ? 'invalid' : ''

    return (
        <div className="field">
            <label htmlFor={props.label} className="label">{props.label}</label><br />
            <input
                type={props.type}
                className={inputClasses}
                onChange={valueChangeInputHandler}
                onBlur={blurHandler}
                value={valueEntered}
                autoComplete={props.label}
            />
            {thisInputHasError && <p id="error_explanation_react">{props.label} {props.err}</p>}
        </div>
    );
};

export default FieldInput;