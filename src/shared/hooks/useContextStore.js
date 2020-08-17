import { useContext } from 'react';
import { AppContext } from '../store';

export const useContextStore = () => {
  const [stateStore, dispatch] = useContext(AppContext);
  return {
    ...stateStore,
    dispatch,
  };
};
