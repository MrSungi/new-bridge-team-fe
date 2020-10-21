import api from '../../../app/store/api';

const authenticateUserMock = {
  name: 'John',
  surname: 'Wick',
};

const loginApi = {
  authenticateUser: email => api.get(`authenticate/${email}`, authenticateUserMock),
};

export default loginApi;
