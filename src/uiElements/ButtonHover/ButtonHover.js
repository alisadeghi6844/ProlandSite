import React from 'react';
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./style.css";

const ButtonHover = (props) => {
    return (
        <div>
            <div className="buttonHoverUI">
                <NavLink className="link" to={props.toPath}><Button className={props.className}>
                    <span>
                        {props.children}
                    </span>
                </Button></NavLink>
            </div>
        </div>
    );
};

export default ButtonHover;
