import React, {Fragment} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ButtonHover from "../../../uiElements/ButtonHover/ButtonHover";
import "./style.css";

const FeatureUs = () => {
    return (
        <Fragment>
            <div className="featureWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 order-xl-1 order-sm-1 order-2">
                            <ScrollAnimation animateIn='fadeIn'
                                             >
                            <div className="featureBox job">
                                <div className="icon">
                                    <span>
                                        <i className="fa fa-lightbulb-o"/>
                                    </span>
                                </div>
                                <div className="text">
                                    <h4>فرصت شغلی</h4>
                                    <p>با یادگیری برنامه نویسی همواره فرصت های شغلی مناسبی برای شما فراهم خواهد شد و
                                        دلیل آن بازار کار فراوان این شغل است</p>
                                </div>
                            </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-xl-3 col-sm-6 order-xl-2 order-sm-3 order-3">
                            <ScrollAnimation animateIn='fadeIn'
                                             delay={400}>
                            <div className="featureBox teacher">
                                <div className="icon">
                                    <span>
<i className="fa fa-external-link"/>
                                    </span>
                                </div>
                                <div className="text">
                                    <h4>اساتید مجرب</h4>
                                    <p>با یادگیری برنامه نویسی همواره فرصت های شغلی مناسبی برای شما فراهم خواهد شد و
                                        دلیل آن بازار کار فراوان این شغل است</p>
                                </div>
                            </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-xl-3 col-sm-6 order-xl-3 order-sm-4 order-4">
                            <ScrollAnimation animateIn='fadeIn'
                                              delay={800}>
                            <div className="featureBox featureBetter">
                                <div className="icon">
                                    <span>
<i className="fa fa-window-restore"/>
                                    </span>
                                </div>
                                <div className="text">
                                    <h4>آینده ای بهتر</h4>
                                    <p>با یادگیری برنامه نویسی همواره فرصت های شغلی مناسبی برای شما فراهم خواهد شد و
                                        دلیل آن بازار کار فراوان این شغل است</p>
                                </div>
                            </div>
                            </ScrollAnimation>
                        </div>
                        <div className="col-xl-3 col-sm-6 order-xl-4 order-sm-2 order-1">
                            <ScrollAnimation animateIn='fadeIn'
                                              delay={1200}>
                            <div className="aboutUs">
                                <div className="text">
                                    <h2>
                                        ویژگی های برتر تیم ما
                                    </h2>
                                    <p>ما برای شما برنامه نویسان و طراحان شرایطی را در نظر گرفته ایم که با عشق و علاقه و
                                        کمترین هزینه برنامه نویسی را یاد بگیرید .</p>
                                </div>
                                <div className="button">
                                    <ButtonHover toPath="/readMore">بیشتر بخوانید</ButtonHover>
                                </div>
                            </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FeatureUs;
