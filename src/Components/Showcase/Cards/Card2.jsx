import React from "react";
import Fusion from "../../../assets/projects/fusion.png";


const Card = () => {



  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src={Fusion} alt="Introfly" /></figure>
      <div class="card-body">
        <h2 class="card-title">FUSION</h2>
        <p>This project represents a restaurant review portal for restauranters and individuals to rate create and review restaurants like Yelp</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ul1ra/Fusion">Go To</a></button>
        </div>
      </div>
    </div>
  )
}

export default Card;