import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import StarRatings from 'react-star-ratings';
import Image from "../../../uiElements/image/Image";
import "./style.css";
import NumberSplit from "../../../uiElements/numberSplit/NumberSplit";
import ScrollAnimation from "react-animate-on-scroll";

const SpecialCourses = () => {
    const dataCourses = useSelector(state => state.homePageCourses);

    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 768;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <>
            <div className="specialCoursesWrapper">
                <div className="title">
                    <p><NavLink to="/courses">دوره های عمومی</NavLink></p>
                    <h2>دوره های تخصصی</h2>
                </div>

                <div className="courses">
                    <div className={width > breakPoint ? "container" : "container-fluid"}>
                        <div className="row">
                            {dataCourses.map((course) => (
                                <div className="col-lg-4 col-sm-6" key={course.id}>
                                    <ScrollAnimation animateIn='fadeIn'>
                                        <div className="courseBox">
                                            <div className="img" style={{background: course.bgColor}}>
                                                <Image src={course.img} alt={course.name}/>
                                            </div>
                                            <div className="text">
                                                <div className="titleTop">
                                                    <p><NumberSplit number={course.price}/>
                                                        <span> {typeof course.price === "string" ? "" : " تومان "}</span>
                                                    </p>
                                                    <NavLink to="/courses"><span>{course.title}</span></NavLink>
                                                </div>
                                                <h3><NavLink to="/courses">{course.name}</NavLink></h3>
                                                <p>{course.description}</p>

                                                <div className="bottomText">
                                                    <div className="star">
                                                        <div className="stars">
                                                            <StarRatings
                                                                rating={course.star}
                                                                starRatedColor="#f8920f"
                                                                numberOfStars={5}
                                                                name='rating'
                                                                starDimension="15px"
                                                                starSpacing="0"
                                                            />
                                                        </div>
                                                        <div className="numberStar">
                                                            امتیاز {course.star}
                                                        </div>
                                                    </div>
                                                    <div className="programmer">
                                                        <div className="textProgrammer">
                                                            <p>ساخته شده توسط :</p>
                                                            <h6>{course.nameProgrammer}</h6>
                                                        </div>
                                                        <div className="imgProgrammer">
                                                            <Image src={course.programmerIMG}
                                                                   alt={course.nameProgrammer}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SpecialCourses;
