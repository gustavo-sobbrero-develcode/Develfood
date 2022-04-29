import { Api } from "../providers"

const getAll = () => Api.get('');

export const Service = {
  getAll,
};
