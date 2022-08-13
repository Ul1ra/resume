import React from "react";
import Gradient from "../../../assets/projects/gradient.png";


const Card = () => {



  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src={Gradient} alt="Introfly" /></figure>
      <div class="card-body">
        <h2 class="card-title">GRADIENT</h2>
        <p>This project is a clone-like Instagram SPA where you can login and create an account, see your friends and posts that you create with your profile.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ul1ra/Gradient">Go To</a></button>
        </div>
      </div>
    </div>
  )
}

export default Card;