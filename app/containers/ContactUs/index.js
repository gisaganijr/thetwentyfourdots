import React, { memo, useRef, useEffect, useState, useLayoutEffect, useMemo } from 'react';
import styled from 'styled-components';
import { margin, smallMargin, appBgColor, colors, divider, customLoadingIndicatorMinDelay } from 'variables';
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
import { getNavigationColor } from 'helpers';
import ContentWrapper from 'components/ContentWrapper';
import ContentInnerWrapper from 'components/ContentInnerWrapper';
import Headline from './Headline';
import Form from './Form';
import SidePanel from 'components/SidePanel';
import _ from "lodash"

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

const MainContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  ${props => props.height !== undefined && {
    "height": `${props.height}px`,
    "min-height": `${props.height}px`,
    "max-height": `${props.height}px`
  }};
`

function ContactUs({
  width, height, widthCat, 
  setMenuButtonColor, setIsLogoColoured, setScrollTop, setAppBarBgColor, 
  mainMenuButtonColor, isLogoColoured, showWelcome, appBarBgColor, showFallback, hideFallback
}) {
  const _isWideScreen = isWideScreen(widthCat);
  const [scrollTop, setLocalScrollTop] = useState(0);
  const headlineRef = useRef();
  const formRef = useRef();
  const footerRef = useRef();

  const sectionRefs = [
    {ref: headlineRef, divId: "headline", menuColor: colors.veryDarkGray, isLogoColoured: true, appBarBgColor: appBgColor},
    {ref: formRef, divId: "form", menuColor: colors.veryDarkGray, isLogoColoured: true, appBarBgColor: appBgColor}, 
    {ref: footerRef, divId: "footer", menuColor: colors.white, isLogoColoured: true, appBarBgColor: colors.veryDarkGray},
  ]

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (showFallback) {
      hideFallback();
      //setTimeout(() => hideFallback(), 500);
    }
      
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
    <MainWrapper >
      <MainContentWrapper {...scrollTop === 0 && _isWideScreen && {height: height}}>
        <SidePanel 
          height="auto" 
          borderColor={divider.dark}
          hide={_isWideScreen ? false:  true} 
        />
        <ContentWrapper isWideScreen={_isWideScreen} widthCat={widthCat} justifyContent="center">
          <div>
            <ContentInnerWrapper 
              isWideScreen={_isWideScreen} 
              flexDirection={_isWideScreen ? 'row' : 'column'}
              alignItems="flex-start"
            >
              { useMemo(() => (
                <Headline ref={headlineRef} isWideScreen={_isWideScreen} widthCat={widthCat} showFallback={showFallback}/>
              ), [_isWideScreen, widthCat, showFallback])}
              <Form ref={formRef} isWideScreen={_isWideScreen} widthCat={widthCat}/>
            </ContentInnerWrapper>
          </div>
        </ContentWrapper>
      </MainContentWrapper>
      <Footer width={width} isWideScreen={_isWideScreen} ref={footerRef} widthCat={widthCat}/>
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
)(ContactUs);

