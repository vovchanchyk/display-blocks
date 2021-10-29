/* eslint-disable import/no-extraneous-dependencies */

import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDataFromApi } from '../../api';

export const BlocksContext = createContext();

const Provider = ({ children }) => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(async () => {
    const blocksFromApi = await getDataFromApi(offset, limit);
    setBlocks(blocksFromApi.blocks);
    setTotalCount(Number(blocksFromApi.totalCount));
  }, [limit, offset]);

  const handleLimit = (val) => {
    setLimit(Number(val));
    setOffset(0);
  };
  const blocksContextValue = {
    limit,
    handleLimit,
    offset,
    handleOffset: (val) => setOffset(val),
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
