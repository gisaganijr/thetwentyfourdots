import React, { memo, useRef, useEffect, useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import Footer from 'components/Footer';
import { appBgColor, colors, customLoadingIndicatorMinDelay } from 'variables';
import { withProps, renameProp } from 'recompose';
import { compose } from 'redux';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import { changeLayoutHeight, updateWorks, setTouchedWork, loadedImage, returnToDefault } from './actions';
import reducer from './reducer';
import Headline from './Headline';
import { makeSelectWorksLayout, makeSelectWorks, makeSelectTouchedWork } from './selectors';
import { hideFallback } from 'containers/Fallback/actions';
import { setMenuButtonColor, setIsLogoColoured, setScrollTop, setAppBarBgColor, setShowPreloader } from 'containers/Navigation/actions';
import { makeShowWelcome, makeMainMenuButtonColor, makeIsLogoColoured, makeAppBarBgColor, makeShowPreloader } from 'containers/Navigation/selectors';
import { makeSelectShowFallback } from 'containers/Fallback/selectors';
import { getNavigationColor } from 'helpers';
import ListHeadline from './ListHeadline';
import ListItems from './ListItems';
import ContactUs from './ContactUs';
import { toInteger, filter } from "lodash"

const MainPageWrapper = styled.div`
  ${props => props.height !== undefined && {
    "height": `${props.height}px`,
    "min-height": `${props.height}px`,
    "max-height": `${props.height}px`
  }};
  flex-direction: column;
  min-width: 100%;
  max-width: 100%;
`
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 100%;
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 100%;
  max-width: 100%;
`

const key = 'ourWork';

function OurWork({
  width, height, widthCat, setMenuButtonColor, setIsLogoColoured, setScrollTop, setAppBarBgColor, 
  mainMenuButtonColor, isLogoColoured, showWelcome, appBarBgColor,
  push, works, touchedWork, match, changeLayoutHeight, updateWorks, setTouchedWork, 
  loadedImage, returnToDefault, layout, setShowPreloader, showFallback, hideFallback
}) {
  useInjectReducer({ key, reducer });
  
  const _isWideScreen = isWideScreen(widthCat);
  const headlineRef = useRef();
  const listHeadlineRef = useRef();
  const listRef = useRef();
  const contactUsRef = useRef();
  const footerRef = useRef();
  const [scrollTop, setLocalScrollTop] = useState(0);
  const sectionRefs = [
    {ref: headlineRef, divId: "headline", menuColor: colors.white, isLogoColoured: false, appBarBgColor: "transparent"},
    {ref: listHeadlineRef, divId: "list-headline", menuColor: colors.veryDarkGray, isLogoColoured: true, appBarBgColor: appBgColor},
    {ref: listRef, divId: "list", menuColor: colors.white, isLogoColoured: false, appBarBgColor: "transparent"},
    {ref: contactUsRef, divId: "contact-us", menuColor: colors.white, isLogoColoured: false, appBarBgColor: colors.darkCyan},
    {ref: footerRef, divId: "footer", menuColor: colors.white, isLogoColoured: true, appBarBgColor: colors.veryDarkGray},
  ]

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (showFallback) 
      setTimeout(() => hideFallback(), 200);
      
    return () => {
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
  }

  if (showWelcome || showFallback) 
    return null;

  return (
    <MainWrapper>
      <ContentWrapper>
        <MainPageWrapper {...scrollTop === 0 && {height: height}}>
          <Headline ref={headlineRef} height={height} width={width} widthCat={widthCat} isWideScreen={_isWideScreen} showFallback={showFallback}/>
          <ListHeadline ref={listHeadlineRef} width={width} widthCat={widthCat} isWideScreen={_isWideScreen} />
          <ListItems 
            ref={listRef} works={works} 
            width={width} height={height} widthCat={widthCat} isWideScreen={_isWideScreen} 
            changeLayoutHeight={changeLayoutHeight} updateWorks={updateWorks} push={push}
            touchedWork={touchedWork} setTouchedWork={setTouchedWork} layout={layout} loadedImage={loadedImage}
          />
          <ContactUs ref={contactUsRef} width={width} widthCat={widthCat} isWideScreen={_isWideScreen} push={push} />
        </MainPageWrapper>
      </ContentWrapper>
      <Footer ref={footerRef} width={width} isWideScreen={_isWideScreen} widthCat={widthCat} />
    </MainWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  works: makeSelectWorks(),
  layout: makeSelectWorksLayout(),
  touchedWork: makeSelectTouchedWork(),
  showWelcome: makeShowWelcome(),
  mainMenuButtonColor: makeMainMenuButtonColor(),
  isLogoColoured: makeIsLogoColoured(),
  appBarBgColor: makeAppBarBgColor(),
  showPreloader: makeShowPreloader(),
  showFallback: makeSelectShowFallback(),
});

export function mapDispatchToProps(dispatch) {
  return {
    changeLayoutHeight: (itemId, height, isWideScreen) => dispatch(changeLayoutHeight(itemId, height, isWideScreen)),
    updateWorks: (updatedWorks, isWideScreen) => dispatch(updateWorks(updatedWorks, isWideScreen)),
    setTouchedWork: (itemId) => dispatch(setTouchedWork(itemId)),
    loadedImage: (itemId) => dispatch(loadedImage(itemId)),
    returnToDefault: () => dispatch(returnToDefault()),
    setMenuButtonColor: (color) => dispatch(setMenuButtonColor(color)),
    setIsLogoColoured: (value) => dispatch(setIsLogoColoured(value)),
    setScrollTop: (value) => dispatch(setScrollTop(value)),
    setAppBarBgColor: (value) => dispatch(setAppBarBgColor(value)),
    push: (path) => dispatch(push(path)),
    setShowPreloader: (value) => dispatch(setShowPreloader(value)),
    hideFallback: () => dispatch(hideFallback()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  memo,
  withConnect,
  compose(withWidth(), renameProp('width', 'widthCat'),),
  windowDimensions()
)(OurWork);


