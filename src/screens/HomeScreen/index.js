import React from 'react';
import {Divider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Header, Loading, MovieItem, SearchBar} from '../../components';
import {colors} from '../../styles';

import {Container, EmptyMessage, MovieList} from './styles';

const HomeScreen = () => {
  const {data: movies, error, loading} = useSelector((s) => s.movies);

  return (
    <Container>
      <Header color={colors.tabColorSearch} />
      <SearchBar />
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <MovieList
          data={movies}
          renderItem={({item}) => <MovieItem {...item} />}
          keyExtractor={(item) => item.imdbID}
          ItemSeparatorComponent={() => <Divider />}
          ListEmptyComponent={() => (
            <EmptyMessage>
              {error ?? 'Vamos procurar algum filme? É só digitar e buscar :D'}
            </EmptyMessage>
          )}
        />
      )}
    </Container>
  );
};

export default HomeScreen;
