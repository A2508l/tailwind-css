import React from "react";
import {BiCameraMovie} from "react-icons/bi";

//Components
import MovieHero from "../components/MovieHero/MovieHero.component";






const Movie = () => {
    return(
        <>
        <MovieHero/>
        <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
   <div className="flex flex-col items-start gap-3">
      <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
      <p>Bond has left active service. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology. Will bond be able to find out what`s it all about? An action-packed thriller awaits you.</p>
      
   </div>
   <div className="my-8">
      <hr />
   </div>
   <div className="flex flex-col items-start gap-3">
      <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
         <div className="w-8 h-8">
            <BiCameraMovie className="w-full h-full"/>
         </div>
         <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
         </div>
      </div>
   </div>

   

</div>
        </>
    );

}

export default Movie;
