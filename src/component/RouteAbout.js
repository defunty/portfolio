import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import CardList from './CardList.js';
import StyledContentWrapper from './ContentWrapper.js';
import Header from './Header.js';
import Particle from './Particle.js';
import PageWrapper from './PageWrapper.js';


const RouteAbout = () => {
  const [isRouteTransition, setIsRouteTransition] = useState('is--transition');
  
  useEffect(() => {
    document.title = "Y_Inoue | About";
    setTimeout(()=>{
      setIsRouteTransition('');
    }, 2000);
  });
  
  return(
    <PageWrapper>
      <Particle />
      <Header className={isRouteTransition} />
      <ContentWrapper className={isRouteTransition}>
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
              <li className="twitter"><a href="https://twitter.com/defunty_jp" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li className="qiita"><a href="https://qiita.com/defunty" target="_blank" rel="noopener noreferrer">Qiita</a></li>
              <li className="github"><a href="https://github.com/defunty" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
          </dd>
        </dl>
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
