import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const CssGridItem = (props) => {
  const { className, style } = props;
  const classes = useStyles(props);
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
  style: PropTypes.any,
};

CssGridItem.defaultProps = {
  style: {},
  align: 'stretch',
  justify: 'stretch',
};

const useStyles = makeStyles({
  item: ({ colStartEnd, rowStartEnd, startEnd, justify, align, placeSelf }) => ({
    gridColumn: startEnd || colStartEnd,
    gridRow: startEnd || rowStartEnd,
    justifySelf: justify,
    alignSelf: align,
    placeSelf: placeSelf,
  }),
});

export default CssGridItem;
