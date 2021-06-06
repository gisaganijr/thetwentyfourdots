import React, { useState, useEffect, memo, forwardRef } from 'react';
import styled from 'styled-components';
import { colors, outlinedButton } from 'variables'
import P from 'components/P';
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

  if (!contentType) return null;

  return (
      <>
        <TextWrapper 
          contentType={contentType}
        >
          <Headline 
            pointerTitle="Services"
            pointerColor={colors.veryDarkGray}
            author="E. Dickinson"
            startAni={startAni}
            typingAniDelay={1000}
            headerText={
              contentType === 'desktop' ? (
                <P 
                  size="xl"
                  widthCat={contentType === 'desktop' ? widthCat : 'lg'}
                  fontType="bold" header
                  noMargin={true} 
                  style={{ color: colors.veryDarkGray }}
                  customLineHeight="3.5rem"
                >
                    <span style={{color: colors.yellow}}>We</span>&nbsp;
                    <span style={{color: colors.veryDarkGray}}>dwell</span><br />
                    <span style={{color: colors.veryDarkGray}}>in possibilities</span>
                </P>
              ) : (
                <P 
                  size="xl"
                  widthCat={contentType === 'desktop' ? widthCat : 'lg'}
                  fontType="bold" header
                  noMargin={true} 
                  customLineHeight="3.5rem"
                  style={{ color: colors.veryDarkGray, whiteSpace: 'nowrap' }}
                >
                  <span style={{color: colors.yellow}}>We</span>&nbsp;
                  <span style={{color: colors.veryDarkGray}}>dwell</span><br />
                  <span style={{color: colors.veryDarkGray}}>in possibilities</span>
                </P>
              )
            }
            longText="We are equipped with creative knowledge with unique approach in providing solutions. We believe in every design we must communicate."
            buttonText="Explore portfolio"
            button={outlinedButton.dark}
            isWideScreen={isWideScreen}
          />
        </TextWrapper>
      </>  
    )
})

export default Text;
