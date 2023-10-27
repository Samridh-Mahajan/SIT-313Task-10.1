import React from "react";
import './Card.css'

const Card = (props) => {
    return (<div className="column">
        <img src={props.avatar} alt="staff" width={400} height={300}/>
        <h3>{props.name}</h3>
        <p >{props.position}</p>
        <a  >{props.rating}</a>
        <h4 >{props.author}</h4>
        </div>);
}

export default Card;