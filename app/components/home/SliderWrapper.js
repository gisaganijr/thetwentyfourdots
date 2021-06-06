import React, {useState} from 'react';
import styled from 'styled-components';


const SliderWrapper = styled.div`
  width: ${props => props.width};
  min-width: ${props => props.width};
  max-width: ${props => props.width};
  height: ${props => props.height};
  min-height: ${props => props.height};
  max-height: ${props => props.height};
  display: flex!important;
  align-items: center!important;
  justify-content: center!important;
  //border: 1px solid #fff000;
`

export default SliderWrapper;