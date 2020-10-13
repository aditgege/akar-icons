import React from 'react';
import PropTypes from 'prop-types';

const Calendar = props => {
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
      <rect x="3" y="7" width="18" height="14"></rect>
      <path d="M8 3v7"></path>
      <path d="M16 3v7"></path>
    </svg>
  );
};

Calendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Calendar.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Calendar;
