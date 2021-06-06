import React, { useEffect, useState, useRef, memo, useLayoutEffect } from 'react';
import { push } from 'connected-react-router'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { appBgColor, colors, smallMargin, margin } from 'variables';
import Slider from './Slider';
import { loadRepos } from '../App/actions';
import { changeSlide, loadedSlideImage, loadedPortfolioImage, resetPortfolios, returnToDefault } from './actions';
import { makeSelectSliders, makeSelectSliderIndex, makeSelectSelectedSlider, makeSelectPortfolios } from './selectors';
import { getNavigationColor } from 'helpers';
import reducer from './reducer';
import { renameProp } from 'recompose';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import { hideFallback } from 'containers/Fallback/actions';
import { setMenuButtonColor, setIsLogoColoured, setScrollTop, setAppBarBgColor, setShowPreloader } from 'containers/Navigation/actions';
import { makeMainMenuButtonColor, makeIsLogoColoured, makeAppBarBgColor } from 'containers/Navigation/selectors';
import PortfolioHeader from './Portfolio/header';
import PortfolioList from './Portfolio/list';
import Services from './Services'
import Footer from 'components/Footer';

const key = 'home2';

export function HomePage({
  sliders,
  activeSlideIndex,
  selectedSlider,
  username,
  loading,
  error,
  onSubmitForm,
  onChangeUsername,
  changeSlide,
  width,
  height,
  widthCat,
  push,
  portfolios,
  setShowPreloader, loadedPortfolioImage, loadedSlideImage, resetPortfolios,
  setMenuButtonColor, setIsLogoColoured, setScrollTop, setAppBarBgColor,
  mainMenuButtonColor, isLogoColoured, appBarBgColor, defaultHomepage, hideFallback,
}) {
  useInjectReducer({ key, reducer });
  const _isWideScreen = isWideScreen(widthCat);
  const [localScrollTop, setLocalScrollTop] = useState(0);
  const [device, setDevice] = useState(!!navigator.maxTouchPoints ? 'mobile' : 'desktop');
  const [orientation, setOrientation] = useState('portrait');
  const sliderRef = useRef();
  const portfolioHeader = useRef();
  const portfolioList = useRef();
  const servicesRef = useRef();
  const footerRef = useRef();
  const [sectionRefs, setSectionRefs] = useState([
    {
      ref: sliderRef, 
      divId: "slider", 
      menuColor: colors.white, 
      isLogoColoured: false, 
      appBarBgColor: "transparent"
    },
    {ref: portfolioHeader ,divId: "portfolioHeader", menuColor: colors.veryDarkGray, isLogoColoured: true, appBarBgColor: appBgColor},
    {ref: portfolioList ,divId: "portfolioList", menuColor: colors.white, isLogoColoured: false, appBarBgColor: "transparent"},
    {ref: servicesRef, divId: "services", menuColor: colors.white, isLogoColoured: false, appBarBgColor: colors.darkCyan},
    {ref: footerRef, divId: "footer", menuColor: colors.white, isLogoColoured: true, appBarBgColor: colors.veryDarkGray},
  ]);
  
  useEffect(() => {
    hideFallback();
    window.addEventListener('scroll', handleScroll);

    return () => {
      resetPortfolios();
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  useEffect(() => {
    if (_isWideScreen)
      return;

  }, [activeSlideIndex])

  useLayoutEffect(() => {
    updateMenuColor(localScrollTop);
  })

  useEffect(() => {
    updateMenuColor(localScrollTop);
  }, [height, localScrollTop, sectionRefs])

  function updateMenuColor(_scrollTop) {
    const { menuColor: _menuColor, isLogoColoured: _isLogoColoured, appBarBgColor: _appBarBgColor, logoBasedSectionRef } = getNavigationColor(sectionRefs, _isWideScreen, height, _scrollTop)
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

  function getDevice() {
    const _device = !!navigator.maxTouchPoints ? 'mobile' : 'desktop';
    setDevice(_device);
  }

  return (
    <React.Fragment>
      {
        <>
          <Slider 
            ref={sliderRef} width={width} height={height} widthCat={widthCat} selectedSlider={selectedSlider} 
            isWideScreen={_isWideScreen} isLogoColoured={isLogoColoured} localScrollTop={localScrollTop} 
            sliders={sliders} changeSlide={changeSlide} activeSlideIndex={activeSlideIndex}
            device={device} orientation={orientation}
            loadedSlideImage={loadedSlideImage}
          />
          <PortfolioHeader ref={portfolioHeader} width={width} widthCat={widthCat} isWideScreen={_isWideScreen} push={push} />
          <PortfolioList ref={portfolioList} portfolios={portfolios} width={width} widthCat={widthCat} isWideScreen={_isWideScreen} push={push} loadedImage={loadedPortfolioImage} />
          <Services ref={servicesRef} width={width} widthCat={widthCat} isWideScreen={_isWideScreen} />
          <Footer ref={footerRef} width={width} isWideScreen={_isWideScreen} widthCat={widthCat} />
        </>
      }
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  sliders: makeSelectSliders(),
  activeSlideIndex: makeSelectSliderIndex(),
  selectedSlider: makeSelectSelectedSlider(),
  portfolios: makeSelectPortfolios(),
  mainMenuButtonColor: makeMainMenuButtonColor(),
  appBarBgColor: makeAppBarBgColor(),
  isLogoColoured: makeIsLogoColoured()
});

export function mapDispatchToProps(dispatch) {
  return {
    changeSlide: changeType => dispatch(changeSlide(changeType)),
    push: (path) => dispatch(push(path)),
    setMenuButtonColor: (color) => dispatch(setMenuButtonColor(color)),
    setIsLogoColoured: (value) => dispatch(setIsLogoColoured(value)),
    setScrollTop: (value) => dispatch(setScrollTop(value)),
    setAppBarBgColor: (value) => dispatch(setAppBarBgColor(value)),
    defaultHomepage: () => dispatch(returnToDefault()),
    loadedSlideImage: (slideIndex) => dispatch(loadedSlideImage(slideIndex)),
    loadedPortfolioImage: (portfolioName) => dispatch(loadedPortfolioImage(portfolioName)),
    resetPortfolios: () => dispatch(resetPortfolios()),
    setShowPreloader: (value) => dispatch(setShowPreloader(value)),
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
  compose(withWidth(), renameProp('width', 'widthCat')),
  windowDimensions()
)(HomePage);

