import { useEffect, useReducer, useContext } from 'react';
import { gameStartAction, gameOverAction, gameWonAction } from '../actions';
import { initialState } from '../store';
import { GameReducer } from '../reducers';

const AppHook = () => {
    
    const [state, dispatch] = useReducer(GameReducer, initialState);

    useEffect( () => {
        if(state.gameWinner) {
            return;
        }
        const updateUiState = () => {
            setTimeout(() => dispatch(gameStartAction()), 2000)
        }
        if(state.showSplashScreen) {
            updateUiState();
        }

        if(state.player.health <= 0){
            dispatch(gameOverAction())
        }else if(state.monster.health <= 0){
            dispatch(gameWonAction())
        }

    })
    return {state, dispatch}
}

export default AppHook;