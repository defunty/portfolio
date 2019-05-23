import React, {useEffect} from 'react';
import styled from 'styled-components';
import CardList from './CardList.js';
import StyledContentWrapper from './ContentWrapper.js';
import Header from './Header.js';
import Particle from './Particle.js';
import PageWrapper from './PageWrapper.js';


const RouteAbout = () => {
  useEffect(() => {
    document.title = "Y_Inoue | About";
  });
  return(
    <PageWrapper>
      <Particle />
      <Header />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </PageWrapper>
  );
}



const Content = () => {
  return(
    <React.Fragment>
      <div className="profile">
        <dl>
          <dt>Name:</dt>
          <dd>Yusuke Inoue</dd>
        </dl>
        <dl>
          <dt>Occupation:</dt>
          <dd>Web Developer</dd>
        </dl>
        <dl>
          <dt>Email:</dt>
          <dd>
            <a href="mailto:defunty@gmail.com">
              defunty@gmail.com
            </a>
          </dd>
        </dl>
        <dl>
          <dt>Links:</dt>
          <dd>
            <ul className="link-list">
              <li className="twitter"><a href="https://twitter.com/defunty_jp" target="_blank" rel="noopener">Twitter</a></li>
              <li className="qiita"><a href="https://qiita.com/defunty" target="_blank" rel="noopener">Qiita</a></li>
              <li className="github"><a href="https://github.com/defunty" target="_blank" rel="noopener">Github</a></li>
            </ul>
          </dd>
        </dl>
        
        <div className="description">
          フリーのWebプログラマー。<br />
          業務では主にWebアプリケーションの制作（要件定義・設計・開発・保守）を担当。<br />
          <br />
          <span>主な利用言語</span>
          <ul>
            <li>PHP（CakePHP）</li>
            <li>Ruby（Ruby on Rails）</li>
          </ul>
          Webサイト制作ではHTML・CSS（SCSS）・JavaScript（Vanilla/jQuery）を利用。<br />
          <br />
          同時に個人/チームでのWebサービス開発活動も行なっている。
          <a href=""></a>
        </div>
      </div>
      

      <h1 className="page-title">ACTIVITY</h1>

      <CardList />

    </React.Fragment>
  );
}

//const StyledContent = styled(React.Fragment)`
const ContentWrapper = styled(StyledContentWrapper)`
  .profile {
    margin-bottom: 30px;
    dl {
      display: flex;
      margin-bottom: 10px;
      dt {
        margin-right: 15px;
        text-align: right;
        width: 100px;
        word-break: break-all;
      }
      dd {
        width: auto;
        word-break: break-all;
      }
      .link-list {
        display: flex;
        li {
          display: block;
          position: relative;
          margin-right: 10px;
          &::before {
            content: "";
            position: absolute;
            height: 2px;
            bottom: -4px;
            left: 0px;
            width: 0px;
            transition: all 0.2s ease 0s;
          }
          &.twitter::before{
            background-color: #55acee;
          }
          &.qiita::before{
            background-color: #55c500;
          }
          &.github::before{
            background-color: brown;
          }
          &:hover::before {
            width: 100%;
          }
        }
      }
    }
    .description {
      display: none;
      line-height: 1.5;
    }
  }
  
`;



export default RouteAbout;
