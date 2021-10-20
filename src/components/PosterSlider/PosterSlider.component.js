import React from "react";
import Poster from "../Poster/poster.component";
import settings from "../../config/PosterCarousel.config";
import Slider from "react-slick";


const PosterSlider = (props) => {
    return(
        <>
            <div className="flex flex-col py-4 ">
                <h3 className={
                    `
                    text-xl font-bold
                    ${props.isDark ? "text-white" : "text-gray-800" } 
                    `
                }>{props.title}</h3>
                <p className={
                    `
                    text-xl font-bold
                    ${props.isDark ? "text-white" : "text-gray-800" } 
                    `}></p>
            </div>
            <Slider {...settings}>
                {props.images.map((image) =>(

                    <Poster {...image} isDark = {props.isDark}/>

                ))}
            </Slider>
        </>
    )
}


export default PosterSlider;