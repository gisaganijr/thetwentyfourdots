import React, { useCallback, useLayoutEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { colors, divider, appBarMinHeight } from 'variables';
import P from 'components/P';
import { Grid } from '@material-ui/core';
import { toInteger, round, floor } from 'lodash';
import color from '@material-ui/core/colors/amber';

const Wrapper = styled.div`
  width: 100%;
  padding: 5% 15%;
`;

const TextItem = ({rowHeight, item, width, height, widthCat, isWideScreen, gridItem, changeLayoutHeight}) => {
  const itemRef = useRef();

  const getFontConfig = useCallback(() => {
    const device = !!navigator.maxTouchPoints ? 'not-desktop' : 'desktop';
    const orientation = device === 'not-desktop' ? width < height ? 'landscape' : 'portrait' : 'portrait';
    
    switch(widthCat) {
      case 'xs':
      case 'normal':
      case 'sm': {
        return {
          fontSize: '0.750rem',
          lineHeight: '1.2rem',
        }
      }
      case 'md': {
        return {
          fontSize: '2rem',
          lineHeight: '3rem',
        }
      }
      case 'lg':
      case 'xl': {
        return {
          fontSize: '2.5rem',
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

  useLayoutEffect(() => {
    const imgHeight = itemRef && itemRef.current && itemRef.current.clientHeight;
    const convertedImgHeight = imgHeight / rowHeight;
    const finalCconvertedImgHeight = toInteger(isWideScreen ? floor(convertedImgHeight) : ceil(convertedImgHeight));
    changeLayoutHeight(item.itemId, finalCconvertedImgHeight);
  }, [])

  return (
    <Wrapper ref={itemRef}>
      <P 
        fontType="bold" header
        noMargin widthCat={widthCat}
        style={{color: colors[item.color], letterSpacing: '2px', ...getFontConfig(widthCat), noWrap: ''}}
      >
        {item.text}
      </P>
    </Wrapper>
  )
}

export default React.memo(TextItem);