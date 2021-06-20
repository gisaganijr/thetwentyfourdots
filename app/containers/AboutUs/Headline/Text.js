import React, { useState, useEffect, memo, forwardRef } from 'react';
import styled from 'styled-components';
import { colors, outlinedButton } from 'variables'
import P from 'components/P';
import { getContentType } from 'helpers';
import Headline from 'components/Headline';
import _ from "lodash"

const TextWrapper = styled.div`
  display: flex;
  padding-top: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const Text = forwardRef(({
  height, width, widthCat, isWideScreen, contentType, startAni
}, ref) => {

  const getHeaderText = () => {
    return (
      <P 
        size="xl"
        widthCat={contentType === 'desktop' ? widthCat : 'lg'}
        fontType="bold" header
        noMargin={true} 
        customLineHeight="3.5rem"
        style={{ color: colors.veryDarkGray, whiteSpace: 'nowrap' }}
      >
        <span style={{color: colors.red}}>Conquer</span>&nbsp;
        <span style={{color: colors.veryDarkGray}}>your</span><br />
        <span style={{color: colors.veryDarkGray}}>critical inner voice</span>
      </P>
    );
  }

  if (!contentType) return null;

  return (
    <>
      <TextWrapper 
        contentType={contentType}
      >
        {contentType === 'desktop' ? (
          <Headline 
            pointerTitle='About us'
            pointerColor={colors.veryDarkGray}
            author='Pablo Picasso'
            startAni={startAni}
            typingAniDelay={1000}
            headerText={getHeaderText()}
            longText='We connect ideas at heart, we approach every brand with a clear understanding of the business problem. We provide a solution and what return of investment is needed for the campaign to be successful. Our strategy is determined by a problem we are facing. We are adaptable, which leads us to a magical journey that never ends.'
            buttonText='Our capabilities'
            button={outlinedButton.dark}
            isWideScreen={isWideScreen}
          />
        ) : (
          <Headline 
            pointerTitle='About us'
            pointerColor={colors.veryDarkGray}
            author='Pablo Picasso'
            startAni={startAni}
            typingAniDelay={1000}
            headerText={getHeaderText()}
            isWideScreen={isWideScreen}
          />
        )}
      </TextWrapper>
    </>
  )
})

export default Text;
