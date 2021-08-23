import React, {Fragment} from 'react';
import {Parallax} from "react-scroll-parallax";
import Image from "../../../uiElements/image/Image";
import "./style.css";
import ButtonHover from "../../../uiElements/ButtonHover/ButtonHover";
import TopTitle from "../../../uiElements/topTitle/TopTitle";

const LearnBox = () => {
    return (
        <Fragment>
            <div className="learnBoxWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="title">
                                <TopTitle link={true} pathname="/aboutUs">درباره ما</TopTitle>
                                <h2>یادگیری برنامه نویسی با عشق و علاقه</h2>
                                <p>ما همواره در تلاش هستیم که برنامه نویسی را به روشی نوین و با عشق و علاقه به شما
                                    علاقه مندان به برنامه نوسی آموزش بدهیم تا شما با یادگیری برنامه نویسی آینده شغلی
                                    خودتان را تامین کنید . </p>
                                <ul>
                                    <li><i className="fa fa-pencil"/> آموزش توسط بهترین اساتید برنامه نویسی ایران</li>
                                    <li><i className="fa fa-book"/> آموزش از طریق بهترین و به روز ترین متد های آموزشی
                                        دنیا
                                    </li>
                                </ul>
                                <div className="button">
                                    <ButtonHover toPath="/readMore/learning">بیشتر بخوانید</ButtonHover>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-lg-2 order-1">
                            <div className="d-lg-block d-none">
                                <div className="bannerLearning">
                                    <Parallax className="custom-class" y={[-30, 35]}
                                              tagOuter="figure">
                                        <Image src={`./img/homePage/learning_img-min.png`} alt="یادگیری برنامه نویسی"
                                        />
                                    </Parallax>
                                </div>
                            </div>
                            <div className="d-lg-none d-block">
                                <div className="bannerLearning">
                                        <Image src={`./img/homePage/learning_img-min.png`} alt="یادگیری برنامه نویسی"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default LearnBox;
