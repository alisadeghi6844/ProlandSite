import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Image from "../../uiElements/image/Image";
import "./style.css";
import "./darkMode.css";

const Footer = () => {
    const topNav = useSelector(state => state.topNav);
    return (
        <>
            <footer id="footer">
                <div className="footerWrapper">
                    <div className="footerBox">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 order-md-1 order-3">
                                    <div className="contactUs">
                                        <div className="title">
                                            <h4>ارتباط با ما</h4>
                                        </div>
                                        <div className="lists">
                                            <ul>
                                                <li>
                                                    <span>آدرس : </span> اصفهان , اصفهان , خیابان امام خمینی
                                                </li>
                                                <li>
                                                    <span>تلفن : </span> +98 09904456321
                                                </li>
                                                <li>
                                                    <span>ایمیل : </span> <a href="mailto:prolandwebsite@gmail.com" target="_blank">prolandwebsite@gmail.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 order-md-2 order-1">
                                    <div className="links">
                                        <div className="title">
                                            <h4>لینک ها</h4>
                                        </div>
                                        <div className="lists">
                                            <ul>
                                                {topNav.map((item)=>(
                                                    <li key={item.id} className="nav-item">
                                                        <NavLink id={item.id}
                                                                 activeStyle={item.id !== 1 && {color: "#ee3a0f"}}
                                                                 to={item.path}>{item.title}</NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="socialMedia">
                                            <ul className="nav">
                                                <li className="nav-item"><a href="http://instagram.com/proland.com_" target="_blank"><i
                                                    className="fa fa-instagram"/></a>
                                                </li>
                                                <li className="nav-item"><a href="https://wa.me/09904456321" target="_blank"><i className="fa fa-whatsapp"/></a>
                                                </li>
                                                <li className="nav-item"><a href="https://telegram.me/ALISA98445" target="_blank"><i className="fa fa-telegram"/></a>
                                                </li>
                                                <li className="nav-item"><a href="#"><i className="fa fa-linkedin"/></a>
                                                </li>
                                                <li className="nav-item"><a href="#"><i className="fa fa-gitlab"/></a>
                                                </li>
                                                <li className="nav-item"><a href="https://www.youtube.com/channel/UCUYBgDhDtNhNSvTZwU8c0CQ/featured" target="_blank"><i className="fa fa-youtube-play"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 order-md-3 order-2">
                                    <div className="description">
                                        <div className="logo">
                                            <NavLink to="/">
                                                <Image src={'./img/logo/logo-min.png'} alt={'topTeach logo'}/>
                                            </NavLink>
                                        </div>
                                        <div className="text">
                                            <p>تیم ما همواره در تلاش است با برگزاری بهترین و با کیفیت ترین دوره های
                                                آموزشی
                                                ایران همواره شما دوستاران برنامه نویسی را همراهی کند و به بازار کار
                                                معرفی
                                                کند .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="text">
                            این سایت متعلق به شرکت <span> Proland </span> می باشد و هرگونه کپی برداری از آن غیر قانونی
                            است
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
