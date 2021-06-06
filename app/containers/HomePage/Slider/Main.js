/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useEffect, memo, forwardRef } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { colors } from 'variables'
import SliderWrapper from 'components/home/SliderWrapper';
//import SliderMainWrapper from 'components/home/SliderMainWrapper';
import PointerTitle from 'components/PointerTitle';
import SidePanel from 'components/SidePanel';
import Indicators from './Indicators';
import { H1, H2, H3 } from 'components/H';
import P from 'components/P';
import { getContentType } from 'helpers';
const key = 'home2';
import PointerAnimation from './PointerAnimation';
import MainAnimation from './MainAnimation';
import HeadlineText from './HeadlineText';
import './index.css'
import _ from "lodash"
import FastAverageColor from 'fast-average-color';

const VideoWrapper = styled.div`
  ${props => !_.includes(['xs', 'sm'], props.widthCat) ? {
    position: 'absolute',
    width: '90%',
    top: '5%',
    left: '-28%'
  } : {
    position: 'relative',
    display: 'flex',
    "flex-direction": 'column',
    "justify-content": 'center',
    "align-items": 'center'
  }}
  //background: ${props => props.bgColor}
`

const TextWrapper = styled.div`
  ${props => props.contentType === 'desktop' ? {
    width: '45%',
    position: 'absolute',
    top: '0px',
    right: '0px',
    height: '100%'
  } : {
    padding: '2rem 3rem',
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const RightPanelInnerWrapper = styled.div`
  ${props =>  !_.includes(['xs', 'sm'], props.widthCat) && { position: 'relative' }};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TextInnerWrapper = styled.div`
  min-height: 50%;
`

const IndicatorsWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0px;
`

const Main = forwardRef(({
  sliders, 
  height, width,
  changeSlide,
  widthCat,
  activeSlide, slide,
  isWideScreen, activeSlideIndex, contentType
}, ref) => {

  const [bgColor, setBgColor] = useState(false);
  const [localActiveSlideIndex, setLocalActiveSlideIndex] = useState(0);
  const [localWidthCat, setLocalWidthCat] = useState(null);

  useEffect(() => {
      setLocalActiveSlideIndex(activeSlideIndex);
  }, [activeSlideIndex])
  
  useEffect(() => {
      setLocalWidthCat(widthCat);
  }, [widthCat])

  return (
      localActiveSlideIndex === activeSlideIndex ?
        <>
          <TextWrapper 
            contentType={contentType}
          >
            <RightPanelInnerWrapper>
              <TextInnerWrapper>
                <PointerAnimation>
                  <PointerTitle 
                    title={slide.pointerTitle} 
                    color={colors.white} 
                    isWideScreen={isWideScreen} 
                  />
                </PointerAnimation>
              
                {
                  localWidthCat === widthCat ?
                  <Typist
                    avgTypingDelay={30} 
                    cursor={{show: false}} 
                    startDelay={2000}
                  >
                    <HeadlineText widthCat={widthCat} isWideScreen={isWideScreen} width={width} height={height} activeSlideIndex={activeSlideIndex}>
                      {slide.title}
                    </HeadlineText>
                  </Typist> 
                  : null
                }
              </TextInnerWrapper>

              <IndicatorsWrapper>
                <Indicators sliders={sliders} activeSlideIndex={activeSlideIndex} changeSlide={changeSlide} widthCat={widthCat} />
              </IndicatorsWrapper>
            </RightPanelInnerWrapper>
          </TextWrapper>
        </> 
        : null 
    )
})

export default Main;
