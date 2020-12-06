import React, {useState} from 'react';
import {Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {moviesActions} from '../../store/ducks/movies';

import styles, {Container, SearchButton} from './styles';

const SearchBar = () => {
  const dispacth = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const handlerSearchButton = () => {
    dispacth(moviesActions.request(searchQuery));
  };

  return (
    <Container>
      <Searchbar
        placeholder="O que você busca..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      <SearchButton onPress={handlerSearchButton} searchQuery={searchQuery}>
        <Text>Buscar</Text>
      </SearchButton>
    </Container>
  );
};

export default SearchBar;
