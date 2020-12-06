import client from './client';

const search = (arg) => {
  return client({
    url: arg,
    method: 'GET',
  });
};

export default {search};
