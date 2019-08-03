import React from "react";
import "./list.css";

export const List = ({ children }) =>  (
    <div className="list-overflow-container">
        <ul className="list-group">
            {children}
        </ul>
    </div>
);

export const ListItem = ({ children }) => (
    <li className="list-group-item my-2">
        {children}
    </li>
);