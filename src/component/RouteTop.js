import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import Particle from './Particle.js';
import RouteTopContext from './RouteTopContext.js';
import SVGPowerOff from './SVGPowerOff.js';
import TitleAnimation from './TitleAnimation.js';


const RouteTop = (prop) => {
  const [isDisplay, setIsDisplay] = useState('title');
  

  const getDisplayContent = () => {
    switch(isDisplay){
      case 'title':
        setTimeout(()=>{
          setIsDisplay('content');
        },5500);
        return(<TitleAnimation />);
      case 'content':
        return(<Content />);
      default:
        return(<TitleAnimation />);
    }
  }
  return (
    <RouteTopContext.Provider value={prop}>
      <PageContent className={isDisplay}>
        { getDisplayContent() }
      </PageContent >
    </RouteTopContext.Provider>
  );
}

const Content = (prop) => {
  const [isRouteTransition, setIsRouteTransition] = useState('');
  const routeTopContext = useContext(RouteTopContext);
    
  const handleToAboutPage = () => {
    setIsRouteTransition(() =>{
      setTimeout(() => {
        routeTopContext.history.push('/about');
      }, 2000);
      return 'is--transition';
    })
  }
  return (
    <ContentWrapper>
      <Particle />
      <Title className={isRouteTransition}>
        <h1 className="title">Yusuke Inoue's Portfolio</h1>
      </Title>
      <LinkWrapper className={isRouteTransition}>
        <div className="icon" onClick={() => { handleToAboutPage(); }}>
          <SVGPowerOff />
        </div>
      </LinkWrapper>
      <Footer>&copy;2019 Yusuke Inoue All Rights Reserved.</Footer>
    </ContentWrapper>
    
  );
}

// style
const PageContent = styled.div`
  opacity: 1;
  height: 100vh;
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

canvas {
  animation: 'page-transition' 1.5s ease-in-out 0s both;
}
`;

const Title = styled.div`
  display: block;
  top: 50vh;
  opacity: 0;
  position: fixed;
  width: 100%;
  animation: 'page-transition' 1.5s ease-in-out 0s both;

  .title{
    display: block;
    font-size: 20px;
    height: auto;
    position: absolute;
    bottom: 0;

    padding: 0 8px;
    text-align: center;
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
    @media screen and (min-width:720px){
      font-size: 40px;
    }
  }
  &.is--transition .title {
    transition: all 1s;
    opacity: 0;
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
  z-index: 100;

  animation: 'page-transition' 0.5s ease-in-out 1.4s both;
  
  .icon {
    cursor: pointer;
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
    &:hover .d1, &:hover .d2 {
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
  &.is--transition
    .icon{
      .d1, .d2 {
        fill: #52b043;
        animation: 'd-transition-animation' 0.5s linear 1.3s both;
        @keyframes  d-transition-animation {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      }
    }
    
  }
`;
const Footer = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  animation: 'page-transition' 0.5s ease-in-out  1.0s both;

  @media screen and (min-width:720px){
    text-align: right;
    padding-right: 20px;
  }
`;

export default withRouter(RouteTop);
