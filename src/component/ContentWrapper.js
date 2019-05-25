import styled from 'styled-components';

// style
const ContentWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  padding: 20px;
  width: 100%;
  max-width: 1220px;

  &.is--transition {
    animation: 'content-is-transition' 1s linear 0s both;
    @keyframes  content-is-transition {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

export default ContentWrapper;