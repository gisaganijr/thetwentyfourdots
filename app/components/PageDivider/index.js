import React from 'react';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';

const FloatingWrapper = styled.div`
  position: absolute;
  height: 100%; 
  width: 1px;
   top: 0; 
   left: 17%;
`;

const StyledDivider = styled(Divider)`
  height: 100%!important;
  width: 1px;
  position: absolute;
  background-color: ${props => props.color}!important;
  top: 0;
  right: 0;
  z-index: 999
`;

const PageDivider = ({color, float = false}) => {

  if (float) {
    return (
      <FloatingWrapper>
        <StyledDivider color={color} />
      </FloatingWrapper>
    )
  }

  return (
    <StyledDivider color={color} />
  )
}

export default PageDivider;