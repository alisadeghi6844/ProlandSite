import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Image from "../../../uiElements/image/Image";
import "./style.css";
import "./darkMode.css";


const StudentsSlider = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;


    useEffect(() => {
        const handleResizeWindow = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResizeWindow);

    }, []);


    const dataStudent = useSelector(state => state.studentsOpinion);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.35,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <>
            <div className="studentsSliderWrapper">
                <div className="title">
                    <p>نظرات</p>
                    <h2>نظرات دانشجویان</h2>
                </div>

                <div className="slider">
                    <div className={width > breakPoint ? "container" : "container-fluid"}>
                        <Slider {...settings}>
                            {dataStudent.map(item => (
                                <div className="item" key={item.id}>
                                    <div className="row">
                                        <div className="col-sm-4 order-sm-1 order-2">
                                            <div className="img">
                                                <Image
                                                    src={item.img}
                                                    alt={item.course}/>
                                            </div>
                                        </div>
                                        <div className="col-sm-8 order-sm-2 order-1">
                                            <div className="textStudent">
                                                <p>{item.text}</p>
                                                <h4>{item.nameStudent}</h4>
                                                <h5><NavLink to={item.path}>{item.course}</NavLink></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentsSlider;
