import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const CssGridItem = (props) => {
  const { className, style } = props;
  const classes = useStyles(props)();
  const { item } = classes;

  return (
    <div className={[item, className].join(' ')} style={{ ...style }}>
      {props.children}
    </div>
  );
};

CssGridItem.propTypes = {
  className: PropTypes.string,
  colStartEnd: PropTypes.string,
  rowStartEnd: PropTypes.string,
  startEnd: PropTypes.string,
  justify: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  placeSelf: PropTypes.string,
  style: PropTypes.instanceOf(CSSProperties),
};

CssGridItem.defaultProps = {
  style: {},
  align: 'stretch',
  justify: 'stretch',
};

const useStyles = (props) => {
  const { colStartEnd, rowStartEnd, startEnd, justify, align, placeSelf } = props;
  return makeStyles(() =>
    createStyles({
      item: {
        gridColumn: startEnd || colStartEnd,
        gridRow: startEnd || rowStartEnd,
        justifySelf: justify,
        alignSelf: align,
        placeSelf: placeSelf,
      },
    })
  );
};

export default CssGridItem;
