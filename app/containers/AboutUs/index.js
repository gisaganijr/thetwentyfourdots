import React, { memo, useRef, useEffect, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { margin, smallMargin, appBgColor, colors } from 'variables';
import Footer from 'components/Footer';
import { withProps, renameProp } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import { hideFallback } from 'containers/Fallback/actions';
import { setMenuButtonColor, setIsLogoColoured, setScrollTop, setAppBarBgColor } from 'containers/Navigation/actions';
import { makeShowWelcome, makeMainMenuButtonColor, makeIsLogoColoured, makeAppBarBgColor, makeShowPreloader } from 'containers/Navigation/selectors';
import { makeSelectShowFallback } from 'containers/Fallback/selectors';
import Headline from './Headline/';
import Moods from './Moods';
import CoreValues from './CoreValues';
import { getNavigationColor } from 'helpers';

const MainPageWrapper = styled.div`
  ${props => props.height !== undefined && {
    "height": `${props.height}px`,
    "min-height": `${props.height}px`,
    "max-height": `${props.height}px`
  }};
  flex-direction: column;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

function AboutUs({
  width, height, widthCat, setMenuButtonColor, setIsLogoColoured, setScrollTop, setAppBarBgColor, 
  mainMenuButtonColor, isLogoColoured, showWelcome, appBarBgColor, showFallback, hideFallback
}) {
  const _isWideScreen = isWideScreen(widthCat);
  const [scrollTop, setLocalScrollTop] = useState(0);
  const mainRef = useRef();
  const headlineRef = useRef();
  const moodRef = useRef();
  const coreValuesRef = useRef();
  const footerRef = useRef();
  const sectionRefs = [
    {ref: headlineRef, divId: "headline", menuColor: colors.veryDarkGray, isLogoColoured: true, appBarBgColor: 'transparent'},
    {ref: moodRef, divId: "moods", menuColor: colors.veryDarkGray, isLogoColoured: true, appBarBgColor: appBgColor},
    {ref: coreValuesRef, divId: "coreValues", menuColor: colors.white, isLogoColoured: false, appBarBgColor: colors.orange},
    {ref: footerRef, divId: "footer", menuColor: colors.white, isLogoColoured: true, appBarBgColor: colors.veryDarkGray},
  ]

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    hideFallback();
    () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useLayoutEffect(() => {
    updateMenuColor(scrollTop);
  })

  useEffect(() => {
    updateMenuColor(scrollTop);
  }, [height, scrollTop])

  function updateMenuColor(_scrollTop) {
    const { menuColor: _menuColor, isLogoColoured: _isLogoColoured, appBarBgColor: _appBarBgColor } = getNavigationColor(sectionRefs, _isWideScreen, height, _scrollTop)
    
    if (mainMenuButtonColor !== _menuColor)
      setMenuButtonColor(_menuColor);

    if (isLogoColoured !== _isLogoColoured)
      setIsLogoColoured(_isLogoColoured);

    if (appBarBgColor !== _appBarBgColor) 
      setAppBarBgColor(_appBarBgColor)
  }

  function handleScroll(e) {
    let _scrollTop = e.srcElement.scrollingElement.scrollTop;
    setLocalScrollTop(_scrollTop);

    if (!_isWideScreen) 
      setScrollTop(_scrollTop)
  }

  if (showWelcome) 
    return null;

  return (
    <MainWrapper ref={mainRef}>
      <ContentWrapper>
        <MainPageWrapper {...scrollTop === 0 && {height: height}}>
          <Headline ref={headlineRef} width={width} height={height} widthCat={widthCat} isWideScreen={_isWideScreen} isLogoColoured={isLogoColoured} scrollTop={scrollTop} showFallback={showFallback}/>
        </MainPageWrapper>
        <Moods width={width} widthCat={widthCat} isWideScreen={_isWideScreen} ref={moodRef} />
        <CoreValues width={width} widthCat={widthCat} isWideScreen={_isWideScreen} ref={coreValuesRef} />
      </ContentWrapper>
      <Footer width={width} isWideScreen={_isWideScreen} widthCat={widthCat} ref={footerRef}/>
    </MainWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  showWelcome: makeShowWelcome(),
  mainMenuButtonColor: makeMainMenuButtonColor(),
  isLogoColoured: makeIsLogoColoured(),
  appBarBgColor: makeAppBarBgColor(),
  showPreloader: makeShowPreloader(),
  showFallback: makeSelectShowFallback(),
});

export function mapDispatchToProps(dispatch) {
  return {
    setMenuButtonColor: (color) => dispatch(setMenuButtonColor(color)),
    setIsLogoColoured: (value) => dispatch(setIsLogoColoured(value)),
    setScrollTop: (value) => dispatch(setScrollTop(value)),
    setAppBarBgColor: (value) => dispatch(setAppBarBgColor(value)),
    hideFallback: () => dispatch(hideFallback()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  compose(withWidth(), renameProp('width', 'widthCat'),),
  windowDimensions()
)(AboutUs);

