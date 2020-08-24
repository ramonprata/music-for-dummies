import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper, Typography } from '@material-ui/core';
import CssGridContainer from './CssGridContainer';

function TabPanel(props) {
  const { children, value, index } = props;
  return value === index && children;
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

export default function CustomTabs(props) {
  const { tabs } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CssGridContainer repeatCol={false}>
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
        {tabs.map((tab) => (
          <TabPanel value={value} index={tab.id} key={`content-${tab.id}`}>
            {tab.renderTab()}
          </TabPanel>
        ))}
      </Paper>
    </CssGridContainer>
  );
}
