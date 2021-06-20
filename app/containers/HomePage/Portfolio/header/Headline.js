import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from 'variables';
import { Grid } from '@material-ui/core';
import WeAreTheTwentyFourDotsText from 'components/WeAreTheTwentyFourDotsText';
import P from 'components/P';
import { getHeaderTextSize } from 'helpers';
import {Spring, config} from 'react-spring/renderprops';
import { CustomSpring, AniLoadingWrapper } from 'components/Spring/';

const HeadlineTextWrapper = styled.div`
  display: flex;
  flex-direction: row
`;

const Headline = ({widthCat, marginBottom}) => {
  const headerTitleRef = useRef();
  const headerTextRef = useRef();
  const [isScrolledHeaderTitle, setIsScrolledHeaderTitle] = useState(false);
  const [isScrolledHeaderText, setIsScrolledHeaderText] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    checkIfScrolled();
    () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  function handleScroll(e) {
    checkIfScrolled();
  }

  function checkIfScrolled() {
    const adjustment = 0.20;
    if (headerTitleRef && headerTitleRef.current && headerTitleRef.current !== null && headerTitleRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsScrolledHeaderTitle(true);
    }

    if (headerTextRef && headerTextRef.current && headerTextRef.current !== null && headerTextRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsScrolledHeaderText(true);
    }
  }

  return (
    <Grid 
      container
      direction='row'
      justify="flex-start"
      alignItems="flex-start"
      spacing={0}
    >
      <Grid item sm={12} md={12}>
        <CustomSpring 
          key="headerTitle"
          startAni={isScrolledHeaderTitle}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{...config.gentle }}
          renderAni={(aniProps) => (
            <HeadlineTextWrapper ref={headerTitleRef} style={{ ...aniProps ? { ...aniProps } : { opacity: 0 }} }>
              <P 
                widthCat={widthCat}
                fontType="bold" header size="lg"
                noMargin={true} 
              >
                <WeAreTheTwentyFourDotsText />&nbsp;
                <span style={{color: colors.medDarkGray}}>work</span>
              </P>
            </HeadlineTextWrapper>
          )}
        />
      </Grid>
      <Grid item sm={12} md={12}>
        <CustomSpring
          key="headerText"
          startAni={isScrolledHeaderText}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{...config.gentle}}
          renderAni={(aniProps) => (
            <div ref={headerTextRef} style={{ ...aniProps ? { ...aniProps } : { opacity: 0 }} }>
              <p>
                Our team can create stunning visuals with diverse digital disciplines, from marketing promotional items, research, brand strategy, infographics, architectural visualization such as 3D models, interior design, and a complete set of shop drawings.
              </p>
            </div>
          )} 
        />
      </Grid>
    </Grid>

  )
}

export default Headline;