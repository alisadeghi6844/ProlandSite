import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

const TeachersInfo = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;

    useEffect(() => {
        const handleResizePage = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResizePage);
    }, []);
    return (
        <>
            <div className="teachersInfoWrapper">
                <div className={width > breakPoint ? "container" : "container-fluid"}>
                    <div className="title">
                        <h5>اساتید</h5>
                        <h2>مدرسین سایت Proland</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn='fadeIn'
                                             delay={50}>
                                <div className="teacherBox">
                                    <div className="box1">
                                        <div className="img"/>
                                        <div className="textBox">
                                            <div className="teacherJob">
                                                <NavLink to="/">برنامه نویس</NavLink>
                                            </div>
                                            <div className="titleBox">
                                                <h4>علی صادقی</h4>
                                                <p>علی صادقی هستم برنامه نویس و توسعه دهنده وب و رزومه کامل من رو
                                                    میتونید از
                                                    این <span><NavLink to="/">لینک</NavLink></span> مشاهده کنید .</p>
                                            </div>
                                            <div className="footerBox">
                                                <div className="likes">
                                                    <span>100k پسندیده</span>
                                                    <i className="fa fa-heart-o"/>
                                                </div>
                                                <div className="comments">
                                                    <span>50 کامنت</span>
                                                    <i className="fa fa-comment-o"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn='fadeIn'
                                             delay={200}>
                                <div className="teacherBox">
                                    <div className="box2">
                                        <div className="img"/>
                                        <div className="textBox">
                                            <div className="teacherJob">
                                                <NavLink to="/">دیزاینر</NavLink>
                                            </div>
                                            <div className="titleBox">
                                                <h4>رها احمدی</h4>
                                                <p>رها احمدی هستم دیزاینر و طراح قالب سایت و رزومه کامل من رو میتونید از
                                                    این <span><NavLink to="/">لینک</NavLink></span> مشاهده کنید .</p>
                                            </div>
                                            <div className="footerBox">
                                                <div className="likes">
                                                    <span>50k پسندیده</span>
                                                    <i className="fa fa-heart-o"/>
                                                </div>
                                                <div className="comments">
                                                    <span>20 کامنت</span>
                                                    <i className="fa fa-comment-o"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <ScrollAnimation animateIn='fadeIn'
                                             delay={450}>
                                <div className="teacherBox">
                                    <div className="box3">
                                        <div className="img"/>
                                        <div className="textBox">
                                            <div className="teacherJob">
                                                <NavLink to="/">طراح سایت</NavLink>
                                            </div>
                                            <div className="titleBox">
                                                <h4>رضا محمدی</h4>
                                                <p>رضا محمدی هستم طراح سایت و رزومه کامل من رو میتونید از
                                                    این <span><NavLink to="/">لینک</NavLink></span> مشاهده کنید .</p>
                                            </div>
                                            <div className="footerBox">
                                                <div className="likes">
                                                    <span>30k پسندیده</span>
                                                    <i className="fa fa-heart-o"/>
                                                </div>
                                                <div className="comments">
                                                    <span>10 کامنت</span>
                                                    <i className="fa fa-comment-o"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeachersInfo;
