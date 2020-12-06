import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;

export const MoviePoster = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  width: 100px;
`;
