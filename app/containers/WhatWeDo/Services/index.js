import React, { forwardRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { contentMargin, colors, divider } from 'variables';
import Item from './Item';
import { SvgIcon , Grid } from '@material-ui/core';
import { ReactComponent as WhatWeDo3D } from 'images/WhatWeDo3D.svg';
import { ReactComponent as WhatWeDoBrand } from 'images/WhatWeDoBrand.svg';
import { ReactComponent as WhatWeDoDigital } from 'images/WhatWeDoDigital.svg';
import { ReactComponent as WhatWeDoCreative } from 'images/WhatWeDoCreative.svg';
import P from 'components/P';
import ContentWrapper from 'components/ContentWrapper';
import PageSection  from 'components/PageSection';
import { useSpring, config, animated } from 'react-spring';
import { CustomSpring, AniLoadingWrapper } from 'components/Spring/';

import { getHeaderTextSize } from 'helpers';

const Services = forwardRef(({width, widthCat, isWideScreen}, ref) => {
  const pageRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Creative', 
      titleColor: colors.orange,
      logo: WhatWeDoCreative,
      logoViewBox: '0 0 109.36 113.63',
      longText: 'Our talent can create amazing experience for our audience and make a big impact on your business. Making ideas happen with visuals, we connect with people’s mind and heart.',
      services: [
        { id: 0, title: 'Creative Concept and Ideas' }, 
        { id: 1, title: 'Marketing Communication and Collaterals' }
      ]
    },
    {
      id: 2,
      title: 'Brand',
      titleColor: colors.yellow,
      logo: WhatWeDoBrand,
      logoViewBox: '0 0 92 91.69',
      longText: 'We will collaborate with you and share all your queries, and we will help you translate them into an impressive and engaging brand identity that helps your business stand out from the crowd and match perfectly with your target audience.',
      services: [
        { id: 0, title: 'Strategy and Plan'},
        { id: 1, title: 'Rebranding'},
        { id: 2, title: 'Brand consultation'}
      ]
    },
    {
      id: 3,
      title: 'Digital',
      titleColor: colors.turquoise,
      logo: WhatWeDoDigital,
      logoViewBox: '0 0 93.12 93.71',
      longText: 'We are equipped with experience and knowledge to build digital design with the help of our latest and advanced software.',
      services: [
        { id: 0, title: 'Illustration' }, 
        { id: 1, title: 'Marketing collaterals' }, 
        { id: 2, title: 'Converting low resolution file to high resolution and printable file.' },
        { id: 3, title: 'Finalizing all files from large format printing' },
        { id: 4, title: 'Social Media' }, 
        { id: 5, title: 'UI Design' }
      ]
    },
    {
      id: 4,
      title: '3D',
      titleColor: colors.cyan,
      logo: WhatWeDo3D,
      logoViewBox: '0 0 80 90.48',
      longText: 'With our expertise in space and 3D design construction, we can yield images or visuals into a high-end picture-like render for our client to efficiently envision their ideas and objective.',
      services: [
        { id: 0, title: 'Interior Design' }, 
        { id: 1, title: 'CAD services - Shop drawing, and other construction needs' },
        { id: 2, title: 'Exhibition and retail display design' }, 
        { id: 3, title: 'Environment' }, 
        { id: 4, title: '3D model assets' }, 
        { id: 5, title: 'Scene Animation' }, 
        { id: 6, title: 'Events planning and layouts' }, 
        { id: 7, title: 'Virtual Environment' }
      ]
  }]);
  
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    checkIfScrolled();
    () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  function handleScroll(e) {
    checkIfScrolled ();
  }

  function checkIfScrolled () {
    const adjustment = 0.20;
    if (pageRef && pageRef.current && pageRef.current !== null && pageRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsScrolled(true);
    }
  }

  return (
    <PageSection 
      ref={ref} id='services'
      sidePanelBorderColor={divider.dark}
      widthCat={widthCat} isWideScreen={isWideScreen}
    >
      <ContentWrapper isWideScreen={isWideScreen} widthCat={widthCat}>
        <CustomSpring 
          key="headerTitle"
          startAni={isScrolled}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{...config.gentle }}
          spinnerColor={colors.veryDarkGray}
          renderAni={(aniProps) => (
            <div ref={pageRef} style={{ ...aniProps ? { ...aniProps } : { opacity: 0 }} }>
              <P 
                size="lg"
                header
                widthCat={widthCat}
                fontType="bold"
                noMargin={true} 
                style={{ color: colors.veryDarkGray, marginBottom: contentMargin }}
              >
                You can call us Creative Ninjas!
              </P>
            </div>
          )}
        />
        <Grid container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={6}
        >
          {
            items.map((item, idx) => <Item idx={item.id} item={item} isWideScreen={isWideScreen} widthCat={widthCat} />)
          }
        </Grid>
      </ContentWrapper>
    </PageSection>
  )
})

export default Services;