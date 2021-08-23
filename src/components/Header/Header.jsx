import React, {Fragment, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Image from "../../uiElements/image/Image";
import ButtonHover from "../../uiElements/ButtonHover/ButtonHover";
import "./style.css";

const Header = () => {
    const [actionScroll, setActionScroll] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const topNav = useSelector(state => state.topNav);
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        window.addEventListener("resize", handleResize);
    }, []);

    const onScroll = (e) => {
        if (e.target.documentElement.scrollTop > 200) {
            setActionScroll(true);
        } else {
            setActionScroll(false);
        }
    }

    const handleResize = () => {
        if (window.innerWidth > 992) {
            setShowMenu(false);
        }
    }
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <Fragment>
            <header id="header" className={actionScroll ? "actionScroll" : ""}>
                <div className="headerBox">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-6">
                                <div className="d-lg-block d-none">
                                    <nav className="linkHeader">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <ButtonHover toPath='/login'>ورود به سایت</ButtonHover>
                                            </li>

                                            {topNav.map((item) => (
                                                <li key={item.id} className="nav-item">
                                                    <NavLink id={item.id}
                                                             activeStyle={item.id !== 1 && {color: "#ee3a0f"}}
                                                             to={item.path}>{item.title}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                                <div className="d-lg-none d-block">
                                        <div className="buttonToggleMenu" onClick={handleShowMenu}>
                                            <span/>
                                            <span/>
                                            <span/>
                                        </div>

                                        <nav className={showMenu ? "linkHeaderResponsive activeMenu" : "linkHeaderResponsive"}>
                                            <ul>
                                                {topNav.map((item) => (
                                                    <li key={item.id} className="nav-item">
                                                        <NavLink id={item.id}
                                                                 activeStyle={item.id !== 1 && {color: "#ee3a0f"}}
                                                                 to={item.path}>{item.title}</NavLink>
                                                    </li>
                                                ))}
                                                <li className="nav-item">
                                                    <ButtonHover toPath='/login'>ورود به سایت</ButtonHover>
                                                </li>
                                            </ul>
                                        </nav>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6">
                                <div className="imgLogo">
                                    <NavLink to="/">
                                        <Image src={'./img/logo/logo-min.png'} alt={'topTeach logo'}/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
