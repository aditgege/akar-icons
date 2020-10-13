import React from 'react';
import PropTypes from 'prop-types';

const AlignVerticalCenter = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M22 12H2"></path>
      <path d="M9 22V2m6 15V7"></path>
    </svg>
  );
};

AlignVerticalCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

AlignVerticalCenter.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default AlignVerticalCenter;
