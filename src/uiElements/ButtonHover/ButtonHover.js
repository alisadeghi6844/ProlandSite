import React from 'react';
import {Button} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./style.css";

const ButtonHover = (props) => {
    return (
        <div>
            <div className="buttonHoverUI">
                <Button className={props.className}>
                    <NavLink to={props.toPath}>{props.children}</NavLink>
                </Button>
            </div>
        </div>
    );
};

export default ButtonHover;
