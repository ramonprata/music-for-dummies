import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const ChordsTab = (props) => {
  const {} = props;
  const classes = useStyles(props)();
  const {} = classes;

  return <div>ChordsTab</div>;
};

const useStyles = () => makeStyles(() => createStyles({}));

export default ChordsTab;
