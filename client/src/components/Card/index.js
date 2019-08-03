import React from "react";
import "./Card.css";

const Card = ({ title, children }) => (
    <div className="card mb-3">
        <div className="card-header">{ title }</div>
        <div className="card-body">{ children }</div>
    </div>
)

export default Card;