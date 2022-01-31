import React, {useEffect, useState} from 'react';
import Image from "../../../uiElements/image/Image";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

const Recruitment = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 992;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    return (
        <>
            <div className="recruitmentWrapper">
                <div className="container">
                    <div className="titleRec">
                        <h2>شرایط استخدام برنامه نویس و مدرس در <span>Proland</span></h2>
                    </div>
                    <div className="recWrapper">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <ScrollAnimation animateIn='fadeInUp'
                                                 delay={50}>
                                    <div className="resBox">
                                        <div className="descriptionBox">
                                            <h6>خلاق و باهوش</h6>
                                            <p>یکی از شرایط شرایط همکاری ما با شما خلاقیت و هوش فردی شما است</p>
                                        </div>
                                        <div className="img">
                                            <Image src={'./img/aboutUs/portfolio-image-min.png'}/>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <ScrollAnimation animateIn='fadeInUp'
                                                 delay={width>breakPoint?350:200}>
                                    <div className="resBox">
                                        <div className="descriptionBox">
                                            <h6>خلاق و باهوش</h6>
                                            <p>یکی از شرایط شرایط همکاری ما با شما خلاقیت و هوش فردی شما است</p>
                                        </div>
                                        <div className="img">
                                            <Image src={'./img/aboutUs/portfolio-image-min.png'}/>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <ScrollAnimation animateIn='fadeInUp'
                                                 delay={width>breakPoint?650:350}>
                                    <div className="resBox">
                                        <div className="descriptionBox">
                                            <h6>خلاق و باهوش</h6>
                                            <p>یکی از شرایط شرایط همکاری ما با شما خلاقیت و هوش فردی شما است</p>
                                        </div>
                                        <div className="img">
                                            <Image src={'./img/aboutUs/portfolio-image-min.png'}/>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <ScrollAnimation animateIn='fadeInUp'
                                                 delay={width>breakPoint?950:500}>
                                    <div className="resBox">
                                        <div className="descriptionBox">
                                            <h6>خلاق و باهوش</h6>
                                            <p>یکی از شرایط شرایط همکاری ما با شما خلاقیت و هوش فردی شما است</p>
                                        </div>
                                        <div className="img">
                                            <Image src={'./img/aboutUs/portfolio-image-min.png'}/>
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

export default Recruitment;
