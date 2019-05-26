import React, {useState} from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';


const CardList = () => {
  const getActivityData = (data) => {
    let cards = [];
    ActivityData.map((val,i)=>{
      return cards.push(
        <Card
          key={i}
          link={val.link}
          category={val.category}
          date={val.date}
          title={val.title}
          tags={val.tags}
          description={val.description}
        />
      )
    })
    return(cards);
  }

  const masonryOptions = {
    transitionDuration: 600
  };

  return(
    <StyledCardList
      className={'my-gallery-class'} // default ''
      elementType={'ul'} // default 'div'
      options={masonryOptions} // default {}
    >
      {getActivityData()}
    </StyledCardList>
  );
}
const Card = (prop) => {
  const [focuseClass] = useState('');
  return(
    <StyledCard className={focuseClass}>
      <div className="card-wrapper">
        <div className="category">{prop.category}</div>
        <div className="date">{prop.date}</div>
        <div className="title">{prop.title}</div>
        <div className="tag"><TagList tags={prop.tags} /></div>
        <div className="description">{prop.description}</div>
        {prop.link !== '' && <a className="link" href={prop.link} target="_blank" rel="noopener noreferrer">Link</a>}
      </div>
    </StyledCard>
  );
}

const TagList = (prop) => {
  return(
    <ul className="tag-list">
      {prop.tags.map((tag,i)=>{
        return(<li key={i}>{tag}</li>);
      })}
    </ul>
  );
}

//style
//const StyledCardList = styled.ul`
const StyledCardList = styled(Masonry)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  /*grid-template-rows: 180px 100px 80px 120px auto;*/
  @media screen and (min-width: 720px){

  }
`;

const StyledCard = styled.li`
  display: block;
  height: auto;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  @media screen and (min-width: 720px){
    width: 50%;
  }
  .card-wrapper {
    background-color: rgba(0,0,0,0.3);
    display: block; 
    border: 3px double #fff;
    border-radius: 8px;
    overflow: hidden;
    padding: 10px;
    position: relative;
    width: 100%;
    * {
      color: #fff;
      word-break: break-all;
    }
  }
  
  .category {
    float: left;
    margin-right: 20px;
    font-size: 0.9em;
    margin-bottom: 12px;
  }
  .date {
    font-size: 0.9em;
    margin-bottom: 12px;
  }
  .title {
    font-size: 1.2em;
    margin-bottom: 12px;
  }
  .tag-list {
    font-size: 0.8em;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
    li {
      border: 1px solid rgba(14,190,255,1);
      color: rgba(14,190,255,1);
      border-radius: 4px;
      padding: 6px 6px;
      display: block;
      margin-bottom: 8px;
      margin-right: 8px;
    }
  }
  .description {
    font-size: 1.0em;
    line-height: 1.5;
    word-break: break-word;
  }
  .link {
    background-color: rgba(14,190,255,0.5);
    /*border: 1px solid rgba(14,190,255,1);*/
    border-radius: 50px;
    color: #fff;
    display: block;
    float: right;
    font-size: 0.85em;
    height: 50px;
    line-height: 50px;
    margin: 12px auto 0;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 50px;
    transition: all 0.4s;
    &::after {
      background-color: #0ebeff;
      border-radius: 4px;
      content: "";  
      opacity: 0;
      position: absolute;
      left: calc(50% - 2px);
      top: calc(50% - 2px);
      height: 4px;
      transform-origin:50% 50%;
      width: 4px;
    }
    animation: none;
        
    &:hover {
      
      &::after {
        animation: 'ripple' 1s ease-in-out 0s both;
        opacity: 1;
        @keyframes ripple {
          0% { }
          1% { transform: scale(0); opacity: 0.8; }
          40% { transform: scale(15); opacity: 0.4; }
          
          60% { transform: scale(15); opacity: 0.1; }
          
          70% { transform: scale(0); opacity: 0.1; }
          100% { transform: scale(0); opacity: 0; }
        }
        /*
        transform: scale(50);
        opacity: 1;
        */
      }
    }
  }
  
/*
  .show-button {
    background-color: blue;
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    height: 30px;
    opacity: 1;
    text-align: center;
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 30px;
  }
  .close-button {
    background-color: blue;
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    display: none;
    height: 30px;
    opacity: 0;
    text-align: center;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 0px;
  }
*/

  &.is-focused {
    /*animation: 'card-sp-expansion' 0.4s ease-in-out 0.65s both;
    @media screen and (min-width: 720px){
      animation: 'card-pc-expansion' 0.4s ease-in-out 0.65s both;
    }*/

    .display {
      animation: 'to-hidden' 0.4s ease-in-out 1s both;
    }
    .hidden {
      animation: 'to-display' 0.4s ease-in-out 1s both;
    }

    .show-button {
      color: transparent;
      transform-origin:50% 50%;
      opacity: 1;

      animation:
        'button-transition' 0.3s ease-in-out 0s both,
        'button-expansion' 1.5s ease-in-out 0.35s both;
    }
  }


  @keyframes to-hidden {
    100% {
      position: absolute;
      opacity: 0;
    }
  }
  @keyframes to-display {
    100% {
      position: initial;
      opacity: 1;
    }
  }
  

  /*
  @keyframes button-transition {
    100% {
      bottom: calc(50% - 15px);
      right: calc(50% - 15px);
    }
  }
  @keyframes button-expansion {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(20);
      opacity: 1;
    }
    100% {
      transform: scale(20);
      opacity: 0;
    }
    
  }
  */

  
/*
  @keyframes card-sp-expansion {
    100% {
      width: 100%;
    }
  }
  @keyframes card-pc-expansion {
    100% {
      width: 50%;
    }
  }
*/


`;



const ActivityData = [
  {
    link:'https://github.com/defunty/portfolio', category:'Works', date:'2019', title:'自身のポートフォリオをリニューアル',
    tags: ['React','styled-components','React Hooks','Netlify'],
    description: '本サイト。ReactとSVGアニメーションの学習目的のために全て刷新。React Hooksを利用。React表示についてはreact-router, react-particle, react-masonry-componentを利用。OGPの設定にはreact-helmetで対応。'
  },
  {
    link:'https://a-word-z.com/', category:'Works', date:'2019', title:'英単語学習管理サービス',
    tags: ['Ruby on Rails5','Python3','jQuery','Heroku'],
    description: '英単語の記憶状況を管理するためのWebアプリ。アプリケーションはRailsで構築。英文から全ての英単語を抽出・原型化・翻訳する機能を実装するため、自然言語処理ライブラリのNLTKを利用してPythonでスクリプトを作成。英単語抽出処理は別途構築したAPIサーバーに実装し、アプリケーションのビジネスロジックからのみ呼び出せる形とした。'
  },
  {
    link:'https://dekill.netlify.com/', category:'Works', date:'2018', title:'Web技術ごとの求人率比較ツール',
    tags: ['Python3','jQuery'],
    description: '求人率から技術トレンドを可視化するためのWebアプリ。技術ごとの求人数はIT系求人サイトの公開情報をPythonで書いたスクレイピング処理で取得。スクレイピング処理はPython3で記述。一部求人サイトでは求人件数の取得処理が非同期通信で行われていたため、Seleniumで非同期なスクレイピング処理を実装。グラフ表示はchart.jsを利用。'
  },
  /*
  {
    link:'', category:'Works', date:'2018', title:'ハローワークベースの求人サービス',
    tags: ['Apache','PHP7（CakePHP3）','jQuery'],
    description: 'バックエンドを担当。アプリケーションとは別に、ハローワークが公開しているAPIで取得した求人情報のXMLをパース・DBへの格納を行うスクリプトを作成した。'
  },
  {
    link:'', category:'Works', date:'2017', title:'タクシー会社ポータルサイト',
    tags: ['Apache','PHP（Zend Framework2）','PostgreSQL'],
    description: 'バックエンドを担当。'
  },
  {
    link:'', category:'Works', date:'2017', title:'タクシー配車管理システム',
    tags: ['Apache','PHP5','WordPress','MySQL','CSS','jQuery'],
    description: 'タクシー会社コールセンター向けの配車管理を行うためのシステム。バックエンドを担当。検索機能改修や'
  },
  {
    link:'', category:'Works', date:'2017', title:'CMSで構築した様々なサイト制作',
    tags: ['PHP','WordPress','MySQL','CSS','jQuery'],
    description: '主にフロントエンドを担当。CSS規約は直感的にスコープがイメージしやすいFLOCSSを採用。デザインの柔軟性を保証するため、CSSフレームワークは最小限の利用とし、レイアウトにのみBootstrapを利用。'
  }
  */
];

export default CardList;
