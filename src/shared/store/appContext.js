import React, { useReducer, createContext } from 'react';
import { reducers } from './reducers';

export const AppContext = createContext();

const comibineInitialStates = () => {
  return Object.entries(reducers).reduce((accumulator, current) => {
    const featureInitialState = current[1].initialState;
    return {
      ...accumulator,
      ...featureInitialState,
    };
  }, {});
};

const getReducer = (actionType = '') => {
  const actionFeature = actionType.split('/')[0];
  return reducers[actionFeature].reducer;
};

const appReducer = (state, action) => {
  const reducerRun = getReducer(action.type);
  return reducerRun(state, action);
};

const initialState = comibineInitialStates();

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={[state, dispatch]}>{props.children}</AppContext.Provider>;
};
