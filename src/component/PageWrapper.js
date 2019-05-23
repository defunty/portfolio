import React from 'react';
import styled from 'styled-components';

const PageWrapper = ({children}) => {
  return(
    <StyledPageWrapper>
      {children}
    </StyledPageWrapper>  
  );
}

// style
const StyledPageWrapper = styled.div`
  background-color: #000;
  position: relative;
  min-height: 100vh;
  width: 100%;
  * {
    color: #fff;
  }


`;


export default PageWrapper;