import React from "react";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";

const Plays = () => {

    return(
        <>
            <div className="container mx-auto px-4">
   <div className="w-full lg:flex lg:flex-row-reverse">
      <div className="lg:w-8/12">
      <h2 className="text-2xl font-bold mb-4">Plays in Ranchi</h2>
      <div className="flex flex-wrap">
         
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316374-vduglfrpth-portrait.jpg"
               title="Alwaha"
               subtitle="Tamil ₹150"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316374-vduglfrpth-portrait.jpg"
               title="Alwaha"
               subtitle="Tamil ₹150"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMyBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316159-kqdcdgwtwe-portrait.jpg"
               title="Forest Stories from the Mahabharata - Online"
               subtitle="English ₹230"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMyBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315961-zhztnetsyr-portrait.jpg"
               title="Ramayana connecting the dots"
               subtitle="English ₹230"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyMSBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00316131-stvumyphdw-portrait.jpg"
               title="Qadir Ali Baig Flim Festival"
               subtitle="Tamil ₹250"
               />
         </div>
         <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
            <Poster
               src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMCBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pewmjpgmpk-portrait.jpg"
               title="Ranga Shankara"
               subtitle="Kannada ₹150"
               />
         </div>
      </div>
      </div>

       <div className="lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>
        <div>
        <PlaysFilter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
        <PlaysFilter title="Language" tags={["Tamil", "Kannada"]}/>
        <PlaysFilter title="Categories" tags={["Theatre"]}/>
        </div>
       </div>
   </div>
</div>
        </>
    );
};

export default Plays;