import React, {Fragment} from 'react';
import {Parallax} from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ButtonHover from "../../../uiElements/ButtonHover/ButtonHover";
import "./style.css";
import Image from "../../../uiElements/image/Image";


const TitleHomePage = () => {
    return (
        <Fragment>
            <div className="homePageTitleWrapper">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 img">
                            <div className="d-lg-block d-none">
                                <Parallax className="custom-class" y={[-20, 50]}
                                          tagOuter="figure">
                                    <div className="bannerBox">
                                        <Image src={'./img/homePage/banner_img.png.webp'} alt={'proland.website'}/>
                                    </div>
                                </Parallax>
                            </div>
                            <div className="d-lg-none d-block">
                                    <div className="bannerBox">
                                        <Image src={'./img/homePage/banner_img.png.webp'} alt={'proland.website'}/>
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-6 title">
                            <div className="titleBox">
                                <h5>همه ما سالها در صدد یادگیری هستیم</h5>
                                <ScrollAnimation delay={100} animateIn='flipInX'>
                                    <h1>دنیای خودمان و فرزندانمان را بهتر کنیم</h1>
                                </ScrollAnimation>
                                <p className="explanation">با یادگیری برنامه نویسی آینده شغلی خودتان و فرزندانتان را
                                    تضمین کنید و همیشه در عرصه های جهانی به روز باشید .</p>
                                <div className="buttons">
                                    <ButtonHover className="start" toPath="/guide">شروع کردن</ButtonHover>
                                    <ButtonHover className="view" toPath="/courses">دیدن دوره ها</ButtonHover>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default TitleHomePage;
