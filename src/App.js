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
    <Helmet
      title={'Hello World'}
      meta={[
        { name: 'twitter:title', content: 'Y.Inoue' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:image', content: 'https://defunty.dev/img/ogp.png' },
        { name: 'twitter:description', content: "Yusuke Inoue's Portfolio. Web developer." },
        { name: 'twitter:url', content: 'https://defunty.dev/' },
        { name: 'twitter:site', content: '@defunty_jp' },
        { name: 'twitter:domain', content: 'defunty.dev' },
        { property: 'og:image', content: 'https://defunty.dev/img/ogp.png' },
        { property: 'og:title', content: 'Y.Inoue' },
        { property: 'og:description', content: "Yusuke Inoue's Portfolio. Web developer." },
        { property: 'og:url', content: `Y.Inoue` }
      ]}
    />
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
