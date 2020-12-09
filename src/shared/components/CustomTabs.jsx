import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper, Typography, Box } from '@material-ui/core';
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
  const { tabs, selected, handleSelectTab, lazyLoading } = props;

  return (
    <CssGridContainer repeatCol={false}>
      <Paper square variant="elevation" elevation={0}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={selected}
          onChange={(event, newValue) => handleSelectTab(newValue)}
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
          <TabPanel value={selected} index={tab.id} key={`content-${tab.id}`}>
            {lazyLoading ? (
              <Suspense
                fallback={
                  <Box padding={16}>
                    <Typography variant="subtitle1">Loading...</Typography>
                  </Box>
                }
              >
                {tab.renderTab()}
              </Suspense>
            ) : (
              tab.renderTab()
            )}
          </TabPanel>
        ))}
      </Paper>
    </CssGridContainer>
  );
}
