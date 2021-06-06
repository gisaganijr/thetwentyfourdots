import React, {useLayoutEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';
import { muiOverrides } from 'global-mui-overrides';
import HomePage from 'containers/HomePage/Loadable';
import Portfolio from 'containers/Portfolio/Loadable';
import AboutUs from 'containers/AboutUs/Loadable';
import ContactUs from 'containers/ContactUs/Loadable';
import WhatWeDo from 'containers/WhatWeDo/Loadable';
import OurWork from 'containers/OurWork/Loadable';
import NavigationPage from 'containers/Navigation/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import withWidth from '@material-ui/core/withWidth';
import windowDimensions from 'react-window-dimensions';
import { withProps, renameProp } from 'recompose';
import { compose } from 'redux';
import GlobalStyle from '../../global-styles';

function App({width, height, widthCat}) {
  const [showWelcome, setShowWelcome] = useState(true);
  // setTimeout(() => {
  //   setShowWelcome(false);
  // }, 5000);

  function getConfig(widthCat) {
    switch(widthCat) {
      case 'xs': {
        return {
          'minFontSize': 14,
          'maxFontSize': 16,
          'minVw': 200,
          'maxVw': 600,
        }
      }
      case 'sm': {
        if (height > 1000)  {
          return {
            'minFontSize': 16,
            'maxFontSize': 30,
            'minVw': 600,
            'maxVw': 960,
          }
        }

        return {
          'minFontSize': 14,
          'maxFontSize': 16,
          'minVw': 600,
          'maxVw': 960,
        }
      }
      case 'md': {
        return {
          'minFontSize': 16,
          'maxFontSize': 30,
          'minVw': 960,
          'maxVw': 1280,
        }
      }
      case 'lg': {
        return {
          'minFontSize': 14,
          'maxFontSize': 32,
          'minVw': 1280,
          'maxVw': 1920,
        }
      }
      case 'xl': {
        return {
          'minFontSize': 16,
          'maxFontSize': 70,
          'minVw': 1920,
          'maxVw': 5000
        }
      }
      default: {
        return {
          'minFontSize': 12,
          'maxFontSize': 20,
        }
      }
    }
    
  }

  return (
      <MuiThemeProvider theme={getMuiTheme}>
        <NavigationPage />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/what-we-do" component={WhatWeDo} />
          <Route path="/our-work" component={OurWork} />
          <Route exact path="/portfolio/:name" component={Portfolio} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle widthCat={widthCat} {...getConfig(widthCat)}/>
      </MuiThemeProvider>
  );
}

const getMuiTheme = createMuiTheme({
  typography: {
    fontFamily: 'Gotham-Light',
    body1: {
      fontSize: '0.875rem'
    }
  },
  overrides: {
    ...muiOverrides
  }});

  
export default compose(
    compose(withWidth(), renameProp('width', 'widthCat'),),
    windowDimensions()
  )(App);
  
