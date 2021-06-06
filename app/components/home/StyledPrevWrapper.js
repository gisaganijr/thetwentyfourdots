import styled from 'styled-components';
import React from 'react';

const StyledPrevWrapper = styled.div`
  height: ${props => props.height}px;
  min-height: ${props => props.height}px;
  max-height: ${props => props.height}px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 70px;
  margin-bottom: 10px;
`

export default StyledPrevWrapper;