import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import PageSection from 'components/PageSection';
import { config } from 'react-spring/renderprops';
import { CustomSpring, Curtain } from 'components/Spring/';
import { appBgColor, appBarMinHeight, colors, divider, pageContentMargin, pageContentMarginSmall, } from 'variables'
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
  width: ${props => props.contentType === 'desktop' ? '50%' : '100%'};
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
    isWideScreen, device, contentType, widthCat, height, width
  }, ref) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageSrc = contentType === 'desktop' ? `${process.env.PUBLIC_URL}/assets/videos/work/Work_1902x936_Desktop.jpg` : `${process.env.PUBLIC_URL}/assets/videos/work/Work_1080x1920_Mobile.jpg`
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
        sidePanelBorderColor={divider.light}
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
    isWideScreen, device, contentType, widthCat, height, width
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
