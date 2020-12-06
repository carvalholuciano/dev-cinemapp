import React from 'react';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Header, Loading, MovieItem} from '../../components';
import {colors} from '../../styles';

import {Container, MovieList, EmptyMessage} from './styles';

const FavoritesScreen = () => {
  const {data: favorites, loading} = useSelector((s) => s.favoritesMovies);

  return (
    <Container>
      <Header color={colors.tabColorFavorites} title="Favoritos" />
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <MovieList
          data={favorites}
          renderItem={({item}) => <MovieItem {...item} />}
          keyExtractor={(item, index) => item.imdbID + 'index_' + index}
          ItemSeparatorComponent={() => <Divider />}
          ListEmptyComponent={() => (
            <EmptyMessage>
              Você não tem nenhum filme favorito ainda :(
            </EmptyMessage>
          )}
        />
      )}
    </Container>
  );
};

export default FavoritesScreen;
