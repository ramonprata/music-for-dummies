import React, { useReducer } from 'react';
import { appReducer, initialState, AppContext } from './shared/store/appContext';

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};
