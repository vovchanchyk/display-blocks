/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { BlocksContext } from '../../components/Provider/Provider';
import styles from './Block.module.css';

export const Block = () => {
  const location = useLocation();
  const blockId = Number(location.pathname.slice(8));
  const { blocks } = useContext(BlocksContext);
  const block = blocks.find((el) => el.blockId === blockId);

  if (!block) return null;
  return (
    <>
      <h1 className={styles.title}>Block: </h1>
      <div className={styles.block}>
        <div className={styles.block__side}>
          <div>Hash: </div>
          <div>Created at: </div>
          <div>Baker: {block.backer}</div>
          <div>Baker&apos;s fee: </div>
          <div>Baker&apos;s priority: </div>
          <div>Transactions volume: </div>
        </div>
        <div className={styles.block__side}>
          <div>Block time: </div>
          <div>Block fitness: </div>
          <div>Gas used: </div>
          <div>Protocol version: </div>
          <div>Cycle: </div>
          <div>Cycle position: </div>
        </div>
      </div>
    </>
  );
};
