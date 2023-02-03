import React from 'react';

const Card = (props) => {

    return (
        <li  className="card" >
            <section>
                <aside className="avatar">
                    <span className="user_info">{props.children.id_posted}</span>
                    <div className="left-side">
                        <img src={props.children.gravatar_url} alt={props.children.user_name} className = "gravatar"  width = "100px" />
                    </div>
                </aside>
            </section>
            <span>@{props.children.user_name}-{props.children.user_email} | </span>
            <span>Posted {props.children.created_at_in_words} ago</span>
            <div className="posted_message">
                {props.children.content}
                {!!props.children.picture_url && <img src={props.children.picture_url} alt='photo'/> }
            </div>
        </li>
    );
};

export default Card;