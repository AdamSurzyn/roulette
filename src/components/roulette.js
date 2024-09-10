import { Wheel } from "react-custom-roulette";
import { addRewards } from "../util/utils";
import React, { useState } from "react";
import './roulette.css'
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
        <div className="wheel-container">
            <Wheel
                mustStartSpinning={onSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={()=>{
                    setOnspin(false);
                }}
                fontWeight={"small"}
                fontFamily="Monospace"
                radiusLineWidth={2}
                fontSize={14}
                backgroundColors={[
                    "#FFB3BA",
                    "#FFDFBA",
                    "#FFFFBA",
                    "#BAFFC9",
                    "#BAE1FF",
                    "#E6E6FA",
                    "#F4C2C2",
                    "#FFD1DC",
                    "#E0BBE4",
                    "#B2F7EF"
                ]}
            >
            </Wheel>
            <button className="spin-button" onClick={handleSpinClick}>SPIN</button>
        </div>
    )

}