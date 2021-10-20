import React from "react";
import Slider from "react-slick";
import settings from "../../config/PosterCarousel.config";
import PremierImage from "../../config/TempPosters.config";
//Components
import Poster from "../Poster/poster.component";

export const Premier = () => {
    

    
    
    
    return(
        <>
            <div className="flex flex-col py-4 px-10">
                <h3 className="text-white text-xl font-bold">Premiers</h3>
                <p className="text-white text-sm">Brand new release every friday!</p>
            </div>
            <Slider {...settings}>
                {PremierImage.map((image) =>(

                    <Poster {...image} isDark/>

                ))}
            </Slider>
        </>
    );
}