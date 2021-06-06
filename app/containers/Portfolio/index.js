import React, { memo, useRef, useEffect, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Footer from 'components/Footer';
import { appBgColor, colors } from 'variables';
import { withProps, renameProp } from 'recompose';
import { find } from 'lodash';
import { push } from 'connected-react-router';
import { compose } from 'redux';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import Headline from './Headline';
import ListItems from './ListItems';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { changeLayoutHeight, updateGridItems, loadedImage, returnToDefault } from './actions';
import reducer from './reducer';
import { makeSelectLayout, makeSelectPortfolios } from './selectors';
import { makeSelectShowFallback } from 'containers/Fallback/selectors';
import { setMenuButtonColor, setIsLogoColoured, setScrollTop, setAppBarBgColor, setShowPreloader } from 'containers/Navigation/actions';
import { makeShowPreloader, makeMainMenuButtonColor, makeIsLogoColoured, makeAppBarBgColor } from 'containers/Navigation/selectors';
import { getNavigationColor } from 'helpers';
import { hideFallback } from 'containers/Fallback/actions';
const key = 'portfolio';

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

function Portfolio(props) {
  useInjectReducer({ key, reducer });
  const {
    width, height, widthCat, setMenuButtonColor, setIsLogoColoured, setScrollTop, 
    setAppBarBgColor, setShowPreloader, hideFallback, showFallback,
    mainMenuButtonColor, isLogoColoured, showPreloader, appBarBgColor, push, match, 
    changeLayoutHeight, updateGridItems, loadedImage, returnToDefault,
    portfolios, layout
  } = props;
  
  const { name: portfolioName} = match.params;
  const portfolio = portfolios[portfolioName];

  if (!portfolio) {
    push('/');
    return null;
  }
  
  const _isWideScreen = isWideScreen(widthCat);
  const headlineRef = useRef();
  const listRef = useRef();
  const footerRef = useRef();
  const [scrollTop, setLocalScrollTop] = useState(0);
  const sectionRefs = [
    {ref: headlineRef, divId: "headline", menuColor: colors.veryDarkGray, isLogoColoured: true, appBarBgColor: appBgColor},
    {ref: listRef, divId: "list", menuColor: colors.white, isLogoColoured: false, appBarBgColor: "transparent"},
    {ref: footerRef, divId: "footer", menuColor: colors.white, isLogoColoured: true, appBarBgColor: colors.veryDarkGray},
  ]

  useEffect(() => {
    if (showFallback) hideFallback();
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (showFallback) hideFallback();
    return () => {
      returnToDefault();
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

  return (
    <MainWrapper>
      <ContentWrapper>
        <MainPageWrapper>
          <Headline ref={headlineRef} portfolio={portfolio} width={width} widthCat={widthCat} isWideScreen={_isWideScreen}/>
          <ListItems 
            ref={listRef} portfolio={portfolio} selPortfolioName={portfolioName} portfolios={portfolios} 
            width={width} height={height} widthCat={widthCat} isWideScreen={_isWideScreen} 
            changeLayoutHeight={changeLayoutHeight}
            updateGridItems={updateGridItems}
            loadedImage={loadedImage} layout={layout} 
            showPreloader={showPreloader}
          />
        </MainPageWrapper>
      </ContentWrapper>
      {!showPreloader && <Footer ref={footerRef} width={width} isWideScreen={_isWideScreen} widthCat={widthCat} />}
    </MainWrapper>
  );height={height}
  
}

const mapStateToProps = createStructuredSelector({
    portfolios: makeSelectPortfolios(),
    layout: makeSelectLayout(),
    showPreloader: makeShowPreloader(),
    showFallback: makeSelectShowFallback(),
    mainMenuButtonColor: makeMainMenuButtonColor(),
    isLogoColoured: makeIsLogoColoured(),
    appBarBgColor: makeAppBarBgColor()
  }
);


export function mapDispatchToProps(dispatch) {
  return {
    changeLayoutHeight: (portfolioName, itemId, height, isWideScreen) => dispatch(changeLayoutHeight(portfolioName, itemId, height, isWideScreen)),
    updateGridItems: (portfolioName, gridItems, isWideScreen) => dispatch(updateGridItems(portfolioName, gridItems, isWideScreen)),
    loadedImage: (portfolioId, itemId, height) => dispatch(loadedImage(portfolioId, itemId, height)),
    returnToDefault: () => dispatch(returnToDefault()),
    setMenuButtonColor: (color) => dispatch(setMenuButtonColor(color)),
    setIsLogoColoured: (value) => dispatch(setIsLogoColoured(value)),
    setScrollTop: (value) => dispatch(setScrollTop(value)),
    setAppBarBgColor: (value) => dispatch(setAppBarBgColor(value)),
    setShowPreloader: (value) => dispatch(setShowPreloader(value)),
    hideFallback: () => dispatch(hideFallback()),
    push: (path) => dispatch(push(path)),
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
)(Portfolio);

