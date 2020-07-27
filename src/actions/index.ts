export const GAME_STARTED = 'gameStarted';
export const GAME_COMPLETED = 'gameCompleted';
export const GAME_WON_BY_MONSTER = 'gameWonByMonster';
export const GAME_WON_BY_PLAYER = 'gameWonByPlayer';
export const ROLL_DICES = 'rollDices';

export interface IGameStartAction {
    type: typeof GAME_STARTED;
}

export const gameStartAction = (): IGameStartAction => ({
    type: GAME_STARTED,
  });

export interface IRollDiceAction {
    type: typeof ROLL_DICES;
}

export const rollDiceAction = (): IRollDiceAction => ({
    type: ROLL_DICES,
  });

export interface IGameOverAction {
    type: typeof GAME_WON_BY_MONSTER;
}

export const gameOverAction = (): IGameOverAction => ({
    type: GAME_WON_BY_MONSTER,
});

export interface IGameWonAction {
  type: typeof GAME_WON_BY_PLAYER;
}

export const gameWonAction = (): IGameWonAction => ({
  type: GAME_WON_BY_PLAYER,
});

export type IGameActions = IGameStartAction | IRollDiceAction | IGameWonAction | IGameOverAction;