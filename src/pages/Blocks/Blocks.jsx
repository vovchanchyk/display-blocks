/* eslint-disable arrow-body-style */
import React from 'react';
import styles from './Blocks.module.css';
import Pagination from '../../components/Pagination/Pagination';
import { ListTable } from '../../components/ListTable';

export const Blocks = () => {
  return (
    <div className={styles.blocks}>
      <div className={styles.title}>
        <h1>Blocks</h1>
      </div>
      <div className={styles.select}>
        <p>Per page:</p>
        <select>
          <option value='10'>10</option>
          <option value='20'>20</option>
        </select>
      </div>
      <div className={styles.table}>
        <ListTable />
      </div>
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </div>
  );
};
