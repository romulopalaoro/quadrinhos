import React from 'react';
import "./card.css"

const Card = (props) => {
    return (
        <div>
            <a href={props.url}>{props.texto}</a>
        </div>
    );
}

export default Card;
