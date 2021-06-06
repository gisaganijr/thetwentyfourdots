import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import TextWrapper from './TextWrapper';
import { contentMargin, colors } from 'variables';
import { SvgIcon , Grid } from '@material-ui/core';
import P from 'components/P';
import H3 from 'components/H3';
import CustomGrid  from 'components/CustomGrid';
import CustomSVG from 'components/CustomSVG';
import { Spring, Transition, config} from 'react-spring/renderprops';
import { CustomSpring, AniLoadingWrapper } from 'components/Spring/';

function isEven(n) {
  return n % 2 == 0;
}

const ItemWrapper = styled.div`
  min-width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  //padding-right: ${props => props.isLast ? '0rem' : contentMargin};
`

const Item = ({itemNo, title, logo, isWideScreen = true, widthCat, isLast, aniProps: transitionAniProps}) => {
  const imageWidthHeight = isWideScreen ? '100%' : '75%'
  const itemRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

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
    if (itemRef && itemRef.current && itemRef.current !== null && itemRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsScrolled(true);
    }
  }

  const getContent = (aniProps) => {
    return (
      <AniLoadingWrapper showLoader={!aniProps ? true: false}>
        <Grid 
          item md={3} sm={6} xs={12}
          key={`services-item-${itemNo}`} 
        >
          <ItemWrapper 
            ref={itemRef} 
            itemNo={itemNo} isLast={isLast} 
          >
            <div 
              style={{ 
                width: imageWidthHeight, height: imageWidthHeight, ...isWideScreen && { marginBottom: contentMargin}, 
                ...aniProps ? {...aniProps} : { opacity: 0 } 
              }} 
            >
              <CustomGrid component={logo}/>
            </div>
            <P fontType="medium" size='md' widthCat={widthCat} style={{ whiteSpace: "nowrap" }}>{title}</P>   
          </ItemWrapper>
        </Grid>
      </AniLoadingWrapper>
    )
  }

  if (isWideScreen)
    return getContent(transitionAniProps);

  return (
    <CustomSpring
      startAni={isScrolled}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{...config.gentle}}
      delay={500}
      noLoader={true}
      renderAni={(aniProps) => getContent(aniProps)}
    />
  )
}

export default Item;