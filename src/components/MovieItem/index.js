import React, {useMemo} from 'react';
import {IconButton, List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {favoritesActions} from '../../store/ducks/favorites';

import {Container, MoviePoster} from './styles';

const MovieItem = (props) => {
  const {data: favorites} = useSelector((s) => s.favoritesMovies);
  const dispatch = useDispatch();

  const {Title, Year, Poster, imdbID} = props;

  const isFavorite = useMemo(
    () => !!favorites.find((x) => x.imdbID === imdbID),
    [favorites, imdbID],
  );

  const handlerFavoriteButton = (item) => {
    if (isFavorite) {
      dispatch(favoritesActions.remove(item));
    } else {
      dispatch(favoritesActions.add(item));
    }
  };

  return (
    <Container>
      <List.Item
        title={Title}
        description={`Ano: ${Year}`}
        left={(p) => <MoviePoster {...p} source={{uri: Poster}} />}
        right={(p) => (
          <IconButton
            {...p}
            icon={isFavorite ? 'star' : 'star-outline'}
            animated
            onPress={() => handlerFavoriteButton(props)}
          />
        )}
      />
    </Container>
  );
};

export default MovieItem;
