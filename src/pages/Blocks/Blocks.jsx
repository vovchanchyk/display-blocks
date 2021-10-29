/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import styles from './Blocks.module.css';
import Pagination from '../../components/Pagination/Pagination';
import { ListTable } from '../../components/ListTable';
import { BlocksContext } from '../../components/Provider/Provider';

export const Blocks = () => {
  const { handleLimit, totalCount } = useContext(BlocksContext);
  return (
    <div className={styles.blocks}>
      <div className={styles.title}>
        <h1>Blocks</h1>
      </div>
      <div className={styles.select}>
        <p>Per page:</p>
        <select onChange={(e) => handleLimit(e.target.value)}>
          <option value={10}>10</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
          <option value={70}>70</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className={styles.table}>
        {totalCount}
        <ListTable />
      </div>
      <div className={styles.pagination}>
        <Pagination />
      </div>
    </div>
  );
};
