import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BlocksContext } from '../../components/Privider/Provider';

export const Block = () => {
  const location = useLocation();
  const blockId = Number(location.pathname.slice(8));
  const { blocks } = useContext(BlocksContext);
  const block = blocks.find((el) => el.blockId === blockId);

  if (!block) return null;
  return <div>{block.backer}</div>;
};
