import React from 'react';
import styled from 'styled-components';


class RouteWorks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "notActive"};
  }
  render() {
    return (
    <PageContent>
      <ul>
        <li>
          <a href="https://dekill.netlify.com" target="_blank" rel="noopener noreferrer" >Dekill&nbsp;-技術スタックごとの求人数比較サービス-</a>
        </li>
        <li>
          <a href="https://a-word-z.com" target="_blank" rel="noopener noreferrer" >AwordZ&nbsp;-英語学習管理サービス-</a>
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

export default RouteWorks;
