import React from 'react';
import styled from 'styled-components';
import Particle from './Particle.js';

const TitleAnimation = () => (
  <React.Fragment>
    <MainTitleWrapper>
      <svg version="1.1" width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Yusuke Inoue's Portfolio</title>
          {textList}
        </g>
      </svg>
    </MainTitleWrapper>
    <Overlay />
    
  </React.Fragment>
)

const title = `Yusuke Inoue`;
let textList = [];
let styleDraw = ``;
for(let i=0;i<title.length;i++){
  textList.push(<text key={i} x="50%" y="50%" fill="none" textAnchor="middle">{title.slice(i,i+1)}</text>);
  styleDraw += 
  `&:nth-of-type(${i+1}) {
      animation:
        'draw' 24s linear 0s both,
        't${i+1}' 0.6s ease 2.5s both,
        'fill' 0.7s ease 3.2s both;
  }`;
}

const styleTextTransition = `
@keyframes t1 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(-125px,-30px); }
}
@keyframes t2 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(-90px,-30px); }
}
@keyframes t3 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(-55px,-30px); }
}
@keyframes t4 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(-20px,-30px); }
}
@keyframes t5 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(15px,-30px); }
}
@keyframes t6 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(50px,-30px); }
}
@keyframes t7 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(0px,0px); }
}
@keyframes t8 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(-7px,30px); }
}
@keyframes t9 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(20px,30px); }
}
@keyframes t10 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(55px,30px); }
}
@keyframes t11 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(90px,30px); }
}
@keyframes t12 {
  0% { transform: translate(0px,0px); }
  100% { transform: translate(125px,30px); }
}

@media screen and (min-width: 720px){
  @keyframes t1 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(-195px,0px); }
  }
  @keyframes t2 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(-160px,0px); }
  }
  @keyframes t3 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(-125px,0px); }
  }
  @keyframes t4 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(-90px,0px); }
  }
  @keyframes t5 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(-55px,0px); }
  }
  @keyframes t6 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(-20px,0px); }
  }
  @keyframes t7 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(0px,0px); }
  }
  @keyframes t8 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(65px,0px); }
  }
  @keyframes t9 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(90px,0px); }
  }
  @keyframes t10 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(125px,0px); }
  }
  @keyframes t11 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(160px,0px); }
  }
  @keyframes t12 {
    0% { transform: translate(0px,0px); }
    100% { transform: translate(195px,0px); }
  }
}

`;

const MainTitleWrapper = styled.h1`
  /* Adapt the colors based on primary prop */
  /*
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  */
  background-color: transparent;
  color: #333;
  position: fixed;
  height: 100%;
  width: 100%;

  svg text {
    animation-name: draw;
    stroke: black;
    fill: none;
    font-size: 60px;
    stroke-dasharray: 2000;
    stroke-width: 0.4px;
    ${styleDraw}

    @keyframes draw {
      0% { stroke-dashoffset: 2000; }
      100% { stroke-dashoffset: 0; }
    }
    ${styleTextTransition}
    @keyframes fill {
      0% { fill: transparent; }
      100% { fill: black; }
    }
  }
`;

const Overlay = styled.div`
  /*background-color: rgb(35,39,65);*/
  background-color: #000;
  height: 100%;
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  z-index: 1;

  animation: 'overlay-transition' 1s ease-in-out 4s both;
  @keyframes overlay-transition {
    0% { transform:translateX(0); }
    100% { transform:translateX(-100%); }
  }
`;


export default TitleAnimation;