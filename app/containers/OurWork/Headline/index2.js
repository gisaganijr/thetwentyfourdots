import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors, divider, outlinedButton } from 'variables';
import ContentWrapper from 'components/ContentWrapper';
import ContentInnerWrapper from 'components/ContentInnerWrapper';
import Headline from 'components/Headline';
import PageSection from 'components/PageSection';
import P from 'components/P';
import { getHeaderTextSize } from 'helpers';

const _Headline = forwardRef(({width, widthCat, isWideScreen, isLogoColoured, showFallback}, ref) => {
  if (showFallback) 
    return null;

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
              pointerTitle="Our work"
              pointerColor={colors.veryDarkGray}
              author="Vincet Van Goh"
              headerText={
                <P 
                  size="lg"
                  widthCat={widthCat}
                  fontType="bold" header
                  noMargin={true} 
                  style={{ color: colors.veryDarkGray }}
                >
                  <span style={{color: colors.turquoise}}>Great</span>&nbsp;
                  <span>things are done by series of small things brought together.</span>
                </P>
              }
              longText="The characters of our capabilites, environment design, digital campaign, architecture and 3D assets."
              buttonText="Learn more"
              button={outlinedButton.dark}
              isWideScreen={isWideScreen}
              showFallback={showFallback}
            />
          </div>
        </ContentInnerWrapper>
      </ContentWrapper>
    </PageSection>
  )
})

export default _Headline;