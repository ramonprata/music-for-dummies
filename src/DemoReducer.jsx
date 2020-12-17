import { Button, Grid, Typography } from '@material-ui/core';
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const DemoReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Grid direction="column">
      <div style={{ padding: 16 }}>
        <Typography variant="h6">Count: {state.count}</Typography>
      </div>
      <Grid>
        <Button
          onClick={() => dispatch({ type: 'decrement' })}
          variant="contained"
          color="primary"
          style={{ marginRight: 16 }}
        >
          Decrement
        </Button>
        <Button
          onClick={() => dispatch({ type: 'increment' })}
          variant="contained"
          color="secondary"
        >
          Increment
        </Button>
      </Grid>
    </Grid>
  );
};

export default DemoReducer;
