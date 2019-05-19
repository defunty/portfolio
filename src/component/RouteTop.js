import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import TitleAnimation from './TitleAnimation.js';
import SVGText from './SVGText.js';
import SVGPowerOff from './SVGPowerOff.js';


const RouteTop = () => {
  return (
    <PageContent>
      <TitleAnimation />
      <Content />
      
    </PageContent>
  );
}

const Content = () => {
  return (
    <ContentWrapper>
      <Title>
        <div className="title"><SVGText x="50%" y="100%" content="Yusuke Inoue's Portfolio" /></div>
      </Title>
      {/*<Link to='/about'><SVGText content="ABOUT" /></Link>*/}
      <LinkWrapper>
        <Link className="icon" to='/about'>
          <SVGPowerOff />
        </Link>
      </LinkWrapper>
      <Footer>&copy;2019 Yusuke Inoue All Rights Reserved.</Footer>
    </ContentWrapper>
  );
}

// style
const PageContent = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  * {
    color: #fff;
    fill: #fff;
  }
  animation: 'page-transition' 1.5s ease-in-out 0s both;
  @keyframes  page-transition {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  a {
    display: block;
    margin: 0 auto;
    border-radius: 4px;
    width: auto;
  }
`;

const ContentWrapper = styled.div`
display: block;
position: relative
height: 100%;
width: 100%;
z-index: 100;

animation: 'initial-animation-link' 0.5s ease-in-out 5s both;
@keyframes  initial-animation-link {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;

const Title = styled.div`
  height: 50vh;
  position: relative;
  width: 100%;
  .title{
    position: absolute;
    bottom: 0;
    height: auto;
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: inline-block;
  text-align center;
  padding: 20px;
  width: 100%;
  a {
    display: block;
    width: auto;
  }
  svg {
    width: 50px;
    .d1, .d2 {
      fill: #D73F32;
      opacity: 0;
      animation: 'd-animation' 2.8s linear 0s infinite none;
      @keyframes  d-animation {
        0% {
          opacity: 0;
        }
        8% {
          opacity: 0;
        }
        40% {
          opacity: 1;
        }
        60% {
          opacity: 1;
        }
        92% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
    }
    &:hover .d1, &:hover .d2{
      animation: 'd-hover-animation' 0.5s linear 0s both;
      opacity: 0;
      @keyframes  d-hover-animation {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      fill: #52b043;
    }
  }
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  text-align: right;
  padding-right: 20px;
  width: 100%;
`;

export default RouteTop;
