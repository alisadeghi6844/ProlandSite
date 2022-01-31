import React from 'react';
import {Button} from "@material-ui/core";
import "./style.css";
import Image from "../../../uiElements/image/Image";
import ScrollAnimation from "react-animate-on-scroll";
import {Parallax} from "react-scroll-parallax";

const SendEmail = () => {
    return (
        <>
            <div className="sendEmail">
                <div className="sendEmailWrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <ScrollAnimation animateIn='fadeInUp'
                                                 delay={100}>
                                    <div className="formEmail">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="name" className="form-control" placeholder="نام"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="surname" className="form-control"
                                                       placeholder="نام خانوادگی"/>
                                            </div>
                                        </div>
                                        <input type="email" className="form-control" placeholder="آدرس ایمیل"/>
                                        <textarea className="form-control" rows="5" placeholder="متن پیام"/>
                                        <Button>ارسال پیام</Button>
                                        <div className="img">
                                            <div className="d-lg-block d-none">
                                                <Parallax className="custom-class" y={[-30, 40]}
                                                          tagOuter="figure">
                                                    <Image src="./img/aboutUs/contact-decoration-min.png"
                                                           alt="ارسال ایمیل"/>
                                                </Parallax>
                                            </div>
                                            <div className="d-lg-none d-block">
                                                <Image src="./img/aboutUs/contact-decoration-min.png"
                                                       alt="ارسال ایمیل"/>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-6 order-lg-2 order-1">
                                <ScrollAnimation animateIn='fadeInDown'
                                                 delay={100}>
                                    <div className="text">
                                        <h3>نظرات , سوالات , انتقادات و پیشهنادات خود را از طریق ایمیل برای ما ارسال
                                            کنید
                                            .</h3>
                                        <p>با انتقادات و پیشنهادات خود همواره به ما کمک می کنید تا دوره هایی بی نقص و
                                            حرفه
                                            ای در اختیار شما قرار دهیم .</p>
                                        <div className="phone">
                                            <h4>شماره تماس ما : </h4>
                                            <span><i className="fa fa-phone"/> 09904456321</span>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SendEmail;
