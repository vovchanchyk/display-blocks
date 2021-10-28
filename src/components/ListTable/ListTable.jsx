/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-console */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BlocksContext } from '../Provider/Provider';
import Table from '../Table';

export const ListTable = () => {
  const history = useHistory();
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
    arr.map((cell, i) => {
      const key = `cellkey-${i}-${cell[0]}`;
      if (cell[0] === 'blockId')
        return (
          <td
            key={key}
            role='button'
            onKeyPress={() => history.push(`/blocks/${cell[1]}`)}
            onClick={() => history.push(`/blocks/${cell[1]}`)}
          >
            {cell[1]}
          </td>
        );
      return <td key={key}>{cell[1] || '___'}</td>;
    });

  const titles = headCreator(Object.keys(blocks[0]));
  const rows = blocks.map((block, i) => {
    const row = rowCreator(Object.entries(block));
    const rowkey = `cellkey-${i}`;
    return <tr key={rowkey}>{row}</tr>;
  });

  return <Table head={titles} body={rows} />;
};
