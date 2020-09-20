import { panelReducer, panelInitialState } from '../../panel/store';
import { scalesReducer, scalesInitialState } from '../../scales/store';
import { chordReducer, chordsInitialState } from '../../chords/store';

export const reducers = {
  panelFeature: {
    reducer: panelReducer,
    initialState: panelInitialState,
  },
  scalesFeature: {
    reducer: scalesReducer,
    initialState: scalesInitialState,
  },
  chordsFeature: {
    reducer: chordReducer,
    initialState: chordsInitialState,
  },
};
