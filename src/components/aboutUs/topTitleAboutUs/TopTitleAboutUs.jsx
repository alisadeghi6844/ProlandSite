import React from 'react';
import {NavLink} from "react-router-dom";
import {Breadcrumbs} from "@material-ui/core";
import "./style.css";

const TopTitleAboutUs = () => {
    return (
        <>
            <div className="topTitleAboutUs">
                <div className="titleAboutUsWrapper">
                    <div className="title">
                        <h2>درباره ما</h2>
                        <div className="breadcrumbs">
                            <Breadcrumbs aria-label="breadcrumb">
                                <NavLink color="inherit" exact to="/">
                                    خانه
                                </NavLink>
                                <NavLink color="inherit" to="/aboutUs">
                                    درباره ما
                                </NavLink>
                            </Breadcrumbs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopTitleAboutUs;
