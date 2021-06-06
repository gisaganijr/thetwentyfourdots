import React from 'react';
import styled from 'styled-components'
import { getFontFamily } from 'helpers';

const CustomH2 = styled.h2`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  font-size: ${props => props.isWideScreen ? "2rem" : "1.5rem"};
`

const H2 = ({fontType = 'bold', children, style, isWideScreen = true}) => {

  return (
    <CustomH2 style={style} isWideScreen={isWideScreen} fontFamily={getFontFamily(fontType)}>{children}</CustomH2>
  )
}

export default H2;