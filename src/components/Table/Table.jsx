import React from 'react';

import styles from './Table.module.css';

// eslint-disable-next-line arrow-body-style
const Table = () => {
  return (
    <table className={styles.table}>
      <tr>
        <th className={styles.row}>Block ID</th>
        <th className={styles.row}>Created</th>
        <th className={styles.row}>Baker</th>
        <th className={styles.row}>Priority</th>
        <th className={styles.row}># of operations</th>
        <th className={styles.row}>Volume</th>
        <th className={styles.row}>Fee</th>
        <th className={styles.row}># of Endorsements</th>
      </tr>
      <tr>
        <td className={styles.row}>...</td>
        <td className={styles.row}>...</td>
        <td className={styles.row}>...</td>
        <td className={styles.row}>...</td>
        <td className={styles.row}>...</td>
        <td className={styles.row}>...</td>
        <td className={styles.row}>...</td>
        <td className={styles.row}>...</td>
      </tr>
    </table>
  );
};

export default Table;
