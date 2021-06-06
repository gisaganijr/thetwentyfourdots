import React from 'react';
import { Divider } from '@material-ui/core';
import styled from 'styled-components';

const StyledDividier = styled(Divider)`
  height: 100%!important;
  width: 1px;
  position: fixed;
  background-color: #ebebeb!important;
  left: 17%;
`;

const CustomDivider = ({hide = false}) => {
  if (hide) 
    return null;

  return (
    <StyledDividier />
  )
}

export default CustomDivider;