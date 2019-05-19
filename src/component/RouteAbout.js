import React from 'react';
import { Link } from 'react-router-dom'
import SVGText from './SVGText.js';
import styled from 'styled-components';


class RouteAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "notActive"};
  }
  render() {
    return (
    <PageContent>
      <div>test</div>
    </PageContent>
    );
  }
}

const PageContent = styled.div`
  background-color: black;
  transition: 2s add;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 100;
  * {
    color: red;
  }
`;

export default RouteAbout;
