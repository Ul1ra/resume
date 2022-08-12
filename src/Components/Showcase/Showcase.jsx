import React from "react";
import Card from "./Card/Card";


const Showcase = () => {


  return (
    <div className="-x-10">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="bg-primary scale-y-180">
        <path fill="#FFFFFF" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,21.3C384,11,480,21,576,53.3C672,85,768,139,864,176C960,213,1056,235,1152,202.7C1248,171,1344,85,1392,42.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg> */}
      <div className="hero flex flex-col bg-neutral">
        <div className="hero-content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Showcase;