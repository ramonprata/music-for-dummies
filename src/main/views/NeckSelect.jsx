import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core/';
import { woodNecksDesign, woodNames } from '../../shared/utils';
import WoodItem from './WoodItem';

const NeckSelect = (props) => {
  const { onSelectNeck, selectedNeck } = props;

  return (
    <Grid container>
      <Box marginBottom={2}>
        <Typography color="primary">Select your favorite neck model</Typography>
      </Box>

      <Grid container direction="row" justify="space-between">
        {woodNames.map((key) => (
          <Grid item key={key}>
            <WoodItem
              key={key}
              woodName={key}
              woodNecksDesign={woodNecksDesign}
              onSelectNeck={onSelectNeck}
              selectedNeck={selectedNeck}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default NeckSelect;
