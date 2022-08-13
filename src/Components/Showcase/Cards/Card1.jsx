import React from "react";
import Introfly from "../../../assets/projects/introfly.png";


const Card = () => {



  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src={Introfly} alt="Introfly" /></figure>
      <div class="card-body">
        <h2 class="card-title">INTROFLY</h2>
        <p>An app that simplifies meetings by allowing users to create a short video using their webcam to introduce themselves and introduce the meeting using their Google account. You can create an event and invite others to view and create their own intro videos.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary"><a target="_blank" href="https://gitlab.com/OndrejJanosik777/introfly">Go To</a></button>
        </div>
      </div>
    </div>
  )
}

export default Card;