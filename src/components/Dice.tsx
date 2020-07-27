import React, { useContext } from 'react';
import '../styles/dice.css'

export interface IDiceProps {
    rolls: number;
}

const getDiceSide = (rolls: number) => {
    if(!rolls) return;
    
    const items = []
    for(let i = 1; i<=rolls; i++) {
        items.push( <span className="dot" key={i}></span> )
    }
    return (
        <li className="die-item" data-side={rolls.toString()}>
            {items}
        </li>
    )
}
const Dice: React.FC<IDiceProps> = ( props: IDiceProps ) => {
    return (
      <div className="dice-container">
        <div className="dice">
            <ol className="dice-list">
                {getDiceSide(props.rolls)}
            </ol>
        </div>
      </div>
    );
  };
  
  export default Dice;
  