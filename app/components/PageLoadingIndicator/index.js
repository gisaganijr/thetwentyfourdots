import React, { useEffect } from 'react';
import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { coverBgColor } from 'variables';
import LogoSquare from 'components/LogoSquare';
import Tagline from 'components/tagline/Tagline';

const WelcomeWrapper = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex!important;
  flex-direction: column;
  align-items: center!important;
  justify-content: center!important;
  background: ${coverBgColor};
`

export const PageLoadingIndicator = ({delay, width, height, widthCat, onClose}) => {

  // useEffect(() => {
  //   setTimeout(() => onClose(), 5000)
  // }, []);
  
  return ( 
    <WelcomeWrapper >
      <LogoSquare />
      <Tagline delay={3000}/>
    </WelcomeWrapper>
  )
}
