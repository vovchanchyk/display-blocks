/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BlocksContext } from '../../components/Provider/Provider';

export const Block = () => {
  const location = useLocation();
  const blockId = Number(location.pathname.slice(8));
  const { blocks } = useContext(BlocksContext);
  const block = blocks.find((el) => el.level === blockId);

  if (!block) return null;
  console.log(block);
  return <div>{block.backer}</div>;
};
