import React from "react";
import MemoryGame from "../../../assets/projects/memoryGame.png";


const Card = () => {



  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src={MemoryGame} alt="Introfly" /></figure>
      <div class="card-body">
        <h2 class="card-title">MEMORY GAME</h2>
        <p>A quick example of a memory game where you need to match two tiles together</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary"><a target="_blank" href="https://github.com/Ul1ra/memorygame">Go To</a></button>
        </div>
      </div>
    </div>
  )
}

export default Card;