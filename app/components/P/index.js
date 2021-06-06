import React, { forwardRef } from 'react';
import styled from 'styled-components'
import { getFontFamily, getFontSize, getLineHeight, getHeaderTextSize } from 'helpers';

const CustomParagraph = styled.p`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  ${props => props.noMargin && {margin: '0px'}};
  ${props => props.fontSize && {"font-size": props.fontSize}};
  ${props => props.lineHeight && {"line-height": props.lineHeight}};
`

const P = forwardRef(({
  header = false, 
  fontType = 'light', 
  children, 
  style, 
  noMargin, 
  widthCat = 'sm', 
  size = 'sm', 
  smallest,
  customLineHeight,
  fontSizeLineHeight = false,
}, ref) => {

  const _fontSize = !header ? getFontSize(size, widthCat) : getHeaderTextSize(size, widthCat, smallest);

  return (
    <CustomParagraph 
      ref={ref}
      noMargin={noMargin} 
      fontSize={_fontSize} 
      style={style} 
      fontFamily={getFontFamily(fontType)} 
      lineHeight={customLineHeight || getLineHeight(widthCat)}
      {...fontSizeLineHeight && { lineHeight: _fontSize }}
    >
      {children}
    </CustomParagraph>
  )
})

export default P;