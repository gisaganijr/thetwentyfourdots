import React, { useMemo, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { getImageDimensionOnFilename } from 'helpers';
import { contentMargin, colors, outlinedButton, imageCurtainColor } from 'variables';
import { CustomSpring, Curtain, Spinner } from 'components/Spring/';
import { Grid } from '@material-ui/core';
import ItemText from './ItemText';
import ItemTextMobile  from './ItemTextMobile';
import CustomCircularProgress from 'components/CustomCircularProgress';
import LoaderWrapper from 'components/CustomCircularProgress/LoaderWrapper';
import _ from "lodash";
import { config } from 'react-spring/renderprops';

const ImageWrapper = styled.div`
  position: relative;
  min-height: ${props => props.minHeight || "0px"};
  background-color: ${colors.darkGray}
`

function isEven(n) {
  return n % 2 == 0;
}

const Item = ({widthCat, itemNo, portfolio, isWideScreen, push, loadedImage}) => {
  const itemRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [topScrolled, setTopScrolled] = useState(false);
  const [bottomScrolled, setBottomScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  const flexDirection = getDirection();
  
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
    const adjustment = 0.80;

    if (!topScrolled && itemRef && itemRef.current !== null && itemRef.current.getBoundingClientRect().top <= window.innerHeight) {
      setTopScrolled(true);
    }

    if (!bottomScrolled && itemRef && itemRef.current !== null && itemRef.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setBottomScrolled(true);
    }
  }

  function getDirection() {
    if (isWideScreen) {
      return !isEven(itemNo) ? 'row-reverse' : 'row'
    }

    return 'row'
  }

  function getImageMinHeight(imageOrigSize, isWideScreen) {
    if (isWideScreen) {
      const imagePlaceholderWidth = (window.innerWidth * 0.667).toFixed();
      const ratio =  (imagePlaceholderWidth / imageOrigSize.width).toFixed(3);
      return (imageOrigSize.height * ratio).toFixed();
    } else {
      const imagePlaceholderWidth = window.innerWidth;
      const ratio =  (imagePlaceholderWidth / imageOrigSize.width).toFixed(3);
      return (imageOrigSize.height * ratio).toFixed();
    }
  }

  const imageHolderRef = useRef();
  const imageOrigSize = getImageDimensionOnFilename(portfolio.image.src);
  const imgCalculatedMinHeight = getImageMinHeight(imageOrigSize, isWideScreen);
  
  return (
    <Grid container
      ref={itemRef}
      direction={flexDirection}
      alignItems="stretch"
      justify={isWideScreen ? 'space-between' : 'center'}
      spacing={0}
      style={{ position: 'relative' }}
    >
      <Grid 
        item md={8} xs={12}
        key={`portfolio-item-${itemNo}`} 
        ref={imageHolderRef}
        style={{ position: "relative" }}
      >
        <ImageWrapper minHeight={`${imgCalculatedMinHeight}px`}>
          
          {useMemo(() => (
            <>
              <CustomSpring
                startAni={topScrolled && loaded ? true : false}
                from={{ height: '100%' }}
                to={{ height: '0%' }}
                config={{...config.slow}}
                noLoader={true}
                delay={500}
                spinnerColor={colors.white}
                renderAni={(aniProps) => (
                  <Curtain color={colors.black} style={{ ...aniProps ? { ...aniProps } : { position: 'absolute', height: '100%' }} } />
                )}
              />

              <img 
                width="100%" height="auto"
                {...topScrolled && { 
                  src: portfolio.image.src, 
                  onLoad: () => {
                    setLoaded(true);
                  }
                }}
              />

            </>
          ), [portfolio.image && portfolio.image.src, topScrolled, loaded])}
         
          {loaded && <ItemTextMobile portfolio={portfolio} isWideScreen={isWideScreen} push={push} />}
        </ImageWrapper> 
        
      </Grid>
      
      {!loaded &&
        <LoaderWrapper height={`${imgCalculatedMinHeight}px`}>
          <CustomCircularProgress 
            variant="indeterminate" 
            thickness={4} 
            color={colors.white}
          />
        </LoaderWrapper> 
      }
      
      { isWideScreen &&

        <Grid 
          item md={4} sm={12}
          key={`portfolio-item-grid-${itemNo}`} 
        >
          <ItemText portfolio={portfolio} widthCat={widthCat} isWideScreen={isWideScreen} push={push} topScrolled={topScrolled} imageLoaded={loaded} />
        </Grid>
      }
    </Grid>
  )
}

export default React.memo(Item);