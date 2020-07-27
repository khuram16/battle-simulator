
export interface ICharacter {
    score: number;
    health: number;
    damage: number;
    diceRolls: Array<number>;
}

export interface IState {
    monster: ICharacter;
    player : ICharacter;
    showSplashScreen: boolean;
    numberOfDices: number;
    gameWinner: CharacterType | '';
    winnerMsg: string;
}

export const initialState: IState = {
    monster:{score:0, health:100, damage:0, diceRolls:[]},
    player:{score:0, health:100, damage:0, diceRolls:[]},
    showSplashScreen: true,
    numberOfDices: 4,
    gameWinner: '',
    winnerMsg: ''
}

export enum CharacterType {
    Monster = 'Monster',
    Player  = 'Player'
}

export const WIN_MESSAGE_FOR_PLAYER  = 'You Win!';
export const WIN_MESSAGE_FOR_MONSTER = 'Game Over!';