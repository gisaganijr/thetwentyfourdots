import React, { useEffect, memo, useState, useRef, forwardRef, useImperativeHandle, useLayoutEffect  } from 'react';
import { compose } from 'redux';
import { Dialog} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import withWidth from '@material-ui/core/withWidth';
import { Welcome as WelcomeComp} from 'components/Welcome';
import DialogWrapper from './DialogWrapper';
import AnimatedLoader from './AnimatedLoader';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={{enter: 0, exit: 300}}/>;
});

const Preloader = forwardRef((props, ref) => {
  const {
    width,
    height,
    delay,
    isOpen = false,
    onClose
  } = props;
  const timer = useRef(null);
  const isOpenRef = useRef(false);
  const [localOpen, setLocalOpen] = useState(false);
  
  useState(() => {
    timer.current = setInterval(() => {});
    return () => {
      setTimeout(() => {
        setLocalOpen(false)
        clearInterval(timer.current);
      }, 1500 - timer.current);
    };
  }, [])

  useEffect(() => {
    isOpenRef.current = isOpen;
    if (isOpen === false) {
      setTimeout(() => {
        if (isOpenRef.current === true)
          return;
          
        setLocalOpen(false);
        isOpenRef.current = false;
      }, 1500 - timer.current);
    } else {
      clearInterval(timer.current);
      setLocalOpen(true);
      isOpenRef.current = true;
    }
  }, [isOpen])

  return (
    <div>
      <Dialog fullScreen open={localOpen} TransitionComponent={Transition}>
        <DialogWrapper>
          <AnimatedLoader open={localOpen} />
        </DialogWrapper>
      </Dialog>
    </div>
  );
})

export default compose(
  memo,
  withWidth()
)(Preloader);
