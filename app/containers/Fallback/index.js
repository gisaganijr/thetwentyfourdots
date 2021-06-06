import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import { showFallback, hideFallback } from './actions';
const key = 'fallback';
import { default as CustomLoadingIndicatorComponent } from 'components/CustomLoadingIndicator';

function CustomLoadingIndicator({ showFallback, hideFallback }) {
  useInjectReducer({ key, reducer });

  useState(() => {
    showFallback();
    return () => {
      hideFallback();
    };
  }, [])
  
  return (
    <CustomLoadingIndicatorComponent hideFallback={hideFallback} />
  );
  
}

export function mapDispatchToProps(dispatch) {
  return {
    showFallback: () => dispatch(showFallback()),
    hideFallback: () => dispatch(hideFallback()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(CustomLoadingIndicator);

