import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.SafeAreaView`
  background-color: ${colors.backgroundColor};
  flex: 1;
`;

export const MovieList = styled.FlatList`
  flex: 1;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
  font-size: 16px;
`;
