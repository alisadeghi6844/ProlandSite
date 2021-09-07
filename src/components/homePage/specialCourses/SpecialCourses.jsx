import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import Course from "../../course/Course";
import "./style.css";
import {showLoading} from "react-redux-loading-bar";

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
                                    <Course course={course}/>
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
