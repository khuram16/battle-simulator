import React from 'react';
import { CharacterType } from '../store';
import '../styles/character.css'

export interface ICharacterProps {
    type: CharacterType;
    imgUrl: string;
}

const Character: React.FC<ICharacterProps> = ( props: ICharacterProps ) => {
    return (
      <div className="character-container">
          <h4>{props.type}</h4>
          <img src={props.imgUrl} width="200px"/>
      </div>
    );
  };
  
  export default Character;
  