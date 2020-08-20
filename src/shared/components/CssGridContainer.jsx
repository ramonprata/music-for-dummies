import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const CssGridContainer = (props) => {
  const { style, className } = props;
  const classes = useStyles(props)();
  const { container } = classes;

  return (
    <div className={[className, container].join(' ')} style={{ ...style }}>
      {props.children}
    </div>
  );
};

CssGridContainer.propTypes = {
  className: PropTypes.string,
  templateCol: PropTypes.string,
  templateRow: PropTypes.string,
  repeatCol: PropTypes.bool,
  repeatRow: PropTypes.bool,
  colGap: PropTypes.number | PropTypes.string,
  rowGap: PropTypes.number | PropTypes.string,
  gap: PropTypes.number | PropTypes.string,
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
  style: PropTypes.instanceOf(CSSProperties),
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
    } = props;
    const repeatNumber = children.length;
    return createStyles({
      container: {
        display: 'grid',
        height: '100%',
        gridTemplateColumns: repeatCol ? `repeat(${repeatNumber},${templateCol})` : templateCol,
        gridTemplateRows: repeatRow ? `repeat(${repeatNumber},${templateRow})` : templateRow,
        columnGap: gap || colGap,
        rowGap: gap || rowGap,
        justifyItems,
        alignItems,
        justifyContent,
        alignContent,
      },
    });
  });
export default CssGridContainer;
