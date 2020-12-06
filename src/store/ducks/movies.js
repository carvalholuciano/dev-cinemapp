export const moviesTypes = {
  REQUEST: 'movies/request',
  SUCCESS: 'movies/success',
  ERROR: 'movies/error',
};

export const moviesActions = {
  request: (value) => ({
    type: moviesTypes.REQUEST,
    payload: value,
  }),
  success: (data) => ({
    type: moviesTypes.SUCCESS,
    payload: data,
  }),
  error: (error) => ({
    type: moviesTypes.ERROR,
    payload: error,
  }),
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case moviesTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case moviesTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case moviesTypes.ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};
