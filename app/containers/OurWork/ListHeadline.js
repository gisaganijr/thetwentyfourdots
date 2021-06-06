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
          <div style={{ width: '100%' }}>
              <P 
                size="lg"
                header
                widthCat={widthCat}
                fontType="bold"
                noMargin={true} 
                style={{ color: colors.veryDarkGray }}
              >
                A <span style={{color: colors.turquoise}}>collection</span> of our creativity
              </P>
              <P noMargin title size="sm">
                Architectural visualisation, Branding, 3D and graphic design, Environment and many more.
              </P>
          </div>
        </ContentInnerWrapper>
      </ContentWrapper>
    </PageSection>
  )
})

export default Headline;