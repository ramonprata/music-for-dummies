import React, { useReducer } from 'react';
import { appReducer, initialState, AppContext } from '../store/appContext';

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};
