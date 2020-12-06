import {combineReducers} from 'redux';

import {favoritesReducer as favoritesMovies} from './favorites';
import {moviesReducer as movies} from './movies';

const reducers = combineReducers({
  favoritesMovies,
  movies,
});

export default reducers;
