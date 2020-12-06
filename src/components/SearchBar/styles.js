import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const SearchButton = styled(Button).attrs(({searchQuery}) => ({
  disabled: !searchQuery,
  mode: 'contained',
  color: colors.tabColorSearch,
}))`
  justify-content: center;
`;

export default StyleSheet.create({
  searchbar: {
    flex: 1,
    marginRight: 10,
  },
});
