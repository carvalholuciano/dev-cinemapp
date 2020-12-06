import React from 'react';

import {Container, Subtitle, Title} from './styles';

const Header = ({title, color}) => {
  return (
    <Container color={color}>
      <Title>Cinema APP{!!title && ` - ${title}`}</Title>
      <Subtitle>Bem vindo ao mundo espetacular do cinema</Subtitle>
    </Container>
  );
};

export default Header;
