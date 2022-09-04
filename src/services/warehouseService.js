import { get } from './baseService';

const getList = async () => get({ url: 'WarehouseReps' })
  .then((resp) => resp)
  .catch((error) => error);

const getDetail = async (id) => get({ url: `WarehouseReps/${id}` })
  .then((resp) => resp)
  .catch((error) => error);

export default { getList, getDetail };
