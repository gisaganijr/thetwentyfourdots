import React, { useEffect, useMemo, useLayoutEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { getImageDimensionOnFilename } from 'helpers';
import { imageCurtainColor, colors, contentMargin, pageContentMarginSmall } from 'variables';
import { useSpring, config, animated } from 'react-spring';
import { CustomSpring, Curtain, AniLoadingWrapper } from 'components/Spring/';
import { Link } from '@material-ui/core';
import { sum, toInteger, includes, filter, round, floor } from 'lodash';
import CustomCircularProgress from 'components/CustomCircularProgress';
import LoaderWrapper from 'components/CustomCircularProgress/LoaderWrapper';
import P from 'components/P';

const StyledImage = styled.img`
    position: absolute;
    top:  50%;
    left: 0;
    right: 0;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: 150%;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const HoverWrapper = styled.div`
  height: ${props => props.height || "100%"};
  position: absolute;
  background: ${props => props.bgColor || '#232323'};
  width: 100%;
  top: 0;
  z-index: 999999;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`

const HoverInnerWrapper = styled.div`
  width: 100%;
  color: ${colors.white};
  position: absolute;
  background: transparent;
  z-index: 9999999;
  padding: ${props => props.padding};
`

const Wrapper = styled.div`
  background: ${props => `url("${props.img}") no-repeat center center fixed`};
  background-size: cover;
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
`

const HoverWrap = ({ aniProps, item, height, widthCat, isWideScreen, hovered, push}) => {
  return (
    <HoverWrapper height={height} isWideScreen={isWideScreen} hovered={hovered} style={{...!aniProps ? { opacity: 0 } : {...aniProps}}}>
      &nbsp;
    </HoverWrapper> 
  )
}

const HoverText = ({ aniProps, item, height, widthCat, isWideScreen, hovered, push}) => {
  return (
    <HoverWrapper bgColor="transparent" height={height} isWideScreen={isWideScreen} hovered={hovered} style={{...!aniProps ? { opacity: 0 } : {...aniProps}}}>
      <HoverInnerWrapper padding={isWideScreen ? contentMargin : `1rem ${pageContentMarginSmall}`}>
        <CustomSpring
          startAni={hovered}
          from={{ opacity: '0' }}
          to={{ opacity: '1' }}
          config={{...config.slow}}
          noLoader={true}
          delay={500}
          renderAni={(aniProps) => (
            <div style={{...!aniProps ? { opacity: 0 } : {...aniProps}}}>
              <Link 
                href="#" 
                color="inherit" 
                style={{ textDecoration: 'inherit' }}
                {...hovered && { onClick: (e) => {
                  e.preventDefault();
                  if (item.url)
                    push(item.url)}
                }}
              >
                <P 
                  fontType="bold"
                  size="md" 
                  //widthCat={widthCat}
                  noMargin={true} 
                  header
                  customLineHeight="1rem"
                >
                  {item.title || 'Title'}
                </P>
              </Link>
            </div>
          )}
        />
        <CustomSpring
          startAni={hovered}
          from={{ opacity: '0' }}
          to={{ opacity: '1' }}
          config={{...config.slow}}
          noLoader={true}
          delay={1000}
          renderAni={(aniProps) => (
            <div style={{...!aniProps ? { opacity: 0 } : {...aniProps}}}>
              <P noMargin size={isWideScreen ? 'xs' : 'sm'} fontType="medium">
                {item.description || 'description'}
              </P>
            </div>
          )}
        />
      </HoverInnerWrapper>
    </HoverWrapper> 
  )
}

const ImageItem = ({
  rowHeight, works, layout, item, width, widthCat, isWideScreen, gridItem, 
  changeLayoutHeight, loadedImage, touchedWork, setTouchedWork, push
}) => {
  
  const itemRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const [topScrolled, setTopScrolled] = useState(false);
  const [bottomScrolled, setBottomScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const layoutUsed = isWideScreen ? "layout" : "smLayout";

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => { 
      setHovered(touchedWork === item.itemId ? true : false);
  }, [touchedWork])

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
  })
  
  function handleScroll(e) {
    checkIfScrolled();
  }

  function checkIfScrolled() {
    const adjustment = 0.80;
    const _layout = item[layoutUsed];

    if (!topScrolled && _layout.h > 9 && itemRef && itemRef.current !== null && itemRef.current.getBoundingClientRect().top <= window.innerHeight) {
      setTopScrolled(true);
    }

    if (!bottomScrolled && _layout.h > 9 && itemRef && itemRef.current !== null && itemRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setBottomScrolled(true);
    }
  }

  return (
    <div 
      ref={itemRef}
      style={{ 
        width: `${item.convertedWidthPx}px`, 
        height: `${item.convertedHeightPx}px`, 
        backgroundColor: topScrolled && loaded ? "transparent" : "#000000" 
      }}
      onTouchEnd={() => setTouchedWork(item.itemId)}
    >
      <div style={{ height: `${item.convertedHeightPx}px` }}>
        <CustomSpring
          startAni={topScrolled && loaded ? true : false}
          from={{ height: '100%' }}
          to={{ height: '0%' }}
          config={{...config.slow}}
          noLoader={true}
          //delay={500}
          renderAni={(aniProps) => (
            <Curtain style={{ ...aniProps ? { ...aniProps } : { height: '100%' }} } />
          )}
        />

        {useMemo(() => (
          <CustomSpring
            startAni={true}
            from={{ transform: hovered ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(1.1)'}}
            to={{ transform: hovered ? 'translateY(-50%) scale(1.1)' : 'translateY(-50%) scale(1)' }}
            config={{...config.slow}}
            noLoader={true}
            renderAni={(aniProps) => (
              <StyledImage 
                style={{ ...aniProps ? { ...aniProps } : { transform: 'translateY(-50%) scale(1)' }} }
                {...topScrolled && { 
                  src: item.image, 
                  onLoad: () => {
                    setLoaded(true);
                  }
                }}
                width="100%" 
                height="auto" 
              />
            )}
          />
        ), [item && item.image, topScrolled, hovered])}

        {!loaded && topScrolled && 
          <LoaderWrapper height={`${item.convertedHeightPx}px`}>
            <CustomCircularProgress 
              variant="indeterminate" 
              thickness={4} 
              color={colors.white}
              hideDot
            />
          </LoaderWrapper> 
        }
        
        <CustomSpring
          startAni={loaded}
          from={{ opacity: hovered ? '0' : '0.5'  }}
          to={{ opacity: hovered ? '0.5' : '0' }}
          config={{...config.slow}}
          noLoader={true}
          renderAni={(aniProps) => (
            <HoverWrap aniProps={aniProps} hovered={hovered} item={item} isWideScreen={isWideScreen} widthCat={widthCat} push={push} />
          )}
        />

        <CustomSpring
          startAni={loaded}
          from={{ opacity: hovered ? '0' : '1'  }}
          to={{ opacity: hovered ? '1' : '0' }}
          config={{...config.slow}}
          noLoader={true}
          renderAni={(aniProps) => (
            <HoverText aniProps={aniProps} hovered={hovered} item={item} isWideScreen={isWideScreen} widthCat={widthCat} push={push} />
          )}
        />
      </div>
      {/* <img src={item.image} width="100%" height="auto" /> */}
    </div>
  )
}

export default React.memo(ImageItem);