import React from 'react';
import styled from 'styled-components';


class RouteSNS extends React.Component {
  render() {
    return (
    <PageContent>
      <ul>
        <li>
          <a href="https://twitter.com/defunty_jp" target="_blank" rel="noopener noreferrer" >Twitter</a>
        </li>
        <li>
          <a href="https://qiita.com/defunty" target="_blank" rel="noopener noreferrer" >Qiita</a>
        </li>
        <li>
          <a href="https://github.com/defunty" target="_blank" rel="noopener noreferrer" >Github</a>
        </li>
      </ul>
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
  ul {
    display: block;
    list-style: none;
    li {
      display: block;
      a {
        border: 1px solid #fff;
        border-radius: 4px;
        display: block;
        margin-bottom: 20px;
        padding: 12px;
        text-decoration: none;
        &:hover {

        }
      }
    }
  }
`;

export default RouteSNS;
