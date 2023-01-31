import React from 'react';
import flash from "../helper_function/flash";

//TODO change domain by production
const domain = "https://cp-vitalii.herokuapp.com"
//const domain = "http://localhost:3000"
const csrf_token = document.getElementsByName('csrf-token')[0].getAttribute('content')
const csrf_param = document.getElementsByName('csrf-param')[0].getAttribute('content')

export async function registrations(sData) {
    sData[csrf_param] = csrf_token
    console.log(sData)
    // try {
    const responce = await fetch(`${domain}/users`,
        {
            'method': 'POST',
            'body': JSON.stringify(sData),
            'headers': {'Content-type': 'application/json'}
        })

    const data = await responce.json()

    if (!responce.ok){ throw new Error(data.message || 'Error by registrations. Contact the administrator by email') }
    return {'info': data}
    // }
    // catch (e) {
    //     console.log(e.message)
    // }

}

export async function requests_answers(sData) {
    sData.dataUser[csrf_param] = csrf_token
    // console.log(sData.dataUser)
    try {
        const responce = await fetch(`${domain}${sData.url}`,
            {
                'method': sData.method,
                'mode': 'cors',
                'cache': 'no-cache',
                'credentials': 'same-origin',
                'body': JSON.stringify(sData.dataUser),
                'headers': {'Content-type': 'application/json'}
            })
        const data = await responce.json()
        console.log(data)
        if (!responce.ok){ throw new Error(data.message || `Error by ${sData.dataUser.commit}. Contact the administrator by email`) }
        return {'info': data}
    }
    catch (e) {
        console.log(e.message)
        flash('danger', e.message)
    }
}