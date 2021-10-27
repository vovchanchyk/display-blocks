import apiService from "./config";

const getBlocks = async (limit, offset) => {
  const { data } = await apiService.get(
    `/blocks?offset=${offset}&limit=${limit}`,
    {}
  );
  return data;
};

export default getBlocks;
