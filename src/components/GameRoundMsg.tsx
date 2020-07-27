import React from 'react';

import '../styles/healthbar.css'

export interface IGameRoundMsg {
    text: string;
    style: any;
}

const GameRoundMsg: React.FC<IGameRoundMsg> = ( props: IGameRoundMsg ) => {
    return (
      <>
        <h1 style={props.style}>{props.text}</h1>
      </>
    );
  };
  
  export default GameRoundMsg;
  