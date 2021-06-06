import React, { useEffect, memo, useState } from 'react';
import { compose } from 'redux';
import { Dialog} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import withWidth from '@material-ui/core/withWidth';
import { Welcome as WelcomeComp} from 'components/Welcome';
import DialogWrapper from 'components/welcome/DialogWrapper';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={{enter: 0, exit: 300}}/>;
});

export function Welcome({
  width,
  height,
  open,
  delay,
  isOpen = false,
  onClose
}) {

  return (
    <React.Fragment>
      <Dialog fullScreen open={isOpen} TransitionComponent={Transition}>
        <DialogWrapper>
          <WelcomeComp delay={delay} width={width} height={height} onClose={onClose} />
        </DialogWrapper>
      </Dialog>
    </React.Fragment>
  );
}

export default compose(
  memo,
  withWidth()
)(Welcome);
