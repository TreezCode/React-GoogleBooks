import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
    <div className="jumbotron text-center py-5">
        { children }
    </div>
)

export default Jumbotron;