/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDataFromApi } from '../../api';

export const BlocksContext = createContext();

const Provider = ({ children }) => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [totalCount, setTotalCount] = useState('');

  useEffect(async () => {
    const blocksFromApi = await getDataFromApi();
    setBlocks(blocksFromApi);
  }, [limit, offset]);

  const blocksContextValue = {
    limit,
    offset,
    totalCount,
    blocks,
  };

  return (
    <BlocksContext.Provider value={blocksContextValue}>
      {children}
    </BlocksContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
