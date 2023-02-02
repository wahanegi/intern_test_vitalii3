import React from 'react';
import Card from "./Card";

const ListPostedMessages = () => {
    const data = [{
        id_posted:1,
        gravatar_url:"https://enn.com",
        user_name:"vitalii",
        user_email:"not@full.com",
        created_at_in_words: "4 minute",
        content: "Something interesting and funny",
        picture_url:"https://herokuapp.com"
    },
        {
        id_posted:1,
        gravatar_url:"https://enn.com",
        user_name:"vitalii",
        user_email:"not@full.com",
        created_at_in_words: "4 minute",
        content: "Something interesting and funny",
        picture_url:"https://herokuapp.com"}]

    return (
        <div className="road">
            <ul>
                {data.map((dt)=>(<Card>{dt}</Card>))}
            </ul>
        </div>
    );
};

export default ListPostedMessages;