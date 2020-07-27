import React from 'react';
import GameRoundMsg, { IGameRoundMsg } from './GameRoundMsg';

import '../styles/common.css';

const GameEndScreen: React.FC<IGameRoundMsg> = (props: IGameRoundMsg) => {
    return (
      <div className="verticalhorizontal">
        <GameRoundMsg text={props.text} style={props.style}/> 
      </div>
    );
  };
  
export default GameEndScreen;
  