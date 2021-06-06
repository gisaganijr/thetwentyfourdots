import React, { useEffect, useState } from 'react';
import {useTransition, useSpring, animated, config } from 'react-spring'

const Fade = ({children}) => {

  const fadeStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });

  return (
    <animated.div style={fadeStyles}>{children}</animated.div>
  )
}

export default Fade;