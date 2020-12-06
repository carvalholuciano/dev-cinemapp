import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=925eba28&s=',
});

const client = (options, handleError = true) => {
  const onSuccess = (response) => {
    return response.data;
  };

  const onError = (error) => {
    // eslint-disable-next-line no-alert
    // utilizei alert para apenas um exemplo básico.
    return alert('Ops, algum problema ocorreu, tente novamente mais tarde...');
  };

  return instance(options).then(onSuccess).catch(onError);
};

export default client;
