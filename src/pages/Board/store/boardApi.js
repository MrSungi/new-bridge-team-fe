import { mockApi } from '../../../app/store/api';

const boardApi = {
  updateVote: () => mockApi.get('', { data: true }),
};

export default boardApi;
