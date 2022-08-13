import React from "react";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";


const Showcase = () => {


  return (
    <div>
      <div class="carousel p-4 space-x-4 bg-neutral">
        <div id="slide1" class="relative carousel-item">
          <Card1 />
        </div>
        <div id="slide2" class="relative carousel-item">
          <Card2 />
        </div>
        <div id="slide3" class="relative carousel-item">
          <Card3 />
        </div>
        <div id="slide4" class="relative carousel-item">
          <Card4 />
        </div>
        <div id="slide5" class="relative carousel-item">
          <Card5 />
        </div>
      </div>
    </div >
  );
}

export default Showcase;

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="bg-primary scale-y-180">
        <path fill="#FFFFFF" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,21.3C384,11,480,21,576,53.3C672,85,768,139,864,176C960,213,1056,235,1152,202.7C1248,171,1344,85,1392,42.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg> */}