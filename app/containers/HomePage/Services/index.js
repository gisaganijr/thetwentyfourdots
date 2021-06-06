import React, { forwardRef, useRef, useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import Item from './Item';
import { divider, contentMargin, colors } from 'variables';
import { Grid } from '@material-ui/core';
import { ReactComponent as KnowHow3D } from 'images/KnowHow3D.svg';
import { ReactComponent as KnowHowBrandDesign } from 'images/KnowHowBrandDesign.svg';
import { ReactComponent as KnowHowDigitalCampaign } from 'images/KnowHowDigitalCampaign.svg';
import { ReactComponent as KnowHowEnvironment } from 'images/KnowHowEnvironment.svg';
import PointerTitle from 'components/PointerTitle';
import ContentWrapper from 'components/ContentWrapper';
import PageSection from 'components/PageSection';
import { Transition, config } from 'react-spring/renderprops'

const Services = forwardRef(({width, widthCat, isWideScreen}, ref) => {
  const pageRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const items = [
    { id: 0, title: "Brand Design", logo: KnowHowBrandDesign },
    { id: 1, title: "Environment", logo: KnowHowEnvironment },
    { id: 2, title: "3D Asset", logo: KnowHow3D },
    { id: 3, title: "Digital Campaign", logo: KnowHowDigitalCampaign }
  ];

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
    if (pageRef && pageRef.current && pageRef.current !== null && pageRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsScrolled(true);
    }
  }
  
  return (
    <PageSection 
      ref={ref} id='items'
      color={colors.white}
      bgColor={colors.turquoise}
      sidePanelBorderColor={divider.light}
      widthCat={widthCat} isWideScreen={isWideScreen}
    >
      <ContentWrapper ref={pageRef} isWideScreen={isWideScreen} widthCat={widthCat}>
        <PointerTitle title="Services" color={colors.white} isWideScreen={isWideScreen} />
        <Headline marginBottom={contentMargin} widthCat={widthCat} isWideScreen={isWideScreen}/>
        <Grid container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={8}
        >
          { isScrolled && isWideScreen ? (
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
                <Item 
                  key={item.id} 
                  itemNo={item.id + 1} 
                  title={item.title} 
                  logo={item.logo} 
                  isWideScreen={isWideScreen} 
                  widthCat={widthCat} 
                  isLast={items.length === item.id ? true : false}
                  aniProps={{...props }}
                />
              )}
            </Transition>
          ) : 
            items.map((service, idx) => (
              <Item 
                key={idx} 
                itemNo={idx + 1} 
                title={service.title} 
                logo={service.logo} 
                isWideScreen={isWideScreen} 
                widthCat={widthCat} 
                isLast={items.length === idx ? true : false}
              />
            ))
          }
        </Grid>
      </ContentWrapper>
    </PageSection>
  )
})

export default Services;