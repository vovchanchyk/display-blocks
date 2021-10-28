/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
export const Body = ({ children }) => {
  return <>{children}</>;
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

