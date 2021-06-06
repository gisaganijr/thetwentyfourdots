import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { colors, divider, appBarMinHeight } from 'variables';
import ContentWrapper from 'components/ContentWrapper';
import ContentInnerWrapper from 'components/ContentInnerWrapper';
import PointerTitle from 'components/PointerTitle';
import PageSection from 'components/PageSection';
import P from 'components/P';
import { getHeaderTextSize } from 'helpers';

const Headline = forwardRef(({width, widthCat, isWideScreen, isLogoColoured, portfolio}, ref) => {

  return (
    <PageSection 
      ref={ref} id='headline'
      sidePanelBorderColor={divider.dark}
      widthCat={widthCat} isWideScreen={isWideScreen}
      height='100%'
    >
      <ContentWrapper isWideScreen={isWideScreen} widthCat={widthCat}>
        <ContentInnerWrapper isWideScreen={isWideScreen}>
          <div style={{ width: '100%', paddingTop: `${appBarMinHeight + 2}px` }}>
            <PointerTitle title="Portfolio" color={colors.veryDarkGray} isWideScreen={isWideScreen}/>
            <P size="lg"
              widthCat={widthCat}
              fontType="bold" header
              noMargin={true} 
              style={{ color: colors.veryDarkGray, marginBottom: "1rem" }}
            >
              {portfolio.title}
            </P>
            <P noMargin title size="sm">{portfolio.desc}</P>
          </div>
        </ContentInnerWrapper>
      </ContentWrapper>
    </PageSection>
  )
})

export default Headline;