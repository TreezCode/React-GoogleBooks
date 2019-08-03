import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
    <div className="jumbotron text-center py-5">
        <div className="content">        
            { children }
        </div>
    </div>
)

export default Jumbotron;