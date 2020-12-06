import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Container = styled.View`
  background-color: ${(props) => props.color ?? colors.backgroundColor};
  padding: 10px;
  padding-top: 50px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;
