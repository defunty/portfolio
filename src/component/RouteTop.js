import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import TitleAnimation from './TitleAnimation.js';
import SVGText from './SVGText.js';
import SVGPowerOff from './SVGPowerOff.js';

import Particle from './Particle.js';


const RouteTop = () => {
  const [isDisplay, setIsDisplay] = useState('title');
  const getDisplayContent = () => {
    switch(isDisplay){
      case 'title':
        setTimeout(()=>{
          //setIsDisplay('content');
        },5500);
        console.log('title')
        return(<TitleAnimation />);
        break;
      case 'content':
        console.log('content');
        return(<Content />);
        break;
    }
  }
  
  return (
    <PageContent className={isDisplay}>
      <div>
        <div>{ getDisplayContent() }</div>
      </div>
    </PageContent>
  );
}

const Content = () => {
  return (
    <ContentWrapper>
      <Title>
        <div className="title test">
          Yusuke Inoue's Portfolio
        </div>
      </Title>
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
  background-color: #fff;
  opacity: 1;
  height: 100%;
  width: 100%;
  z-index: 1;
  * {
    color: #fff;
    fill: #fff;
  }
  
  @keyframes  page-transition {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  &.content {
    background-color: #000;
  }
`;

const ContentWrapper = styled.div`
display: block;
position: relative;
height: 100%;
width: 100%;
z-index: 100;
`;

const Title = styled.div`
  top: 50vh;
  opacity: 0;
  position: fixed;
  width: 100%;
  animation: 'initial-animation-link' 0.5s ease-in-out 0s both;
  @keyframes  initial-animation-link {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .title{
    position: absolute;
    text-align: center;
    bottom: 0;
    height: auto;
    width: 100%;
    z-index: 100;
    animation: 'up-down-transition' 8.4s ease-in-out 3.4s infinite both;
    @keyframes  up-down-transition {
      0% { transform: translateY(0px); }
      15% { transform: translateY(0px); }
      45% { transform: translateY(-10px); }
      50% { transform: translateY(-10px); }
      80% { transform: translateY(0px); }
      100% { transform: translateY(0px); }
    }
  }

`;

const LinkWrapper = styled.div`
  display: inline-block;
  text-align: center;
  opacity: 0;
  position: fixed;
  top: 50vh;
  padding: 20px;
  width: 100%;

  animation: 'initial-animation-link' 0.5s ease-in-out 2s both;
  
  a {
    display: inline-block;
    width: auto;
  }
  svg {
    width: 50px;
    .d1, .d2 {
      fill: #D73F32;
      opacity: 0;
      transition: 2.8s fill;
      animation: 'd-animation' 2.8s linear 0s infinite none;
      @keyframes  d-animation {
        0% {
          opacity: 1;
        }
        10% {
          opacity: 1;
        }
        42% {
          opacity: 0;
        }
        58% {
          opacity: 0;
        }
        90% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
    }
    &:hover .d1, &:hover .d2{
      transition: 0s fill;
      fill: #52b043;
      opacity: 0;
      animation: 'd-hover-animation' 0.5s linear 0s both;
      @keyframes  d-hover-animation {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;
const Footer = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  text-align: right;
  padding-right: 20px;
  width: 100%;

  animation: 'initial-animation-link' 0.5s ease-in-out  1.0s both;

`;

export default RouteTop;
