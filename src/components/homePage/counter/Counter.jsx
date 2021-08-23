import React from 'react';
import CountUp from 'react-countup';
import "./style.css";

const Counter = () => {
    return (
        <>
            <div className="counterWrapper">
                <div className="counterBox">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 ofStudents">
                                <div className="count">
                                    <CountUp start={0} end={825} duration={4}/>
                                </div>
                                <div className="border"/>
                                <div className="text">
                                    <h4>دانشجویان آفلاین</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 onStudents">
                                <div className="count">
                                    <CountUp start={0} end={353} duration={4}/>
                                </div>
                                <div className="border"/>
                                <div className="text">
                                    <h4>دانشجویان آنلاین</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 students">
                                <div className="count">
                                    <CountUp start={0} end={1178} duration={4}/>
                                </div>
                                <div className="border"/>
                                <div className="text">
                                    <h4>دانشجویان</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 teacher">
                                <div className="count">
                                    <CountUp start={0} end={7} duration={4}/>
                                </div>
                                <div className="border"/>
                                <div className="text">
                                    <h4>اساتید</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Counter;
