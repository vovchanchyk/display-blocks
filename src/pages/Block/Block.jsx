import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataApiBlock } from '../../api';
import styles from './Block.module.css';

export const Block = () => {
  const location = useLocation();
  const blockId = Number(location.pathname.slice(8));
  const [block, setBlock] = useState(null);
  useEffect(async () => {
    const blockdata = await getDataApiBlock(blockId);
    setBlock(blockdata.block);
  }, []);
  if (!block) return <h2>...loading</h2>;
  return (
    <>
      <h1 className={styles.title}>Block: </h1>
      <div className={styles.block}>
        <div className={styles.block__side}>
          <div>Hash: {block.hash} </div>
          <div>Created at: {block.timestamp} </div>
          <div>Baker: {block.baker}</div>
          <div>Baker&apos;s fee: {block.fees}</div>
          <div>Baker&apos;s priority: {block.priority}</div>
          <div>Transactions volume: {block.volume}</div>
        </div>
        <div className={styles.block__side}>
          <div>Block time: {block.blockTime}</div>
          <div>Block fitness: {block.fitness}</div>
          <div>Gas used: {block.consumedGas}</div>
          <div>Protocol version: {block.protocol}</div>
          <div>Cycle: {block.metaCycle}</div>
          <div>Cycle position: {block.metaCyclePosition}</div>
        </div>
      </div>
    </>
  );
};
