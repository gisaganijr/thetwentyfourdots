import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { contentMarginSmall, colors, outlinedButton } from 'variables';
import { Grid } from '@material-ui/core';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import P from 'components/P';
import { config} from 'react-spring/renderprops'
import { CustomSpring, AniLoadingWrapper } from 'components/Spring/';

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Headline = ({widthCat, marginBottom, isWideScreen }) => {
  const contentRef1 = useRef();
  const contentRef2 = useRef();
  const [isScrolledContent1, setIsScrolledContent1] = useState(false);
  const [isScrolledContent2, setIsScrolledContent2] = useState(false);
  
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
    if (contentRef1 && contentRef1.current && contentRef1.current !== null && contentRef1.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsScrolledContent1(true);
    }

    if (contentRef2 && contentRef2.current && contentRef2.current !== null && contentRef2.current.getBoundingClientRect().bottom <= window.innerHeight + (window.innerHeight * adjustment)) {
      setIsScrolledContent2(true);
    }
  }

  return (
    <Grid container
        direction='row'
        justify="center"
        alignItems="flex-start"
        spacing={4}
        style={{paddingBottom: '2rem'}}
    >
      <Grid ref={contentRef1} item sm={12} md={6} {...!isWideScreen && { width: '100%' }}>
        <CustomSpring
          startAni={isScrolledContent1}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ ...config.gentle, duration: 1000 }}
          renderAni={(aniProps) => {
            return (
              <ColumnWrapper 
                isWideScreen={isWideScreen}
                style={{ ...aniProps ? { ...aniProps } : { opacity: 0 }} }
              >
                <P 
                  widthCat={widthCat}
                  fontType="bold" header size="xl"
                  noMargin={true} 
                >
                  thetwentyfourdots { isWideScreen && <br/> }of know-how
                </P>
                <div style={{ marginTop: contentMarginSmall }}>
                  <CustomOutlinedButton {...outlinedButton.light }bold={true} size="small">
                    Explore services
                  </CustomOutlinedButton> 
                </div>
              </ColumnWrapper>
            )
          }}
        />
      </Grid>
      <Grid ref={contentRef2} item sm={12} md={6}>
        <CustomSpring
          startAni={isScrolledContent2}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{...config.gentle}}
          delay={500}
          renderAni={(aniProps) => (
            <p 
              style={{
                marginTop: '6px',
                ...aniProps ? { ...aniProps } : { opacity: 0 }
              }}
            >
              from digital campaigns, branding identity, 3D asses environment, exhibition and retail display, we provide solution to our clients need and deliver high-end result.
            </p>
          )}
        />
      </Grid>
    </Grid>
  )
}

export default React.memo(Headline);