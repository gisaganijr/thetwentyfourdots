import React, { useEffect, useCallback, useLayoutEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { colors, contentMargin, divider } from 'variables';
import ContentWrapper from 'components/ContentWrapper';
import ContentInnerWrapper from 'components/ContentInnerWrapper';
import P from 'components/P';
import { toInteger, round, floor, ceil } from 'lodash';
import PageSection from 'components/PageSection';
import { useSpring, config, animated } from 'react-spring';
import { CustomSpring, Curtain, AniLoadingWrapper } from 'components/Spring/';

const TextItem = ({rowHeight, item, width, height, widthCat, isWideScreen, 
  gridItem, portfolioId, selPortfolioName, changeLayoutHeight
}) => {
  const itemRef = useRef();
  const layoutUsed = isWideScreen ? "layout" : "smLayout";
  const [topScrolled, setTopScrolled] = useState(false);
  const [bottomScrolled, setBottomScrolled] = useState(false);

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

  const getFontConfig = useCallback(() => {
    const device = !!navigator.maxTouchPoints ? 'not-desktop' : 'desktop';
    const orientation = device === 'not-desktop' ? width < height ? 'landscape' : 'portrait' : 'portrait';
    
    switch(widthCat) {
      case 'xs':
      case 'normal':
      case 'sm': {
        return {
          fontSize: '1rem',
          lineHeight: '2rem',
        }
      }
      case 'md': 
      case 'lg': {
        return { 
          fontSize: '1.5rem',
          lineHeight: '3rem',
        }
      }
      case 'xl': {
        return {
          fontSize: '2rem',
          lineHeight: '4rem'
        }
      }
      default:
        return {
          fontSize: device === 'not-desktop' ? orientation === 'portrait' ? '2.5rem' : '1.5rem' : '1.5rem',
          lineHeight: device === 'not-desktop' ? orientation === 'portrait' ? '2.5rem' : '2.5rem' : '2.5rem',
        }
    }
  }, [widthCat])
  
  setTimeout(() => {
    const itemHeight = itemRef && itemRef.current && itemRef.current.scrollHeight;
    const { height } = itemRef && itemRef.current && itemRef.current.getBoundingClientRect();
    const convertedItemHeight = itemHeight / rowHeight;
    const finalConvertedItemHeight = toInteger(ceil(convertedItemHeight));
    if (finalConvertedItemHeight !== item[layoutUsed].h)
      changeLayoutHeight(selPortfolioName, item.itemId, finalConvertedItemHeight, isWideScreen);
  }, 100);

  return (
    <div ref={itemRef} style={{ position: 'relative', height: `${item.convertedHeightPx}px` }}>
      <CustomSpring
        startAni={topScrolled}
        from={{ height: '100%' }}
        to={{ height: '0%' }}
        config={{...config.slow}}
        delay={500}
        noLoader={true}
        renderAni={(aniProps) => (
          <Curtain style={{ ...aniProps ? { ...aniProps } : { height: '100%' }} } />
        )}
      />

      <PageSection  
        id={`portfolio-text-${item.itemId}`}
        color={item.color || colors.white}
        //bgColor={item.bgColor}
        sidePanelBorderColor={divider.light}
        widthCat={widthCat} isWideScreen={isWideScreen}
        height='100%'
      >
        <ContentWrapper isWideScreen={isWideScreen} widthCat={widthCat}>
          <ContentInnerWrapper isWideScreen={isWideScreen}>
            <div style={{ width: '100%' }}>
              <P 
                fontType="bold" header
                noMargin widthCat={widthCat}
                style={{color: item.color || colors.white, letterSpacing: '2px', ...getFontConfig(widthCat), noWrap: ''}}
              >
                {item.text}
              </P>
            </div>
          </ContentInnerWrapper>
        </ContentWrapper>
      </PageSection>
    </div>
  )
}

export default React.memo(TextItem);