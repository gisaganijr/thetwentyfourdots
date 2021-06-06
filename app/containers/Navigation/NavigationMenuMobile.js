import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router'
import { createStructuredSelector } from 'reselect';
import { toggleDrawer } from 'containers/Navigation/actions';
import { makeIsNavMobileOpen } from './selectors';
import {NavigationMenuMobile as NavigationMenuMobile_} from 'components/navigation-menu-mobile/NavigationMenuMobile';

const NavigationMenuMobile = (props) => {
  return (
    <NavigationMenuMobile_ {...props}/> 
  );
}

NavigationMenuMobile.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
    push: (path) => dispatch(push(path)),
  };
}


const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(NavigationMenuMobile);

