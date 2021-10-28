import React from 'react';
import styles from './Blocks.module.css';
import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import Title from '../../components/Title';

export const Blocks = () => (
  <>
    <div className={styles.title}>
      <Title />
    </div>
    <div className={styles.select}>
      <p>Per page:</p>
      <select>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
    </div>
    <div className={styles.table}>
      <Table />
    </div>
    <div className={styles.pagination}>
      <Pagination />
    </div>
  </>
);