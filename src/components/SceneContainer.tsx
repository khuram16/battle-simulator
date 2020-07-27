import React, { useContext } from 'react';
import { MainContext } from '../provider';
import { rollDiceAction } from '../actions';
import {IGameRoundMsg} from './GameRoundMsg';
import GameScene from './GameScene';
import { CharacterType } from '../store';
import GameEndScreen from './GameEndScene';

const SceneContainer: React.FC = React.memo(() => {
    const {state, dispatch} = useContext(MainContext);

    console.log('SceneContainer monster ',state.monster)
    console.log('SceneContainer Player ',state.player)

    const onAttack = () => {
      dispatch( rollDiceAction() )
    }

    const getGameRoundMsg = ():IGameRoundMsg => {
      // at the start of game
      if(state.gameWinner){
        return {text: state.winnerMsg, style:{color: (state.gameWinner === CharacterType.Player) ? 'green' : 'red', fontSize:80 }}
      }
      if(state.player.health === 100 && state.monster.health === 100) return {text:'', style:{color:''}};
      if(state.player.damage === 0 && state.monster.damage === 0) return {text:'Draw!', style:{color:'orange'}}; 
      return (state.player.score > state.monster.score) ? 
                {text:`You Hit for ${state.monster.damage}!`, style:{color:'green'}} : {text:`Monster strikes ${state.player.damage}! `, style:{color:'red'}}
    }

    return (
      <div>
        { (state.gameWinner) ? 
             <GameEndScreen text={getGameRoundMsg().text} style={getGameRoundMsg().style}/>  : 
            <GameScene onAttack={onAttack} getGameRoundMsg={getGameRoundMsg} player={state.player} monster={state.monster}/>
        }
      </div>
    );
  });
  
  export default SceneContainer;
  