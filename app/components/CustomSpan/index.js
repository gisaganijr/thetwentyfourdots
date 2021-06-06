import React from 'react';
import styled from 'styled-components'
import { getFontFamily, getFontSize, getLineHeight } from 'helpers';

const CustomSpan = styled.span`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
`

const P = ({fontType = 'light', children, style, noMargin, size = 'sm'}) => {

  return (
    <CustomSpan 
      noMargin={noMargin} 
      style={style} 
      fontFamily={getFontFamily(fontType)} 
    >
      {children}
    </CustomSpan>
  )
}

export default P;