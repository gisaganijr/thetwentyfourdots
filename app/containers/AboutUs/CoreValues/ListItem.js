import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { contentMargin, colors, outlinedButton } from 'variables';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, Grid } from '@material-ui/core';
import { ReactComponent as CircleFilled } from 'images/CircleFilled.svg';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import P from 'components/P';
import { useSpring, config, animated } from 'react-spring';
import { Spring, Transition } from 'react-spring/renderprops'
import { CustomSpring, AniLoadingWrapper } from 'components/Spring/';
import { lighten, desaturate } from 'polished'

const useStyles = makeStyles(theme => ({
  itemTextRoot: { 
    marginTop: '6px!important'
  }
}));

const StyledText = styled.h4`
  color: ${props => props.color};
`;

const ButtonWrapper = styled.div`
  ${props => props.isWideScreen && {
    position: "absolute",
    bottom: "0",
    left: "0",
  }}
`

const ItemWrapper = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props => props.isWideScreen && {"min-height": "110%"}};
  position: relative;
`

const ListItem = ({isWideScreen, idx, item, bgColor, aniProps: transitionAniProps}) => {
  const classes = useStyles();
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
      <AniLoadingWrapper showLoader={!aniProps ? true: false} color={lighten(0.08, bgColor)}>
        <ItemWrapper 
          isWideScreen={isWideScreen}
        >
          <div
            style={{
              ...aniProps ? {...aniProps} : { opacity: 0 } 
            }}
          >
            <P {...!isWideScreen && {noMargin: true}} fontType="medium" size="md" style={{color: colors.white}}>{item.title}</P>
            <p style={{ marginBottom: contentMargin }}>{item.longText}</p>
            <ButtonWrapper isWideScreen={isWideScreen}>
              <CustomOutlinedButton {...outlinedButton.light} bold={true} size="small">
                {item.button.title}
              </CustomOutlinedButton> 
            </ButtonWrapper>
          </div>
        </ItemWrapper>
      </AniLoadingWrapper>
    )
  }

  if (isWideScreen) {
    return (
      <Grid ref={itemRef} item md={4} sm={12} style={{width: '100%'}}>
        {transitionAniProps ? 
          getContent(transitionAniProps)
        :
          getContent()
        }
      </Grid>
    )
  }

  return (
    <Grid ref={itemRef} item md={4} sm={12} style={{width: '100%'}}>
      <CustomSpring
        startAni={isScrolled}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{...config.gentle}}
        delay={500}
        noLoader={true}
        renderAni={(aniProps) => getContent(aniProps)}
      />
      {/* { isScrolled ? 
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{...config.gentle, duration: 1000 }}
        >
          { props => getContent(props) }
        </Spring>
        : 
          getContent()
      } */}
    </Grid>
  )
}

export default ListItem;