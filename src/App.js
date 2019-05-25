import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components';
import './reset.css';
import './index.css';
import RouteTop from './component/RouteTop.js';
import RouteAbout from './component/RouteAbout.js';


const App = () => {
  return (
  <Container>
    <BrowserRouter>
      <Route exact path='/' component={RouteTop} />
      <Route path="/about" component={RouteAbout} />
    </BrowserRouter>
  </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  width: 100%;
`;

export default App;
