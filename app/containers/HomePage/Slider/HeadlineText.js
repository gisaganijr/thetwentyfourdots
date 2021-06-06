import React from 'react';
import { colors } from 'variables'
import P from 'components/P';

const HeadlineText = ({widthCat, width, height, children, innerHeight, activeSlideIndex, isWideScreen}) => {

  return (
    <P 
      fontType="bold" header
      noMargin widthCat={widthCat} size="xl"
      style={{color: colors.white, ...activeSlideIndex === 1 && !isWideScreen && { fontSize: "1.8rem" }}}
      customLineHeight="3.5rem"
      >
      {children}
    </P> 
  )
}

export default React.memo(HeadlineText);
