/* eslint-disable no-console */
import React, { useContext } from 'react';
import { BlocksContext } from '../Privider/Provider';
import Table from '../Table';

export const ListTable = () => {
  const { blocks } = useContext(BlocksContext);
  if (!blocks.length) return null;
  const headCreator = (arr) => (
    <tr>
      {arr.map((el, i) => {
        const key = `key-${el}-${i}`;
        return <th key={key}>{el}</th>;
      })}
    </tr>
  );

  const rowCreator = (arr) =>
    arr.map((str, i) => {
      console.log(str[1]);
      const key = `cellkey-${i}-${str[0]}`;
      if (str[0] === 'blockId') return <td key={key}>link</td>;
      return <td key={key}>{str[1] || '___'}</td>;
    });

  const titles = headCreator(Object.keys(blocks[0]));
  const rows = blocks.map((block, i) => {
    const row = rowCreator(Object.entries(block));
    const rowkey = `cellkey-${i}`;
    return <tr key={rowkey}>{row}</tr>;
  });

  return <Table head={titles} body={rows} />;
};
