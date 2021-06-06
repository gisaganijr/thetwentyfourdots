import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router'
import { createStructuredSelector } from 'reselect';
import { toggleDrawer } from 'containers/Navigation/actions';
import { makeIsNavMobileOpen } from './selectors';
import {NavigationMenu as NavigationMenu_} from 'components/navigation-menu/NavigationMenu';

const NavigationMenu = (props) => {
  return (
    <NavigationMenu_ {...props}/> 
  );
}

NavigationMenu.propTypes = {
  push: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
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
)(NavigationMenu);

