import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const CssGridContainer = (props) => {
  const { style, className } = props;
  const classes = useStyles(props)();
  const { container } = classes;

  return (
    <div className={[container, className].join(' ')} style={{ ...style }}>
      {props.children}
    </div>
  );
};

CssGridContainer.propTypes = {
  className: PropTypes.string,
  templateCol: PropTypes.string,
  templateRow: PropTypes.string,
  repeatCol: PropTypes.bool,
  repeatNumber: PropTypes.number,
  repeatRow: PropTypes.bool,
  colGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rowGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justifyItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  alignItems: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  justifyContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  alignContent: PropTypes.oneOf([
    'start',
    'end',
    'center',
    'stretch',
    'space-around',
    'space-between',
    'space-evenly',
  ]),
  style: PropTypes.any,
};

CssGridContainer.defaultProps = {
  className: '',
  templateCol: '1fr',
  templateRow: 'auto',
  repeatCol: true,
  repeatRow: false,
  colGap: 0,
  rowGap: 0,
  gap: 0,
  justifyItems: 'stretch',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  alignContent: 'stretch',
  style: {},
};

const useStyles = (props) =>
  makeStyles(() => {
    const {
      templateCol,
      templateRow,
      repeatCol,
      repeatRow,
      colGap,
      rowGap,
      gap,
      justifyItems,
      alignItems,
      justifyContent,
      alignContent,
      children,
      repeatNumber,
    } = props;
    const repeat = repeatNumber || children?.length;
    return createStyles({
      container: {
        display: 'grid',
        height: '100%',
        gridTemplateColumns: repeatCol ? `repeat(${repeat},${templateCol})` : templateCol,
        gridTemplateRows: repeatRow ? `repeat(${repeat},${templateRow})` : templateRow,
        columnGap: gap ? `${gap}px` : `${colGap}px`,
        rowGap: gap ? `${gap}px` : `${rowGap}px`,
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,
      },
    });
  });
export default CssGridContainer;
