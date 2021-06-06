import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors, divider, outlinedButton } from 'variables';
import ContentWrapper from 'components/ContentWrapper';
import ContentInnerWrapper from 'components/ContentInnerWrapper';
import Headline from 'components/Headline';
import PageSection from 'components/PageSection';
import P from 'components/P';
import { getHeaderTextSize } from 'helpers';

const _MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`
const MainWrapper = forwardRef((props, ref) => {
  return (<_MainWrapper {...props} ref={ref}>{props.children}</_MainWrapper>)
})

const _Headline = forwardRef(({width, widthCat, isWideScreen, isLogoColoured, scrollTop}, ref) => {
  return (
    <PageSection 
      ref={ref} id='headline'
      sidePanelBorderColor={divider.dark}
      widthCat={widthCat} isWideScreen={isWideScreen}
      height='100%'
    >
      <ContentWrapper isWideScreen={isWideScreen} widthCat={widthCat}>
        <ContentInnerWrapper isWideScreen={isWideScreen}>
          <div style={{maxWidth: isWideScreen ? '50%' : '100%'}}>
            <Headline 
              pointerTitle="About us"
              pointerColor={colors.veryDarkGray}
              author="Pablo Picasso"
              headerText={
                <P 
                  size="lg"
                  widthCat={widthCat}
                  fontType="bold" header
                  noMargin={true} 
                  style={{ color: colors.veryDarkGray }}
                >
                  <span style={{color: colors.red}}>Conquer</span>&nbsp;
                  <span style={{color: colors.veryDarkGray}}>your inner voice</span>
                </P>
              }
              longText="We connect ideas at heart, we approach every brand with clear understanding of the business problem. 
                We provide solution and what return of investment is needed for campaign to be a success. 
                Our strategy is determined by problem we are facing. 
                We are adaptable which lead us to a magical journey that never ends.
              "
              buttonText="Our capabilities"
              button={outlinedButton.dark}
              isWideScreen={isWideScreen}
            />
          </div>
        </ContentInnerWrapper>
      </ContentWrapper>
    </PageSection>
  )
})

export default _Headline;