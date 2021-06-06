/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useState, useRef, useEffect, memo, forwardRef, useLayoutEffect,useImperativeHandle, useMemo } from 'react';
import styled from 'styled-components';
import Main from './Main';
import Mobile from './Mobile';
import { Transition, animated, config} from 'react-spring/renderprops'
import PageDivider from 'components/PageDivider';
import { appBgColor, appBarMinHeight, sliderInterval, colors, divider, iconSizeConfig, margin, borderColor } from 'variables'
import Indicators from './Indicators';
import _ from "lodash"
import SidePanel from 'components/SidePanel';

const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex!important;
  align-items: center!important;
  justify-content: center!important;
  //border: 1px solid #fff000;
  overflow: hidden;
  margin: 0px;
  position: relative;
  ${props => props.bgColor && {background: props.bgColor}};
`

const SliderMainWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SliderContentWrapper = styled.div`
  flex: 1; 
  width: 100%;
  height: 100vh;
  background: ${props => props.bgColor};
  padding: 0px;
  //padding: ${props => props.contentType === 'mobile' ? '0px' : '4rem 10rem 4rem 0rem'};
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  display: block;
  z-index: 2;
`

const SliderInnerContentWrapper = styled.div`
  position: relative;
  height: 100%;
  padding-top: 32px;
`

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${props => props.activeSlide.bgColor};
`

const StyledVideo = styled.video`
    position: absolute;
    top:  ${props => props.contentType === 'mobile' ? "40%" : "50%"};
    left: 0;
    transform: translateY(${props => props.contentType === 'mobile' ? "-40%" : "-50%"});
    right: 0;
    margin: auto;
    min-height: ${props => props.hasSrc ? '100%' : '0px'};
    min-width: 100%;
    max-width: 150%;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
`

const StyledImage = styled.img`
    position: absolute;
    top:  ${props => props.contentType === 'mobile' ? "40%" : "50%"};
    left: 0;
    transform: translateY(${props => props.contentType === 'mobile' ? "-40%" : "-50%"});
    right: 0;
    margin: auto;
    min-height: ${props => props.hasSrc ? '100%' : '0px'};
    min-width: 100%;
    max-width: 150%;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const IndicatorsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 16px;
  z-index: 999;
`

const SliderComp = React.memo(forwardRef(({
    sliders, activeSlide, slide, isWideScreen, 
    changeSlide, loadedSlideImage,
    device, contentType, widthCat, height, width, activeSlideIndex
  }, ref) => {

  const imageSrc = contentType === 'desktop' ? slide.imageSrc : slide.imageMobileSrc;
  const importedProps = {
    sliders, 
    height, width,
    changeSlide,
    widthCat,
    activeSlide,
    isWideScreen, activeSlideIndex, contentType,
    slide
  }
  
  return (
    <Transition
      items={activeSlideIndex}
      from={{ opacity: 0 }}
      enter={{ opacity: 1 }}
      leave={{ opacity: 0 }}
    >
      {activeSlideIndex =>
        activeSlideIndex === slide.index
          ? props => (
              <div style={{...props, position: "absolute", width: "100%", height: "100vh"}}>
                <SliderWrapper 
                  widthCat={widthCat}
                  width='100%'
                >
                  <VideoWrapper
                    activeSlide={{
                      ...activeSlide,
                    }}
                    contentType={contentType}
                  >
                    <Video 
                      contentType={contentType}
                      src={slide.videoSrc} srcMobile={slide.videoMobileSrc} 
                    />
                    <StyledImage 
                      src={imageSrc}
                      contentType={contentType}
                      onLoad={() => {
                        loadedSlideImage(slide.index);
                      }}
                    />
                    <SliderContentWrapper 
                      bgColor="transparent" 
                      widthCat={widthCat}
                      contentType={contentType}
                    >
                      <SliderInnerContentWrapper widthCat={widthCat}>
                        { 
                          contentType === 'desktop'
                          ?
                            <Main {...importedProps} />
                          :
                            <Mobile {...importedProps} />  
                        }    
                      </SliderInnerContentWrapper>
                    </SliderContentWrapper>
                    { 
                      contentType === 'mobile' && 
                        <IndicatorsWrapper height={height}>
                          <Indicators sliders={sliders} activeSlideIndex={activeSlideIndex} changeSlide={changeSlide} />
                        </IndicatorsWrapper>
                    }

                    <SidePanel 
                      height="100%" 
                      borderColor={divider.light}
                      hide={isWideScreen ? false:  true} 
                    />
                  </VideoWrapper>
                </SliderWrapper>
              </div>
            )
          : null
      }
    </Transition>
  )
}))

const Video = React.memo((forwardRef(({ src, srcMobile, contentType, activeSlideIndex}, ref) => {
  const videoRef = useRef();

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    
    videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
  }, [])

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const videoSrc = contentType === 'desktop' ? src : srcMobile;
    if (videoSrc !== '' || videoRef.current.src !== videoSrc) {
      videoRef.current.src = videoSrc;
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [contentType, activeSlideIndex]);

  return (
    <StyledVideo
      ref={videoRef}
      data-desktop={src}
      data-mobile={srcMobile}
      loop
      width="100%" height="auto"
      playsInline //FIX iOS black screen
      autoPlay
      preLoad
    />
  );
})))

const Slider = forwardRef(({
  sliders, 
  height, width,
  changeSlide,
  widthCat,
  selectedSlider: activeSlide,
  isWideScreen, activeSlideIndex, 
  device, orientation, loadedSlideImage 
}, ref) => {

  const [contentType, setContentType] = useState();
  useEffect(() => {
    setContentType(getContentType(width, height)); 
  }, [width, height])

  let _height = height;
  if (!isWideScreen)
    _height = height - appBarMinHeight;

  function getContentType(_width, _height) {
    const _device = !!navigator.maxTouchPoints ? 'mobile' : 'desktop';
    if (_device === 'mobile') {
      if (_width < _height) 
        return 'mobile';
    }

    return 'desktop';
  }
  
  if (contentType === null) 
    return null;

  const sliderProps = {
    sliders, isWideScreen, changeSlide, activeSlide, loadedSlideImage,
    device, contentType, widthCat, height, width, activeSlideIndex
  }

  return (
      <SliderMainWrapper 
        isWideScreen={isWideScreen} 
        bgColor={activeSlide.bgColor} 
        ref={ref} id="slider"
      >
        <SliderComp {...sliderProps}slide={sliders[0]} />
        <SliderComp {...sliderProps}slide={sliders[1]} />
        <SliderComp {...sliderProps}slide={sliders[2]} />
        <SliderComp {...sliderProps}slide={sliders[3]} />
      
      </SliderMainWrapper>
  )
})

export default Slider;
