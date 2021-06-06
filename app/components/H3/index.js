import React from 'react';
import styled from 'styled-components'
import { getFontFamily } from 'helpers';

const CustomH3 = styled.h3`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  font-size: ${props => props.isWideScreen ? "1.5rem" : "1rem"};
`

const H3 = ({fontType = 'bold', children, style, isWideScreen = true}) => {

  return (
    <CustomH3 style={style} isWideScreen={isWideScreen} fontFamily={getFontFamily(fontType)}>{children}</CustomH3>
  )
}

export default H3