import { Wheel } from "react-custom-roulette";
import { addRewards } from "../util/utils";
import React, { useState } from "react";

const awards = require('../awards.json')
const data = addRewards(awards)

export const Roulette = () =>{

const [onSpin, setOnspin] = useState(false)
const [prizeNumber, setPrizeNumber] = useState(0)

const handleSpinClick = () => {
    if (!onSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setOnspin(true);
    }
  }

    return(
        <div>
            <Wheel
                mustStartSpinning={onSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={()=>{
                    setOnspin(false);
                }}
            >
            </Wheel>
            <button onClick={handleSpinClick}>SPIN</button>
        </div>
    )

}