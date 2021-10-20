import React from "react";
import { BiShareAlt,BiChevronRight  } from "react-icons/bi";
import { AiFillHeart} from "react-icons/ai";


const launchRazorPay = () => {
    let options = {
       key : "rzp_test_FUaXptsbrXx5Sh",
       amount : 500,
       currency : "INR",
       name : "Book My Show Clone",
       description : "Movie purchase on rental",
       image : "https://in.bmscdn.com/webin/common/icons/logo.svg",
       handler : () => {
          alert("Payment Done");
       },
       theme: {color : "#c4242d"}
    };
 
    let razorpay = new window.Razorpay(options);
    razorpay.open();
 };


const MovieHero = () => {
    return (
        <>
        
        <div className="md:hidden" >
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/no-time-to-die-et00110039-29-09-2021-01-44-39.jpg" alt="poster" />

        </div>

        <div className="hidden md:block lg:hidden">
        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/no-time-to-die-et00110039-29-09-2021-01-44-39.jpg" alt="poster" />

        </div>

        <div className="relative hidden lg:block" style= {{height: "30rem"}}>
            <div className="absolute h-full w-full z-10"
            style = {{backgroundImage : "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
            />
        
        <div className= "absolute flex justify-between w-full">
        <div className= "relative z-30 w-64 h-96 left-32 top-10">
            <img
            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICAyOWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00110039-bwnstlzury-portrait.jpg"
            alt="poster"
            className="h-full w-full rounded-xl"
            />
        </div> 
        <div className="relative z-30 w-2/5 h-12 top-10 right-10  flex flex-col rounded-lg">
            <h3 className="text-white text-4xl font-bold ">No Time to Die</h3>
            <div className="my-10 flex items-end h-8" >
                <AiFillHeart className="h-12 w-12 px-2" />
                <h2 className="font-bold text-white text-3xl px-2">82% </h2>
                <p className="text-white">29.5K ratings</p>
                <BiChevronRight className="text-white h-8 w-8"/>
            </div>
            
            <div className="bg-gray-600 px-4 py-2 rounded-xl flex justify-around content-center">
            <div>    
            <h3 className="text-white text-xl  ">Add your ratings and reveiw</h3>
            <h5 className="text-white text-lg ">Your review matters</h5>
            </div>
            <button class="my-2 w-1/3 bg-gray-200 text-gray-900 hover:bg-gray-700 hover:text-white font-bold py-2 px-8 rounded">
 Rate Now
</button>
            </div>
            <button onClick={launchRazorPay} class="mt-4 w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-lg">
  Book tickets
</button>
            <p></p>
        </div>
        <div className="relative z-30 w-20 h-12 top-10 right-10 bg-gray-400 flex rounded-lg">
            <BiShareAlt  className="h-full w-1/2 mx-auto"/>
        </div>
        </div>
       
        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/no-time-to-die-et00110039-29-09-2021-01-44-39.jpg" alt="poster" 
        className="w-full h-full z-10 "
        />

        </div>

        

        </>
    );
}


export default MovieHero;