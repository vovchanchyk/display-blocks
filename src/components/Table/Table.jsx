/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Table.module.css';

// eslint-disable-next-line arrow-body-style
const Table = () => {
  const blocks = null;
  if (!blocks) return null;

  const headCreator = (arr) => (
    <tr>
      {arr.map((el, i) => {
        const key = `key-${el}-${i}`;
        return <th key={key}>{el}</th>;
      })}
    </tr>
  );
  const rowCreator = (arr) => arr.map((str) => <td>{str}</td>);

  return (
    <table className={styles.table}>
      <thead />
      <tbody />
    </table>
  );
};

export default Table;
