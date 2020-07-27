import { IState, ICharacter, CharacterType, WIN_MESSAGE_FOR_PLAYER, WIN_MESSAGE_FOR_MONSTER } from "../store"
import { IGameActions, GAME_STARTED, ROLL_DICES, GAME_WON_BY_PLAYER, GAME_WON_BY_MONSTER } from "../actions"
import { getRandomNumber } from "../utils"

const getCharacter = (diceRolls: Array<number>, health: number): ICharacter =>{
  return {
      score: diceRolls.reduce((prev,curr)=> prev + curr),
      diceRolls: diceRolls,
      damage: 0,
      health: health
  }
}

export const GameReducer = (state: IState, action: IGameActions): IState => {
    switch (action.type) {
        case GAME_STARTED: {
          return { ...state, showSplashScreen: false };
        }
        
        case ROLL_DICES: {
          let diceRolls:Array<number> = [];
          
          for(let i: number = 1; i<= state.numberOfDices; i++) {
            diceRolls.push(getRandomNumber(1,6))
          }

          const monster: ICharacter = getCharacter(diceRolls.slice(0,2), state.monster.health)
          const player: ICharacter = getCharacter(diceRolls.slice(2), state.player.health)
          
          monster.damage = (player.score - monster.score > 0) ? player.score - monster.score : 0
          monster.health = monster.health - monster.damage;
          
          player.damage  = (monster.damage) ? 0 : monster.score - player.score;
          player.health  = player.health - player.damage;
          
          return {...state, monster: monster, player: player}
        }

        case GAME_WON_BY_PLAYER: {
          return {...state, gameWinner: CharacterType.Player, winnerMsg: WIN_MESSAGE_FOR_PLAYER}
        }

        case GAME_WON_BY_MONSTER: {
          return {...state, gameWinner: CharacterType.Monster, winnerMsg: WIN_MESSAGE_FOR_MONSTER}
        }
        default:
          return state;
      }
}