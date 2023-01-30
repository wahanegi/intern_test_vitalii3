import React, { useReducer, useCallback } from 'react';
import flash from "../helper_function/flash";
import Home from "../Pages/Home";

function httpReducer(state, action) {
    if (action.type === 'SEND') {
        return {
            data: null,
            error: null,
            status: 'pending',
        };
    }

    if (action.type === 'SUCCESS') {
        if (action.responseData.info['notice'] !== undefined) {
            flash("notice",action.responseData.info['notice'])}
        else if(action.responseData.info['danger'] !== undefined){
            flash("danger",action.responseData.info['danger'])
        }
        return {
            data: action.responseData,
            error: null,
            status: 'completed',
        };
    }

    if (action.type === 'ERROR') {
        return {
            data: null,
            error: action.errorMessage,
            status: 'completed',
        };
    }

    return state;
}

function useHttp(requestFunction, startWithPending = false) {
    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? 'pending' : null,
        data: null,
        error: null,
    });

    const sendRequest = useCallback(
        async function (requestData) {
            dispatch({ type: 'SEND' });
            try {
                const responseData = await requestFunction(requestData);
                dispatch({ type: 'SUCCESS', responseData });
            } catch (error) {
                dispatch({
                    type: 'ERROR',
                    errorMessage: error.message || 'Something went wrong!',
                });
            }
        },
        [requestFunction]
    );

    return {
        sendRequest,
        ...httpState,
    };
}

export default useHttp;