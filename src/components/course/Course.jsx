import React from 'react';
import {NavLink} from "react-router-dom";
import StarRatings from "react-star-ratings";
import Image from "../../uiElements/image/Image";
import ScrollAnimation from "react-animate-on-scroll";
import NumberSplit from "../../uiElements/numberSplit/NumberSplit";
import "./style.css";
import "./darkMode.css";

const Course = ({course}) => {
    return (
        <div className="course">
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
    );
};

export default Course;
