import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const InlineTextWithSeparator = (props) => {
  const { text, idx, separator = ',', typographyProps } = props;

  return (
    <Typography key={`${idx}-${text}`} component="span" {...typographyProps}>
      {`${idx > 0 ? separator : ''} ${text}`}
    </Typography>
  );
};

InlineTextWithSeparator.propTypes = {
  text: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  separator: PropTypes.string,
  typographyProps: {},
};
export default InlineTextWithSeparator;
