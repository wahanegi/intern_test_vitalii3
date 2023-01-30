import React from 'react';
import IconReact from "../icons/IconReact";
const MainWrapper = props => {
    return (
        <div className ='wrapper'>
            <h2>{props.chapter}
                <IconReact/>
            </h2>
            <div className='cover'>
                {props.children}
            </div>
        </div>
    )
}

export default MainWrapper;