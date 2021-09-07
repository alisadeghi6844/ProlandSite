import React from 'react';
import "./style.css";
import Image from "../../../uiElements/image/Image";

const AboutFeatures = () => {
    return (
        <>
            <div className="aboutFeatures">
                <div className="aboutFeaturesWrapper">
                    <div className="container">
                        <div className="row">
                            <di className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="featureBox">
                                            <div className="icon">
                                                <Image src={'./img/aboutUs/service-icon-01-min.png'}/>
                                            </div>
                                            <div className="text">
                                                <h6>آموزش پرژه محور</h6>
                                                <p>تمامی آموزش های ما به صورت پروژه محور می باشد که دانشجو پس از به
                                                    پایان
                                                    رساندن دوره پروژه اختصاصی خود را داشته باشد</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="featureBox">
                                            <div className="icon">
                                                <Image src={'./img/aboutUs/service-icon-02-min.png'}/>
                                            </div>
                                            <div className="text">
                                                <h6>آموزش پرژه محور</h6>
                                                <p>تمامی آموزش های ما به صورت پروژه محور می باشد که دانشجو پس از به
                                                    پایان
                                                    رساندن دوره پروژه اختصاصی خود را داشته باشد</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="featureBox">
                                            <div className="icon">
                                                <Image src={'./img/aboutUs/service-icon-03-min.png'}/>
                                            </div>
                                            <div className="text">
                                                <h6>آموزش پرژه محور</h6>
                                                <p>تمامی آموزش های ما به صورت پروژه محور می باشد که دانشجو پس از به
                                                    پایان
                                                    رساندن دوره پروژه اختصاصی خود را داشته باشد</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="featureBox">
                                            <div className="icon">
                                                <Image src={'./img/aboutUs/service-icon-01-min.png'}/>
                                            </div>
                                            <div className="text">
                                                <h6>آموزش پرژه محور</h6>
                                                <p>تمامی آموزش های ما به صورت پروژه محور می باشد که دانشجو پس از به
                                                    پایان
                                                    رساندن دوره پروژه اختصاصی خود را داشته باشد</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </di>
                            <div className="col-lg-4">
                                <div className="img">
                                    <Image src={'./img/aboutUs/about-left-image-min.png'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutFeatures;
