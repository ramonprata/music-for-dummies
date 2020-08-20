import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CssGridContainer, CssGridItem } from '../../shared/components';

const ScalesTab = (props) => {
  const {} = props;
  const classes = useStyles(props)();
  const { scaleContainer } = classes;

  return (
    <CssGridContainer>
      <CssGridItem className={scaleContainer}>
        <div>teste</div>
      </CssGridItem>
    </CssGridContainer>
  );
};

const useStyles = () =>
  makeStyles(() =>
    createStyles({
      scaleContainer: {
        backgroundColor: 'violet',
      },
    })
  );

export default ScalesTab;
