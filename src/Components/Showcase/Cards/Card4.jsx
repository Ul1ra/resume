import React from "react";
import AnimalFarm from "../../../assets/projects/animalFarm.png";


const Card = () => {



  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src={AnimalFarm} alt="Introfly" /></figure>
      <div class="card-body">
        <h2 class="card-title">ANIMAL FARM</h2>
        <p>A simple app using Express.js as an API & server to create random animals, which has a search field on the React to search through the data of what you typed in.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ul1ra/animal_farm">Go To</a></button>
        </div>
      </div>
    </div>
  )
}

export default Card;