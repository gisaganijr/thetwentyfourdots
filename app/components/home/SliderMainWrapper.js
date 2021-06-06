import React from 'react';
import styled from 'styled-components';

const SliderMainWrapper = styled.div`
  ${props => props.height && {"height": props.margin}};
  ${props => props.height && {"min-height": props.height}};
  ${props => props.height && {"max-height": props.height}};
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 1px solid #ff00f0;
`

export default SliderMainWrapper;