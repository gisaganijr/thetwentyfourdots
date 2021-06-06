import React from 'react';
import "./index.css";
import styled from 'styled-components';
import { coverBgColor, preLoaderBgColor, colors } from 'variables';

const Wrapper = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex!important;
  flex-direction: column;
  align-items: center!important;
  justify-content: center!important;
  background: ${preLoaderBgColor};
`

export const AnimatedLoader = ({ open }) => {

  if (!open)
    return null;

  return ( 
    <Wrapper>
      <figure>
          <div class="custom-dot-loading-indicator custom-dot-loading-indicator-white"></div>
          <div class="custom-dot-loading-indicator"></div>
          <div class="custom-dot-loading-indicator"></div>
          <div class="custom-dot-loading-indicator"></div>
          <div class="custom-dot-loading-indicator"></div>
      </figure>
    </Wrapper>
  )
}

export default AnimatedLoader;