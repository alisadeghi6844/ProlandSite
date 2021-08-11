import React,{Fragment} from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Image = (props) => {
    const {src, alt, imgFluid, lazyImg} = props;
    return (
        <Fragment>
            {lazyImg?(
                <LazyLoadImage src={src} alt={alt} className={imgFluid ? "img-fluid" : ""} effect="blur"/>
                ):(
                <img src={src} alt={alt} className={imgFluid ? "img-fluid" : ""}/>
            )}
        </Fragment>
    );
};

export default Image;

Image.defaultProps = {
    imgFluid: true,
    lazyImg: true
}
