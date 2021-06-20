import React, { forwardRef, useRef, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { colors, divider } from 'variables';
import WeAreTheTwentyFourDotsText from 'components/WeAreTheTwentyFourDotsText';
import ListItem from './ListItem';
import { SvgIcon , Grid } from '@material-ui/core';
import { ReactComponent as CircleFilled } from 'images/CircleFilled.svg';
import H2 from 'components/H2';
import P from 'components/P';
import CustomSpan from 'components/CustomSpan';
import PageSection from 'components/PageSection';
import ContentWrapper from 'components/ContentWrapper';
import { getHeaderTextSize } from 'helpers';
import _ from "lodash"
import {useTransition, useSpring, config, animated } from 'react-spring'
import { Transition } from 'react-spring/renderprops'
import { CustomSpring, AniLoadingWrapper } from 'components/Spring/';


const MoodsWrapper = styled.div`
  max-width: ${props => _.includes(['xs','sm'], props.widthCat) ? '100%' : '80%'}
`

const HeadlineTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  ${props => props.margin && {margin: props.margin}};
`;

const Moods = forwardRef(({width, widthCat, isWideScreen}, ref) => {
  const headlineTitleRef = useRef();
  const headlineTextRef = useRef();
  const moodsHeaderRef = useRef();
  const moodsItemRef = useRef();
  
  const [isHeadlineTitleScrolled, setIsHeadlineTitleScrolled] = useState(false);
  const [isHeadlineTextScrolled, setIsHeadlineTextScrolled] = useState(false);
  const [isMoodsHeaderScrolled, setIsMoodsHeaderScrolled] = useState(false);
  const [isMoodsItemScrolled, setIsMoodsItemScrolled] = useState(false);
  const [items, setItems] = useState([
    { id: 0, value: 'Perseverance'},
    { id: 1, value: 'Listening to our inner voice'},
    { id: 2, value: 'Focus on goal'},
    { id: 3, value: 'Daydreaming'},
    { id: 4, value: 'Avant-garde'},
    { id: 5, value: 'Optimism'},
    { id: 6, value: 'Curiosity'},
    { id: 7, value: 'Confronting Challenge'},
    { id: 8, value: 'Seeing obstacle as an opportunity'},
    { id: 9, value: 'Suspending judgment'},
    { id: 10, value: 'Flexible imagination'},
    { id: 11, value: 'Function freedom'},
    { id: 12, value: 'Preference for disorder'},
    { id: 13, value: 'Storyteller'},
    { id: 14, value: 'Connecting dots'},
    { id: 15, value: 'Procrastination is just a tool'},
    { id: 16, value: 'Deeply intuitive'},
    { id: 17, value: 'Intrinsically motivated'},
    { id: 18, value: 'Stimulus freedom'},
    { id: 19, value: 'Delay of gratification'},
    { id: 20, value: 'Asking questions'},
    { id: 21, value: 'We are explorer'},
    { id: 22, value: 'Failure doesn’t stop us'},
    { id: 23, value: 'Able to get “in the zone”'}
  ]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    checkIfScrolled();
    () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  function getFadeStyles(isScrolled) {
    return useSpring({
      from: { opacity: 0 },
      to: { opacity: isScrolled ? 1 : 0},
      config: { ...config.gentle, duration: 1000 },
    });
  }

  function handleScroll(e) {
    checkIfScrolled();
  }

  function checkIfScrolled() {
    const adjustment = 0.20;
    if (headlineTitleRef && headlineTitleRef.current && headlineTitleRef.current !== null && headlineTitleRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsHeadlineTitleScrolled(true);
    }
    
    if (headlineTextRef && headlineTextRef.current && headlineTextRef.current !== null && headlineTextRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsHeadlineTextScrolled(true);
    }

    if (moodsHeaderRef && moodsHeaderRef.current && moodsHeaderRef.current !== null && moodsHeaderRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsMoodsHeaderScrolled(true);
    }

    const adjustmentOnItemRef = isWideScreen ? 0.65 : 0.90
    if (moodsItemRef && moodsItemRef.current && moodsItemRef.current !== null && moodsItemRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustmentOnItemRef)) {
      setIsMoodsItemScrolled(true);
    }
  }

  return (
    <PageSection 
      ref={ref} id='moods'
      sidePanelBorderColor={divider.dark}
      widthCat={widthCat} isWideScreen={isWideScreen}
    >
      <ContentWrapper isWideScreen={isWideScreen} widthCat={widthCat}>
        <div>
          <CustomSpring
            startAni={isHeadlineTitleScrolled}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{...config.gentle }}
            renderAni={(aniProps) => (
              <HeadlineTextWrapper ref={headlineTitleRef} style={{ ...aniProps ? { ...aniProps } : { opacity: 0 }} }>
                <P noMargin={true} widthCat={widthCat} header size="lg" fontType="bold">
                  <span style={{color: colors.medDarkGray}}>We are </span>
                  <WeAreTheTwentyFourDotsText />
                  <span style={{color: colors.medDarkGray}}>!</span>
                </P>
              </HeadlineTextWrapper>
            )}
          />
          <CustomSpring
            startAni={isHeadlineTextScrolled}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{...config.gentle }}
            renderAni={(aniProps) => (
              <p ref={headlineTextRef} style={{ ...aniProps ? { ...aniProps } : { opacity: 0 }} }>
                We are a team full of ideas. We believe in our creativity and imagination to make things happen. In every obstacle, we strive and excel to provide results. Circumspection is not in our DNA. Our framework does not overvalue our commitment but sets realistic goals and quality to precision.
              </p>
            )}
          />
        </div>
        <HeadlineTextWrapper ref={moodsHeaderRef} margin="1rem 0rem">
          <CustomSpring
            startAni={isMoodsHeaderScrolled}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{...config.gentle }}
            renderAni={(aniProps) => (
              <P
                noMargin={true} header widthCat={widthCat} size="lg" 
                style={{ ...aniProps ? { ...aniProps } : { opacity: 0 }} }
              >
                <CustomSpan fontType='bold' style={{color: colors.veryDarkGray}}>24</CustomSpan>&nbsp;
                <CustomSpan fontType='light' style={{color: colors.medDarkGray}}>moods of the agency</CustomSpan>
              </P>
            )}
          />
        </HeadlineTextWrapper>
        <MoodsWrapper ref={moodsItemRef} widthCat={widthCat}>
          <AniLoadingWrapper showLoader={!isMoodsItemScrolled}>
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
            >
              { isMoodsItemScrolled ? (
                <Transition
                  items={items} 
                  keys={item => item.id}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity: 0 }}
                  config={config.gentle}
                  trail={100}
                >
                  {item => props => <ListItem idx={item.id} title={item.value} aniProps={props} />}
                </Transition>
              )
              : 
                
                    items.map((mood) => <ListItem idx={mood.value} title={mood.value} />)
                
              }
            </Grid>
          </AniLoadingWrapper>
        </MoodsWrapper>
      </ContentWrapper>
    </PageSection>
  )
})

export default React.memo(Moods);