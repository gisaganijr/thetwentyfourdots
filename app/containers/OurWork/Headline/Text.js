/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

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

  if (!contentType) return null;

  return (
      <>
        <TextWrapper 
          contentType={contentType}
        >
          <Headline 
            pointerTitle="Our work"
            pointerColor={colors.white}
            startAni={startAni}
            typingAniDelay={1000}
            author="Vincent Van Goh"
            headerText={
              contentType === 'desktop' ? (
                <P 
                  size="xl"
                  widthCat={contentType === 'desktop' ? widthCat : 'lg'}
                  fontType="bold" header
                  noMargin={true} 
                  customLineHeight="3.5rem"
                  style={{ color: colors.veryDarkGray }}
                >
                  <span style={{color: colors.turquoise}}>Great</span>&nbsp;
                  <span style={{color: colors.white}}>things are done</span><br />
                  <span style={{color: colors.white}}>by a series of small things</span><br />
                  <span style={{color: colors.white}}>brought together.</span>
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
                  <span style={{color: colors.turquoise}}>Great</span>&nbsp;
                  <span style={{color: colors.white}}>things are</span><br />
                  <span style={{color: colors.white}}>done by a series of</span><br />
                  <span style={{color: colors.white}}>small things brought</span><br />
                  <span style={{color: colors.white}}>together.</span>
                </P>
              )
            }
            longText="The characters of our capabilites, environment design, digital campaign, architecture and 3D assets."
            textColor={colors.white}
            buttonText="Learn more"
            button={outlinedButton.light}
            isWideScreen={isWideScreen}
          />
        </TextWrapper>
      </>  
    )
})

export default Text;
