import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import { contentMargin, colors, divider } from 'variables';
import PointerTitle from 'components/PointerTitle';
import ContentWrapper from 'components/ContentWrapper';
import PageSection from 'components/PageSection';

const Portfolio = forwardRef(({width, widthCat, isWideScreen}, ref) => {

  return (
    <PageSection 
      ref={ref} id='portfolio'
      sidePanelBorderColor={divider.dark}
      widthCat={widthCat} isWideScreen={isWideScreen}
    >
      <ContentWrapper 
        isWideScreen={isWideScreen} widthCat={widthCat}
      >
        <PointerTitle title="About us" color={colors.veryDarkGray} isWideScreen={isWideScreen} />
        <Headline marginBottom={contentMargin} widthCat={widthCat}/>
      </ContentWrapper>
    </PageSection>
  )
})

export default Portfolio;