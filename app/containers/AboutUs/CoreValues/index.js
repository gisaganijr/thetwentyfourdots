import React, { forwardRef, useRef, useEffect, useState, useMemo } from 'react';
import { contentMargin, contentMarginSmall, colors, divider } from 'variables';
import PointerTitle from 'components/PointerTitle';
import ListItem from './ListItem';
import { Grid } from '@material-ui/core';
import ContentWrapper from 'components/ContentWrapper';
import P from 'components/P';
import PageSection from 'components/PageSection';
import { Transition, config } from 'react-spring/renderprops'

const CoreValues = forwardRef(({width, widthCat, isWideScreen}, ref) => {
  const pageRef = useRef();
  const [items, setItems] = useState([]);
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const bgColor = colors.orange;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setItems([
      {
        id: 1,
        title: 'Teamwork',
        longText: 'We at thetwentyfourdots believe and trust each other. A few of us are modest, others are resourceful but what we have in common is one goal, We seek win-for-all solutions. Embracing challenges, think big and deliver outstanding results.',
        button: {
          title: 'Explore projects',
          link: ''
        },
        showAnimation: false
      },
      {
        id: 2,
        title: 'Creative thinking',
        longText: 'We champion ideas and provide clients with a clear direction and furnishing style scales and mood images. Sharing thoughts and asking questions help us translate the design brief distinctly. Through this practice, we establish exceptional service to our clientele.',
        button: {
          title: 'Explore Process',
          link: ''
        },
        showAnimation: false
      },
      {
        id: 3,
        title: 'Building ideas',
        longText: `We create styles by providing high-end 3D visuals and digital composition. Our design software is not just a tool, it's our end-point solution to create a meaningful journey with us and bring ideas to life. We are thetwentyfourdots as one.`,
        button: {
          title: 'Explore Process',
          link: ''
        },
        showAnimation: false
      }
    ]);
    () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  function handleScroll(e) {
    const adjustment = isWideScreen ? 0.65 : 0.90
    if (pageRef.current && pageRef.current !== null && pageRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsPageScrolled(true);
    }
  }

  return (
    <PageSection 
      ref={ref} id='coreValues'
      sidePanelBorderColor={divider.light}
      bgColor={bgColor}
      widthCat={widthCat} isWideScreen={isWideScreen}
    >
      <ContentWrapper key="coreValuesContentWrapper" ref={pageRef} isWideScreen={isWideScreen} widthCat={widthCat}>
        <PointerTitle title="Core Values" color={colors.white} isWideScreen={isWideScreen} />
        <div style={{marginBottom: contentMargin}}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            spacing={6}
          >
              { isPageScrolled && isWideScreen ? (
                <Transition
                  items={items} 
                  keys={item => item.id}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  unique={true}
                  reset={true}
                  leave={{ opacity: 0 }}
                  config={config.gentle}
                  trail={250}
                >
                  { item => props => (
                    <ListItem idx={item.id} item={item} bgColor={bgColor} isWideScreen={isWideScreen} aniProps={{...props }}/>
                  )}
                </Transition>
              ) : 
                items.map((coreValue, idx) => <ListItem idx={idx} bgColor={bgColor} item={coreValue} isWideScreen={isWideScreen} />)
              }
          </Grid>
        </div>
        <div style={{ marginTop: isWideScreen ? '6rem' : contentMarginSmall, marginBottom: '0px'}}>
          <P noMargin={true} style={{ color: colors.white}} size="xxs">thetwentyfourdots in heart and mind</P>
          <P noMargin={true} fontType="medium" size="md" style={{ color: colors.white}}>We are thinkers, our behaviour becomes our identity.</P>
        </div>
      </ContentWrapper>
    </PageSection>
  )
})

export default CoreValues;