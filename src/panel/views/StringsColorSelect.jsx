import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { stringsColors } from '../../shared/stringColors';
import { useContextStore } from '../../shared/hooks';
import { setSelectedStringsColor } from '../store';
import BoxSelectOption from '../../shared/components/BoxSelectOption';

const StringsColorSelect = () => {
  const { dispatch, selectedStringsColor } = useContextStore();

  return (
    <Grid container>
      <Box marginBottom={1}>
        <Typography align="left" color="primary">
          Select your strings
        </Typography>
      </Box>

      <Grid container direction="row" justify="space-between">
        {Object.keys(stringsColors).map((key, idx) => (
          <div
            key={`string-color-${idx}`}
            style={{
              width: 40,
              height: 40,
            }}
          >
            <BoxSelectOption
              onSelect={(selectedColor) => {
                setSelectedStringsColor(dispatch, selectedColor);
              }}
              value={key}
              selectedOption={selectedStringsColor}
              bkgStyle={stringsColors[key]}
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default StringsColorSelect;
