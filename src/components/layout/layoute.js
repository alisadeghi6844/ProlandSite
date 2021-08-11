import React from 'react';
import Header from "../Header/Header";

const Layout = (props) => {
    return (
        <div>
            <div className="layout">
            <Header/>
            <div className="main">
                {props.children}
            </div>
            </div>
        </div>
    );
};

export default Layout;
