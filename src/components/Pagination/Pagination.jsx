import React, { useContext } from 'react';
import { BlocksContext } from '../Privider/Provider';
import styles from './Pagination.module.css';

const Pagination = () => {
  const { offset, handleOffset, limit, totalCount } = useContext(BlocksContext);
  const totalPages = Math.ceil(totalCount / limit);
  let firstIndex;
  let lastIndex;
  const pages = [];
  if (offset === 0) {
    firstIndex = offset;
    lastIndex = limit * 3;
  } else if (offset === limit) {
    firstIndex = 0;
    lastIndex = limit * 3;
  } else if (offset === totalPages) {
    firstIndex = offset - limit * 4;
    lastIndex = offset;
  } else {
    firstIndex = offset - limit * 2;
    lastIndex = offset + limit;
  }

  for (let i = firstIndex; i <= lastIndex; i += limit) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((el) => {
        const page = el / limit + 1;
        const className = offset === el ? styles.active : '';
        return (
          <button
            key={el}
            type='button'
            className={className}
            onClick={() => handleOffset(el)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
