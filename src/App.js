//import React, { Component } from 'react';
import React, {useEffect} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components';
import Helmet from "react-helmet";
import './reset.css';
import './index.css';
import RouteTop from './component/RouteTop.js';
import RouteAbout from './component/RouteAbout.js';
import RouteWorks from './component/RouteWorks.js';
import RouteSNS from './component/RouteSNS.js';
import RouteContact from './component/RouteContact.js';


const App = () => {
  return (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Y_Inoue</title>
      <meta name="description" content="Portfolio"></meta>
    </Helmet>
    <BrowserRouter>
      <Route exact path='/' component={RouteTop} />
      {/*<Route exact path="/" render={() => <RouteTop />} />*/}
      <Route path="/about" component={RouteAbout} />
      <Route path='/works' component={RouteWorks} />
      <Route path='/sns' component={RouteSNS} />
      <Route path='/contact' component={RouteContact} />
    </BrowserRouter>
  </Container>
  );
}

const Container = styled.div`
  /*height: 100vh;*/
  overflow: hidden;
  width: 100%;
`;

export default App;
