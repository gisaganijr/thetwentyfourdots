import React, { forwardRef } from 'react';
import Header from './header';
import List from './list';

const Portfolio = forwardRef(({width, widthCat, isWideScreen, push}, ref) => {

  return (
    <>
      <Header widthCat={widthCat} isWideScreen={isWideScreen} />
      <List widthCat={widthCat} isWideScreen={isWideScreen} push={push} />
    </>
  )
})

export default Portfolio;