import React from 'react';
import styled from 'styled-components'
import { getFontFamily, getFontSize, getLineHeight, getHeaderTextSize } from 'helpers';

const CustomH1 = styled.h1`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  ${props => props.noMargin && {margin: '0px'}};
`

const CustomH2 = styled.h2`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  ${props => props.noMargin && {margin: '0px'}};
`

const CustomH3 = styled.h3`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  ${props => props.noMargin && {margin: '0px'}};
`

const H1 = ({
  header = false, 
  fontType = 'light', 
  children, 
  style, 
  noMargin, 
  widthCat = 'sm', 
  size = 'sm', 
  fontSize,
  smallest,
  customLineHeight,
  fontSizeLineHeight = false
}) => {

  return (
    <CustomH1 
      noMargin={noMargin} 
      style={style} 
      fontFamily={getFontFamily(fontType)} 
    >
      {children}
    </CustomH1>
  )
}

const H2 = ({
  header = false, 
  fontType = 'light', 
  children, 
  style, 
  noMargin, 
  widthCat = 'sm', 
  size = 'sm', 
  fontSize,
  smallest,
  customLineHeight,
  fontSizeLineHeight = false
}) => {

  return (
    <CustomH2 
      noMargin={noMargin} 
      style={style} 
      fontFamily={getFontFamily(fontType)} 
    >
      {children}
    </CustomH2>
  )
}

const H3 = ({
  header = false, 
  fontType = 'light', 
  children, 
  style, 
  noMargin, 
  widthCat = 'sm', 
  size = 'sm', 
  fontSize,
  smallest,
  customLineHeight,
  fontSizeLineHeight = false
}) => {

  return (
    <CustomH3 
      noMargin={noMargin} 
      style={style} 
      fontFamily={getFontFamily(fontType)} 
    >
      {children}
    </CustomH3>
  )
}

export { H1, H2, H3 };