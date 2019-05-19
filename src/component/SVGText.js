import React from 'react';
import styled from 'styled-components';


class SVGText extends React.Component {
  render() {
    return (
      <SVG version="1.1" width="100%" height="100%"  xmlns="http://www.w3.org/2000/svg">
        <g>
          <text x={this.props.x} y={this.props.y} fill="#fff" stroke="#fff" textAnchor="middle">{this.props.content}</text>
        </g>
      </SVG>
    );
  }
}

// style
const SVG = styled.svg`
  text {
    font-size: 40px;
  }
`;

export default SVGText;