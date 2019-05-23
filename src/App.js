//import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components';
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
/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accessed: false};
    this.toggleAccessed = this.toggleAccessed.bind(this);
  }
  render() {
    const accessed = this.state.accessed;
    return (
    <Container>
      <BrowserRouter>
        <AccessedContext.Provider value={accessed} >
          <Route changeAccessed={this.toggleAccessed} exact path='/' component={RouteTop} />
        </AccessedContext.Provider >
        <Route path='/works' component={RouteWorks} />
        <Route path='/sns' component={RouteSNS} />
        <Route path='/contact' component={RouteContact} />
      </BrowserRouter>
    </Container>
    );
  }
}
*/

const Container = styled.div`
  /*height: 100vh;*/
  overflow: hidden;
  width: 100%;
`;

export default App;
