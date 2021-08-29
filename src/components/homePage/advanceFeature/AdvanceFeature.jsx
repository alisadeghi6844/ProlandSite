import React from 'react';
import Image from "../../../uiElements/image/Image";
import TopTitle from "../../../uiElements/topTitle/TopTitle";
import "./style.css";
import {Parallax} from "react-scroll-parallax";
import {NavLink} from "react-router-dom";

const AdvanceFeature = () => {
    return (
        <>
            <div className="advanceFeatureWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-1 order-2">
                            <div className="img">
                                <div className="d-lg-block d-none">
                                    <Parallax className="custom-class" x={[-20, 25]}
                                              tagOuter="figure">
                                        <Image
                                            src={'./img/homePage/xadvance_feature_img.png.pagespeed.ic.oXXPvVL-Eh-min.png'}
                                            alt="راهنمای انتخاب زبان"/></Parallax>
                                </div>

                                <div className="d-lg-none d-block">
                                    <Image
                                        src={'./img/homePage/xadvance_feature_img.png.pagespeed.ic.oXXPvVL-Eh-min.png'}
                                        alt="راهنمای انتخاب زبان"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  order-lg-2 order-1">
                            <div className="text">
                                <div className="title">
                                    <TopTitle link={true} pathname="/guide">راهنمای انتخاب زبان</TopTitle>
                                    <h2>سیستم راهنمای انتخاب زبان برنامه نویسی ما</h2>
                                </div>
                                <div className="description">
                                    <p><NavLink to="/guide">سیستم راهنمای انتخاب زبان برنامه نویسی</NavLink> بستری را برای شما فراهم خواهد کرد که شما
                                        با گفتن علایق و نیاز هایتان می توانید زبان برنامه نویسی که برای شما مناسب است را
                                        پیدا کنید . این سیستم توسط مهندسان سایت پرولند طراحی شده و در اختیار شما قرار
                                        گرفته است تا از سردرگمی انتخاب زبان برنامه نویسی خارج شوید .</p>
                                </div>
                                <div className="feature">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="interest">
                                                <div className="icon">
                                                    <i className="fa fa-heart-o"/>
                                                </div>
                                                <div className="title">
                                                    <h4>علایق شما</h4>
                                                </div>
                                                <div className="text">
                                                    <p>این سیستم پیشرفته با بررسی علایق شما زبان برنامه نویسی مناسب
                                                        شمارا پیش
                                                        بینی می کند</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="need">
                                                <div className="icon">
                                                    <i className="fa fa-bullhorn"/>
                                                </div>
                                                <div className="title">
                                                    <h4>ویژگی های شما</h4>
                                                </div>
                                                <div className="text">
                                                    <p>همچینین با فهمیدن ویژگی های شما می تواند زبان های برنامه نویسی
                                                        مناسب را
                                                        پیشنهاد دهد</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdvanceFeature;
