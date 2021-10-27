import React from 'react';
import Pagination from '../Pagination/Pagination';
import Table from '../Table/Table';
import Title from '../Title';

import styles from './Body.module.css';

// eslint-disable-next-line arrow-body-style
const Body = () => {
  return (
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
};

export default Body;
