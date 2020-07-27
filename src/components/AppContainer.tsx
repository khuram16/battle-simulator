import React, { useReducer, useContext } from 'react';
import { MainContext } from '../provider';
import SceneContainer from './SceneContainer';
import SplashScreen from './SplashScreen';
import AppHook from '../hooks';

const AppContainer: React.FC = React.memo( () => {
  const {state, dispatch} = AppHook();
  return (
      <MainContext.Provider value={{state, dispatch}}>
        { state.showSplashScreen ? <SplashScreen/> : <SceneContainer/>}
      </MainContext.Provider>
  );
});

export default AppContainer;
