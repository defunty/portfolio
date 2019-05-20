import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header.js';
import Particle from './Particle.js';

const RouteAbout = () => {
  return(
    <PageContent>
      <Header />
      <Content></Content>
      <Particle />
    </PageContent>
  );
}

const Content = () => {
  return(
    <StyledContent>
      テスト
    </StyledContent>
  );
}

//style
const PageContent = styled.div`
  background-color: #000;
  position: fixed;
  height: 100%;
  width: 100%;
  * {
    color: red;
  }
`;

const StyledContent = styled.div`
`;

export default RouteAbout;
