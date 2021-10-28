/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

const Table = ({ head, body }) => (
  <table className={styles.table}>
    <thead>{head}</thead>
    <tbody>{body}</tbody>
  </table>
);

Table.propTypes = {
  head: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};

export default Table;
