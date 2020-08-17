import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper, Typography } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={classes.panel}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  panel: {
    height: window.innerHeight * 0.5,
  },
}));

export default function CustomTabs(props) {
  const { tabs } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item container direction="column" justify="center">
      <Paper square variant="elevation" elevation={0}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {tabs.map((tab) => (
            <Tab
              label={<Typography variant="subtitle1">{tab.label}</Typography>}
              key={tab.label}
              {...a11yProps(tab.id)}
            />
          ))}
        </Tabs>
      </Paper>
      {tabs.map((tab) => (
        <TabPanel value={value} index={tab.id} key={`content-${tab.id}`}>
          {tab.renderTab()}
        </TabPanel>
      ))}
    </Grid>
  );
}
