import { createContext, Dispatch } from 'react';
import { IState, initialState } from '../store';
import { IGameActions } from '../actions';

export interface IMainContextProps {
    state: IState;
    dispatch: Dispatch<IGameActions>
}
export const MainContext = createContext<IMainContextProps>({
    dispatch:(action: IGameActions) => {},
    state: initialState
});

