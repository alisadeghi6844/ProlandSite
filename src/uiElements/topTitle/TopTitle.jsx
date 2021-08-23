import React,{Fragment} from 'react';
import "./style.css";
import {NavLink} from "react-router-dom";
import Image from "../image/Image";

const TopTitle = (props) => {
    return (
        <Fragment>
            <div className="topTitleUIE">
                {props.link?(<h5><NavLink to={props.pathname}>{props.children}</NavLink></h5>):(<h5>{props.children}</h5>)}

            </div>
        </Fragment>
    );
};

export default TopTitle;
TopTitle.defaultProps = {
    link:false
}
