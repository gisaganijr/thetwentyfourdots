import React, { useState, useRef, useEffect, memo, forwardRef, useLayoutEffect,useImperativeHandle, useMemo } from 'react';
import styled from 'styled-components';
import PageSection from 'components/PageSection';
import { config } from 'react-spring/renderprops';
import { CustomSpring, Curtain } from 'components/Spring/';
import { appBgColor, appBarMinHeight, colors, divider, pageContentMargin, pageContentMarginSmall, } from 'variables'
import _ from "lodash"
import Text from './Text';

const HeadlineMainWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const HeadlineContentWrapper = styled.div`
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
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 2;
`

const HeadlineInnerContentWrapper = styled.div`
  width: ${props => props.contentType === 'desktop' ? '35%' : '100%'};
  position: relative;
  ${props => props.contentType === 'mobile' && { 'height': '100%' } };
  padding: ${props => props.isWideScreen ? pageContentMargin : pageContentMarginSmall };
`

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
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

const Headline = React.memo(forwardRef(({
    isWideScreen, device, contentType, widthCat, height, width,
  }, ref) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoSrc = `${process.env.PUBLIC_URL}/assets/videos/what_we_do/What We Do_1902x936_Desktop.mp4`;
  const videoMobileSrc = `${process.env.PUBLIC_URL}/assets/videos/what_we_do/What We Do_1080x1920_Mobile.mp4`;
  const imageSrc = contentType === 'desktop' ? `${process.env.PUBLIC_URL}/assets/videos/what_we_do/What We Do_1902x936_L_Image Fallback.jpg` : `${process.env.PUBLIC_URL}/assets/videos/what_we_do/What We Do_1080x1920_P_Image Fallback.jpg`
  const propsToPass = {
    height, width,
    widthCat,
    isWideScreen, 
    contentType,
    startAni: imageLoaded
  }
  
  return (
    <div style={{position: "absolute", width: "100%", height: "100vh", overflow: 'hidden'}}>
      <PageSection 
        ref={ref} id='headline'
        sidePanelBorderColor={divider.dark}
        widthCat={widthCat} isWideScreen={isWideScreen}
      >
        <div style={{ height: '100vh'}}> 
          <ContentWrapper
            contentType={contentType}
          >
            <HeadlineContentWrapper 
              bgColor="transparent" 
              widthCat={widthCat}
              contentType={contentType}
            >
              <HeadlineInnerContentWrapper widthCat={widthCat} isWideScreen={isWideScreen} contentType={contentType}>
                <Text {...propsToPass} />
              </HeadlineInnerContentWrapper>
            </HeadlineContentWrapper>
          </ContentWrapper>
        </div>
      </PageSection>
      <div style={{ height: '100vh'}}> 
          <ContentWrapper
            contentType={contentType}
          >
            <CustomSpring
              startAni={imageLoaded ? true : false}
              from={{ height: '100%' }}
              to={{ height: '0%' }}
              config={{...config.slow}}
              delay={500}
              spinnerColor={colors.white}
              renderAni={(aniProps) => (
                <Curtain color={colors.black} style={{ ...aniProps ? { ...aniProps } : { position: 'absolute', height: '100%' }} } />
              )}
            />

            <Video 
              contentType={contentType}
              src={videoSrc} srcMobile={videoMobileSrc} 
            />

            <StyledImage 
              src={imageSrc}
              contentType={contentType}
              onLoad={() => {
                setImageLoaded(true);
              }}
            />
          </ContentWrapper>
        </div>
    </div>
  
  )
}))

const Video = React.memo((forwardRef(({ src, srcMobile, contentType}, ref) => {
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
  }, [contentType]);

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

const Index = forwardRef(({
  height, width,
  widthCat,
  isWideScreen, 
  device, orientation,
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

  const headlineProps = {
    isWideScreen, device, contentType, widthCat, height, width, 
  }

  return (
    <HeadlineMainWrapper 
      isWideScreen={isWideScreen} 
      ref={ref}
    >
      <Headline {...headlineProps} />
    </HeadlineMainWrapper>
  )
})

export default Index;
