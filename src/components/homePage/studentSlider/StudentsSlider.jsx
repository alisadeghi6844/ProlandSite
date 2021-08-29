import React from 'react';
import Slider from "react-slick";
import Image from "../../../uiElements/image/Image";
import "./style.css";


const StudentsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.35,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000
    };
    return (
        <>
            <div className="studentsSliderWrapper">
                <div className="title">
                    <p>نظرات</p>
                    <h2>نظرات دانشجویان</h2>
                </div>

                <div className="slider">
                    <div className="container">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="row">
                                <div className="col-4">
                                    <Image
                                        src={'./img/homePage/xtestimonial_img_1.png.pagespeed.ic.k5R0ygRF_S.webp'}
                                        alt={'نظر دانشجویان دوره'}/>
                                </div>
                                <div className="col-8">
                                    <div className="textStudent">
                                        <p>من از این دوره خیلی رازی بودم و تونستم بلافاصله بعد از به اتمام رساندن این
                                            دوره برم سر کار و واقعا برام مفید بود</p>
                                        <h4>علی صادقی</h4>
                                        <h5>دوره آموزش React</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-4">
                                    <Image
                                        src={'./img/homePage/xtestimonial_img_1.png.pagespeed.ic.k5R0ygRF_S.webp'}
                                        alt={'نظر دانشجویان دوره'}/>
                                </div>
                                <div className="col-8">
                                    <div className="textStudent">
                                        <p>من از این دوره خیلی رازی بودم و تونستم بلافاصله بعد از به اتمام رساندن این
                                            دوره برم سر کار و واقعا برام مفید بود</p>
                                        <h4>علی صادقی</h4>
                                        <h5>دوره آموزش React</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-4">
                                    <Image
                                        src={'./img/homePage/xtestimonial_img_1.png.pagespeed.ic.k5R0ygRF_S.webp'}
                                        alt={'نظر دانشجویان دوره'}/>
                                </div>
                                <div className="col-8">
                                    <div className="textStudent">
                                        <p>من از این دوره خیلی رازی بودم و تونستم بلافاصله بعد از به اتمام رساندن این
                                            دوره برم سر کار و واقعا برام مفید بود</p>
                                        <h4>علی صادقی</h4>
                                        <h5>دوره آموزش React</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentsSlider;
