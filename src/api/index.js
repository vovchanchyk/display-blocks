/* eslint-disable no-console */
import axios from 'axios';
import { blocksListHandler } from '../utils/blocksListHandler';
import { BASE_URL } from './config';

const NETWORK = 'mainnet';

export const getDataFromApi = async (offset = 0, limit = 10) => {
  const url = `${BASE_URL}/${NETWORK}/blocks?offset=${offset}&limit=${limit}`;
  const res = await axios.get(url);
  return {
    blocks: blocksListHandler(res.data),
    totalCount: res.headers['x-total-count'],
  };
};
