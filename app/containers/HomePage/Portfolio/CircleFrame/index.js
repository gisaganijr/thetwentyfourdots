import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border-radius: 50%;
`
const CircleFrame = ({src, style}) => {

  return (
    <StyledDiv>
      <img src={src} style={style} />
    </StyledDiv>
  )
}

export default CircleFrame;