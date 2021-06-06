import React from 'react';
import "./preloader.css";
import styled from 'styled-components';
import { preLoaderBgColor, colors } from 'variables';

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
          <div class="dot-pre-loader dot-pre-loader-white"></div>
          <div class="dot-pre-loader"></div>
          <div class="dot-pre-loader"></div>
          <div class="dot-pre-loader"></div>
          <div class="dot-pre-loader"></div>
      </figure>
    </Wrapper>
  )
}

export default AnimatedLoader;