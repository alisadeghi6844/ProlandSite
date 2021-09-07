import React from 'react';
import {Parallax} from "react-scroll-parallax";
import Image from "../../../uiElements/image/Image";
import "./style.css";

const IntroducingTheTeam = () => {
    return (
        <>
            <div className="introducingTheTeam">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="textBox">
                                <div className="title">
                                    <h2>آموزش برنامه نویسی زیر نظر بهترین اساتید ایران</h2>
                                    <p>مهم ترین مرحله تبدیل شدن به یک برنامه نویس حرفه ای آموزش مناسب و کافی است و تیم
                                        ما با داشتن اساتیدی با تجربه و مجرب شمارا در این مسیر همراهی خواهد کرد .تیم ما
                                        با بیش از 10 سال سابقه تدریس همواره در زمینه آموزش برنامه نویسی پیشتاز بوده
                                        است .</p>
                                </div>
                                <div className="chart">
                                    <div className="programmerProgress">
                                        <div className="textProgress">
                                            <div className="number">95%</div>
                                            <div className="text">HTML&&CSS</div>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: "95%"}}
                                                 aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    <div className="programmerProgress">
                                        <div className="textProgress">
                                            <div className="number">90%</div>
                                            <div className='text'>JAVASCRIPT</div>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: "90%"}}
                                                 aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                    <div className="programmerProgress">
                                        <div className="textProgress">
                                            <div className="number">85%</div>
                                            <div className="text">REACT</div>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{width: "85%"}}
                                                 aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img">
                                <div className="d-lg-block d-none">
                                    <Parallax className="custom-class" y={[-20, 25]}
                                              tagOuter="figure">
                                        <Image src={'./img/aboutUs/Video game developer-amico-min.png'}
                                               alt={'اساتید مجرب برنامه نویسی'}/>
                                    </Parallax>
                                </div>
                                <div className="d-lg-none d-block">
                                    <Image src={'./img/aboutUs/Video game developer-amico-min.png'}
                                           alt={'اساتید مجرب برنامه نویسی'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IntroducingTheTeam;
