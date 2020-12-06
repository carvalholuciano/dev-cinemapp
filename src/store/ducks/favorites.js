export const favoritesTypes = {
  REQUEST: 'favorites/request',
  SUCCESS: 'favorites/success',
  ERROR: 'favorites/error',
  ADD: 'favorites/add',
  REMOVE: 'favorites/remove',
};

export const favoritesActions = {
  request: (value) => ({
    type: favoritesTypes.REQUEST,
    payload: value,
  }),
  success: (data) => ({
    type: favoritesTypes.SUCCESS,
    payload: data,
  }),
  error: (error) => ({
    type: favoritesTypes.ERROR,
    payload: error,
  }),
  add: (data) => ({
    type: favoritesTypes.ADD,
    payload: data,
  }),
  remove: (data) => ({
    type: favoritesTypes.REMOVE,
    payload: data,
  }),
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case favoritesTypes.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case favoritesTypes.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case favoritesTypes.ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case favoritesTypes.ADD:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload],
        error: null,
      };
    case favoritesTypes.REMOVE:
      return {
        ...state,
        loading: false,
        data: state.data.filter((x) => x.imdbID !== action.payload.imdbID),
        error: null,
      };

    default:
      return state;
  }
};
