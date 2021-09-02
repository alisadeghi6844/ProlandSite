import React from 'react';
import "./style.css"
import Image from "../../uiElements/image/Image";
import ButtonHover from "../../uiElements/ButtonHover/ButtonHover";

const NotFound = () => {
    return (
        <>
            <div className="notFoundWrapper">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="numberFound">
                            <span>404</span>
                            <p>متأسفیم ، این صفحه را پیدا نمی کنیم! نگران نباشید ، همه چیز هنوز عالی است!</p>
                            <ButtonHover toPath="/">بازگشت به صفحه اصلی</ButtonHover>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="notFoundImage">
                            <Image src={'./img/notFound/notFoundImage.png'}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
