import React from 'react';
import Character, {ICharacterProps} from './Character';
import { CharacterType, ICharacter } from '../store';
import HealthBar, {IHealthBarProps} from './HealthBar';
import AttackButton from './AttackButton';
import GameRoundMsg from './GameRoundMsg';
import Logo from './Logo';

import '../styles/gamescene.css'
import Dice from './Dice';

type CharacterWithHealthProps = IHealthBarProps & ICharacterProps & {diceRolls: Array<number>};

const GetCharacterWithHealth = (params: CharacterWithHealthProps) => {
  const {health, damage, type, imgUrl, diceRolls} = params;

  return(
    <div>
      <HealthBar health={health} damage={damage}/>
      <Character type={type} imgUrl={imgUrl}/>
      <div className="dice-wrapper">
        <Dice rolls={diceRolls[0]}/>
        <Dice rolls={diceRolls[1]}/>
      </div>
    </div>
  )  
}

type GameSceneProps = {
  onAttack: Function,
  getGameRoundMsg: Function,
  monster: ICharacter,
  player: ICharacter
}

const GameScene: React.FC<GameSceneProps> = (props: GameSceneProps) => {

    return (
      <div className="container">
          <GetCharacterWithHealth type={CharacterType.Monster} imgUrl="monster.png" health={props.monster.health} damage={props.monster.damage} diceRolls={props.monster.diceRolls}/>
          <div className="inner-row">
            <Logo/>
            <GameRoundMsg text={props.getGameRoundMsg().text} style={props.getGameRoundMsg().style}/>
            <AttackButton label="Attack!" callBack={props.onAttack}/>
          </div>
          <GetCharacterWithHealth type={CharacterType.Player} imgUrl="hero.jpg" health={props.player.health} damage={props.player.damage} diceRolls={props.player.diceRolls}/>
      </div>
    );
  };
  
  export default GameScene;
  