import React from 'react';
import styled from 'styled-components';
import { push_uniq } from 'terser';


const CardList = () => {
  
  const getActivityData = (data) => {
    let cards = [];
    ActivityData.map((val,i)=>{
      cards.push(
        <Card
          key={i}
          category={val.category}
          date={val.date}
          title={val.title}
          tag={val.tag}
          summary={val.summary}
          description={val.description}
        />
      )
    })
    return(cards);
  }
  return(
    <StyledCardList>
      {getActivityData()}
    </StyledCardList>
  );
}
const Card = (prop) => {
  return(
    <StyledCard>
      <img src="" alt="" />
      <div className="category">{prop.category}</div>
      <div className="date">{prop.date}</div>
      <div className="title">{prop.title}</div>
      <div className="tag">{prop.tag}</div>
      <div className="summary">{prop.summary}</div>
      <div className="description">{prop.description}</div>
    </StyledCard>
  );
}

//style

const StyledCardList = styled.ul`
  display: grid;
  gap: 10px;
  margin-left: -10px;
  margin-right: -10px;
  width: 100%;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;

  /*grid-template-rows: 180px 100px 80px 120px auto;*/
  @media screen and (min-width: 720px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const StyledCard = styled.li`
  background-color: #333;
  border-radius: 8px;
  padding: 10px;
  overflow: hidden;
  width: 100%;
  .category {
    
  }
  .date {

  }
  .title {

  }
  .description {
    display: none;
  }
`;



const ActivityData = [
  {
    category:"Works", date:"2019/01/20", title:"Dekill", tag:['test1','test2'],
    summary: "testtesttesttesttesttesttesttesttesttest",
    description: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
  },
  {
    category:"Works", date:"2019/01/20", title:"Dekill", tag:['test1','test2'],
    description: ""
  },
  {
    category:"Works", date:"2019/01/20", title:"Dekill", tag:['test1','test2'],
    description: ""
  },
  {
    category:"Works", date:"2019/01/20", title:"Dekill", tag:['test1','test2'],
    description: ""
  }
];

export default CardList;
