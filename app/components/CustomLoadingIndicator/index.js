import React, { useEffect, memo, useState, useRef } from 'react';
import { compose } from 'redux';
import { Dialog } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import DialogWrapper from './DialogWrapper';
import AnimatedLoader from './AnimatedLoader';

export function CustomLoadingIndicator(props) {
  return (
    <React.Fragment>
      <Dialog 
        fullScreen open={true} 
        transitionDuration={{
          exit: 1000,
        }}
      >
        <DialogWrapper>
          <AnimatedLoader open={true} />
        </DialogWrapper>
      </Dialog>
    </React.Fragment>
  );
}

export default compose(
  memo,
  withWidth()
)(CustomLoadingIndicator);
