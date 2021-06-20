import React, { useEffect, memo, useRef, } from 'react';
import styled from 'styled-components';
import { push } from 'connected-react-router'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import CustomToolbar from 'components/CustomToolbar';
import AppBar from './AppBar';
import { margin, smallMargin, colors, appBgColor, appBarMinHeight } from 'variables';
import { closeDrawer as _closeDrawer, toggleDrawer, toggleMainDrawer, setShowWelcome } from './actions';
import { useInjectReducer } from 'utils/injectReducer';
import Logo from 'components/Logo';
import { Welcome } from './Welcome';
import { makeSelectLocation } from 'containers/App/selectors';
import { makeSelectShowFallback } from '../Fallback/selectors';
import { makeShowWelcome, makeShowPreloader, makeIsNavMainOpen, makeIsNavMobileOpen, makeMainMenuButtonColor, makeIsLogoColoured, makeScrollTop, makeAppBarBgColor, makeThemeColor } from './selectors';
import { createMuiTheme } from '@material-ui/core/styles';
import reducer from './reducer';
import { withProps, renameProp } from 'recompose';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen as _isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import ContactMenu from 'components/ContactMenu/ContactMenu';
import ContactMenuWrapper from 'components/ContactMenu/ContactMenuWrapper';
import Copyright from 'components/Copyright';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import SidebarMenu from 'components/navigation-menu/SidebarMenu';
import MobileMenu from 'components/navigation-menu/MobileMenu';
import MenuIcon from 'components/MenuIcon';
import Preloader from 'components/Preloader';
const key = 'navigation';

const LetsTalkWrapper = styled.div`
  position: fixed;
  top: ${margin.page.top}; 
  right: ${margin.page.right};
  z-index: 99999;
`

const CopyrightWrapper = styled.div`
  position: fixed;
  bottom: ${margin.page.bottom}; 
  left: 12px;
  z-index: 99999;
  width: 40px;
  height: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const StyledLink = styled.a`
  &:hover {
    cursor: pointer;
  }
`;


const MainNavigation = ({showWelcome, showPreloader, showFallback, isLogoColoured, mainMenuButtonColor, location, push }) => {
  if (showWelcome || showPreloader || showFallback)
    return null;

  return (
    <>
      <StyledLink onClick={() => push('/')}>
        <Logo width="10%" isColoured={isLogoColoured} style={{ position: 'fixed', top: margin.page.top, left: margin.page.left, zIndex: '999'}}/>
      </StyledLink>
      
      <LetsTalkWrapper>
        <CustomOutlinedButton 
          disabled={location && location.pathname !== '/contact-us' ? false : true}
          color={isLogoColoured ? colors.veryDarkGray : colors.white} bold={true}
          onClick={() => push('/contact-us')}
        >
          Let's Talk
        </CustomOutlinedButton>
      </LetsTalkWrapper>

      { !showWelcome && !showPreloader && !showFallback && 
        <ContactMenuWrapper>
          <ContactMenu marginRight={true} />
        </ContactMenuWrapper> 
      }
      
      { !showWelcome && !showPreloader && !showFallback && 
        <CopyrightWrapper>
          <Copyright size="xs" style={{ color: colors.white}} />
        </CopyrightWrapper>
      }
    </>
  
  )
}

export function Navigation({
  isNavMobileOpen,
  isNavMainOpen,
  closeDrawer,
  themeColor,
  push,
  width,
  height,
  widthCat,
  toggleMainDrawer,
  mainMenuButtonColor,
  isLogoColoured,
  showWelcome = false,
  showPreloader = false,
  showFallback = false,
  closeWelcomePage,
  scrollTop,
  appBarBgColor,
  location, 
}) {
  useInjectReducer({ key, reducer });
  const menuIconRef = useRef();
  const isWideScreen = _isWideScreen(widthCat);

  function hideMenuIcon() {
    if (showWelcome || showPreloader || showFallback) 
      return true;

    if (!isWideScreen)
      return true;

    return isNavMainOpen
  }

  function hideMobileMenuIcon() {
    if (showWelcome || showPreloader || showFallback) 
      return true;

    return isNavMobileOpen;
  }
  
  return (
      <React.Fragment>
        <Welcome isOpen={showWelcome} onClose={closeWelcomePage} />
        <Preloader isOpen={showPreloader} />
        
        { isWideScreen 
          ? 
            <>
              <MenuIcon isWideScreen={isWideScreen} ref={menuIconRef} onClick={toggleMainDrawer} hide={hideMenuIcon()} color={mainMenuButtonColor} />
              <MainNavigation 
                showWelcome={showWelcome} showPreloader={showPreloader} showFallback={showFallback} 
                isLogoColoured={isLogoColoured} mainMenuButtonColor={mainMenuButtonColor} 
                location={location}
                push={push} 
              />
              <SidebarMenu open={isNavMainOpen} onClose={closeDrawer} width={width * .50} location={location} push={push}/>
            </>
          : 
            <>
              <div>
                <AppBar 
                  color="default" 
                  position="fixed" 
                  elevation={0}
                >
                  <CustomToolbar bgColor={appBarBgColor}>
                    <StyledLink onClick={() => push('/')}>
                      <Logo width="100px" isWideScreen={false} isColoured={isLogoColoured} />
                    </StyledLink>
                    <MenuIcon isWideScreen={isWideScreen} ref={menuIconRef} hide={hideMobileMenuIcon()} onClick={toggleMainDrawer} color={mainMenuButtonColor} />
                  </CustomToolbar>
                </AppBar>
              </div>
              <MobileMenu style={{background: themeColor}} fullScreen open={isNavMobileOpen} onClose={closeDrawer} location={location} push={push}/>
            </>
          }
      </React.Fragment>
  );
}

const getMuiTheme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperFullScreen: {
        backgroundColor: appBgColor,
      }
    },
  }
});

Navigation.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  showWelcome: makeShowWelcome(),
  showPreloader: makeShowPreloader(),
  showFallback: makeSelectShowFallback(),
  isNavMainOpen: makeIsNavMainOpen(),
  isNavMobileOpen: makeIsNavMobileOpen(),
  mainMenuButtonColor: makeMainMenuButtonColor(),
  isLogoColoured: makeIsLogoColoured(),
  scrollTop: makeScrollTop(),
  appBarBgColor: makeAppBarBgColor(),
  location: makeSelectLocation(),
  themeColor: makeThemeColor(),
});

export function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
    toggleMainDrawer: () => dispatch(toggleMainDrawer()),
    closeDrawer: () => dispatch(_closeDrawer()),
    closeWelcomePage: () => dispatch(setShowWelcome(false)),
    push: (path) => dispatch(push(path)),
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
)(Navigation);
