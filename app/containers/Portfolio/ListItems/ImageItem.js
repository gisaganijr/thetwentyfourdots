import React, { useMemo, useLayoutEffect, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { getImageDimensionOnFilename } from 'helpers';
import { colors } from 'variables';
import { useSpring, config, animated } from 'react-spring';
import { CustomSpring, Curtain, AniLoadingWrapper } from 'components/Spring/';
import { toInteger, filter, includes, round, floor, sum } from 'lodash';
import CustomCircularProgress from 'components/CustomCircularProgress';
import LoaderWrapper from 'components/CustomCircularProgress/LoaderWrapper';

const StyledImage = styled.img`
    position: absolute;
    top:  50%;
    left: 0;
    transform: translateY(-50%);
    right: 0;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: 150%;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const ImageItem = ({
  rowHeight, gridItems, item, width, widthCat, isWideScreen, gridItem, portfolioId, selPortfolioName,
  loadedImage
}) => {
  const itemRef = useRef();
  const [topScrolled, setTopScrolled] = useState(false);
  const [bottomScrolled, setBottomScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const image = isWideScreen ? item.image : item.smImage || item.image;
  const layoutUsed = isWideScreen ? "layout" : "smLayout";
  const wrapperHeight = rowHeight * item[layoutUsed].h;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    checkIfScrolled();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
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
      style={{ position: 'relative', width: `${item.convertedWidthPx}px`, height: `${wrapperHeight}px`, backgroundColor: loaded ? "transparent" : "#000000" }}
    >
      <div style={{ height: `${item.convertedHeightPx}px` }}>
        <CustomSpring
          startAni={topScrolled & loaded ? true : false}
          from={{ height: '100%' }}
          to={{ height: '0%' }}
          config={{...config.slow}}
          delay={500}
          noLoader={true}
          renderAni={(aniProps) => (
            <Curtain style={{ ...aniProps ? { ...aniProps } : { height: '100%' }} } />
          )}
        />
        {useMemo(() => (
          <StyledImage 
            width="100%" height="auto"
            {...topScrolled && { 
              src: image, 
              onLoad: () => {
                setLoaded(true);
              }
            }}
          />
        ), [image, topScrolled])}

        {!loaded && 
          <LoaderWrapper height={`${wrapperHeight}px`}>
            <CustomCircularProgress 
              variant="indeterminate" 
              thickness={4} 
              color={colors.white}
              hideDot
            />
          </LoaderWrapper> 
        }
      </div>
    </div>
  )
}

export default React.memo(ImageItem);