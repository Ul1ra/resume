import React from "react";
import Ben from "../../../assets/ben.jpg";
import AT from "../../../assets/at.png";
import UK from "../../../assets/uk.png";


const Avatar = () => {


  return (
    <div className="flex flex-col">
      <img className="w-10 self-start" src={AT} />
      <div className="avatar">
        <div className="w-24 mask mask-hexagon">
          <img src={Ben} />
        </div>
      </div>
        <img className="w-10 self-end" src={UK} />
    </div>
  )
}

export default Avatar;