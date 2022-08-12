import React from "react";
import Gradient from "../../../assets/projects/gradient.png";


const Card = () => {


  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src={Gradient} alt="Gradient" /></figure>
      <div class="card-body">
        <h2 class="card-title">Gradient</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">To Github</button>
        </div>
      </div>
    </div>
  )
}

export default Card;