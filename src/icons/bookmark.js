import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = props => {
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
      <path d="M4 4v18l8-8 8 8V4a2 2 0 00-2-2H6a2 2 0 00-2 2z"></path>
    </svg>
  );
};

Bookmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bookmark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Bookmark;
