import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components';
import StyledContentWrapper from './ContentWrapper.js';
import Header from './Header.js';
import Particle from './Particle.js';
import PageWrapper from './PageWrapper.js';
import SkillContext from '../context/SkillContext.js';


const RouteSkill = () => {
  const [isRouteTransition, setIsRouteTransition] = useState('is--transition');
  
  useEffect(() => {
    document.title = "Y_Inoue | Skill";
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
  const skillContext = useContext(SkillContext);
  
  const skillData = [
    { key: 'html', title: "HTML (Basic)", point: 0, maxPoint: 5, mastery: true, clickable: true, need: false, className: "devicon-html5-plain colored" },
    { key: 'css', title: "CSS (Basic)", point: 0, maxPoint: 5, mastery: true, clickable: false, need: {html: 1}, className: "devicon-css3-plain colored" },
    { key: 'react', title: "React (Basic)", point: 0, maxPoint: 5, mastery: true, clickable: false, need: {html: 1, css: 1}, className: "devicon-react-original colored" },
  ];
  const skillJSX = [];
  skillData.forEach((val,i)=>{
    skillJSX.push(
      <Skill {...val} />
    );
  });
  return(
    <React.Fragment>
      <h1 className="page-title">SKILL</h1>
      <div className="skilltree">
        { skillJSX }
        {/*
        <Skill key="1" maxPoint="5" point="0" title="HTML (Basic)" mastery={true} className="devicon-html5-plain colored" />
        <Skill maxPoint="5" point="0" title="CSS (Basic)" mastery={true} className="devicon-css3-plain colored" />
        <Skill maxPoint="5" point="0" title="Angular (Basic)" mastery={false} className="devicon-angularjs-plain colored" />
        <Skill maxPoint="5" point="0" title="Vue (Basic)" mastery={false} className="devicon-vuejs-plain colored" />
        <Skill maxPoint="5" point="0" title="React (Basic)" mastery={true} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="Hooks（v16〜）" mastery={false} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="Flux" mastery={false} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="Redux" mastery={false} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="Async actions" mastery={false} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="Suspense for Code Splitting" mastery={false} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="WebPack" mastery={true} className="devicon-webpack-plain colored" />
        <Skill maxPoint="1" point="0" title="Concurrent Mode" mastery={false} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="JEST" mastery={false} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="SSR" mastery={false} className="devicon-react-original colored" />
        <Skill maxPoint="1" point="0" title="Next.js" mastery={false} className="devicon-react-original colored" />
        */ }
      </div>
    </React.Fragment>
  );
}

const Skill = (prop) => {
  const [clickable, setClickable] = useState(prop.clickable);

  useEffect(() => {
    if(prop.need != false){
      Object.keys(prop.need).forEach((key) => {
        console.log(key);
        //contextから持ってくる
      });
      setClickable(true);
    }
    
  },[],)

  return(
    <div className={ `skill ${prop.mastery && 'is-mastery'}`.trim() } onClick={() => {setClickable(false)}} >
      <div className="modal">{prop.title}</div>
      <i className={prop.className}></i>
    </div>
  );
}

//const StyledContent = styled(React.Fragment)`
const ContentWrapper = styled(StyledContentWrapper)`
  .skilltree {
    overflow: hidden;
    width: 100%;
    .skill {
      border: 2px solid yellow;
      position: relative;
      height: 80px;
      width: 80px;
      .modal {
        border: 2px solid gray;
        border-radius: 4px;
        opacity: 0;
        position: absolute;
        transition: all 0.5s;
        top: 0;
        right: -20px;
        &:hover {
          padding: 1em;
          opacity: 1;
        }
      }
      &:hover .modal{
        opacity: 1;
      }
    }
    i {
      display: block;
      text-align: center;
      &::before {
        font-size: 70px;
      }
    }
  }
`;

export default RouteSkill;
