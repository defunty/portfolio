import React from 'react';
import styled from 'styled-components';


class RouteContact extends React.Component {
  render() {
    return (
    <PageContent>
      <a href="mailto:defunty@gmail.com">
        Mail Address: defunty@gmail.com
      </a>
    </PageContent>
    );
  }
}

const PageContent = styled.div`
  background-color: black;
  transition: 2s add;
  padding: 20px;
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 100;
  * {
    color: #fff;
  }
  a {
    border: 1px solid #fff;
    border-radius: 4px;
    display: block;
    padding: 12px;
  }
`;

export default RouteContact;
