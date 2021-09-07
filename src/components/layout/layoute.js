import React from 'react';
import Header from "../Header/Header";
import Footer from "../footer/Footer";
import {withRouter} from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";

const Layout = (props) => {
    const {pathname} = props.location;
    return (
        <div>
            <div className="layout">
                <LoadingBar style={{
                    backgroundImage: "-webkit-linear-gradient(0deg,#ee390f 0%,#f9b700 100%)",
                    height: "5px",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    zIndex: 1000000000000000000
                }}/>
                <Header/>
                <div className="main">
                    {props.children}
                </div>
                {pathname === "" ? null : <Footer/>}
            </div>
        </div>
    );
};

export default withRouter(Layout);
