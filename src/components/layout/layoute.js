import React from 'react';
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import {withRouter} from "react-router-dom";

const Layout = (props) => {
    const {pathname} = props.location;
    return (
        <div>
            <div className="layout">
                <Header/>
            <div className="main">
                {props.children}
            </div>
                {pathname === "" ? null:<Footer/>}
            </div>
        </div>
    );
};

export default withRouter(Layout);
