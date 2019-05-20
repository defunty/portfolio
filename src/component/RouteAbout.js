import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header.js';
import Particle from './Particle.js';
import PageWrapper from './PageWrapper.js';
import StyledContentWrapper from './ContentWrapper.js';


const RouteAbout = () => {
  return(
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
      <Particle />
    </PageWrapper>
  );
}

const Content = () => {
  return(
    <React.Fragment>
      <h1 className="page-title">ABOUT</h1>
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
          <dt>Country:</dt>
          <dd>Japan</dd>
        </dl>
      </div>
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
    }
  }
  .description {
    line-height: 1.5;
  }
`;


export default RouteAbout;
