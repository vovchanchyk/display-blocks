/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-console */
import React, { useContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import sortReducer from '../../utils/sortStore/sortReducer';
import { BlocksContext } from '../Provider/Provider';
import Table from '../Table';

export const ListTable = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });

  console.log(sort);
  const sortKeys = ['blockId', 'created', 'endorsements'];
  const history = useHistory();
  const { blocks } = useContext(BlocksContext);
  if (!blocks.length) return null;
  const headCreator = (arr) => (
    <tr>
      {arr.map((el, i) => {
        const key = `key-${el}-${i}`;
        if (sortKeys.find((v) => el === v)) {
          const icon = !sort.inc && sort.key === el ? '˄' : '˅';
          const action = {
            type: sort.inc ? 'decrement' : 'increment',
            key: el,
          };
          return (
            <th key={key} onClick={() => sortDispatch(action)}>
              {el} <span>{icon}</span>
            </th>
          );
        }
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
