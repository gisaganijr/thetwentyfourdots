import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Headline from './Headline';
import TextWrapper from './TextWrapper';
import { contentMargin, colors, outlinedButton } from 'variables';
import BigCircle from 'images/BigCircle.svg';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import { Grid } from '@material-ui/core';
import P from 'components/P';
import clover from 'images/portfolio/clover/C-1.2.jpg';
import CircleFrame from './CircleFrame';
import _ from "lodash";
import { Spring, Transition, config } from 'react-spring/renderprops';

function isEven(n) {
  return n % 2 == 0;
}

const Button = (props) => {
  return (
    <CustomOutlinedButton {...outlinedButton.dark} bold={true} {...props}>
      Explore projects
    </CustomOutlinedButton>
  )
}

const Item = ({widthCat, itemNo, title, desc, marginTop}) => {
  const itemRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const flexDirection = getDirection();
  let items = [{
    id: 0,
    content: (aniProps) => (
      <Grid 
        item md={6} sm={12} style={{...aniProps ? {...aniProps} : { opacity: 0} }}
        key={`portfolio-item-1`} 
      >
        <TextWrapper 
          paddingLeft={_.includes(['md','lg'], widthCat) && flexDirection === 'row-reverse' ? '20%' : undefined} 
          paddingRight={_.includes(['md','lg'], widthCat) && flexDirection === 'row' ? '20%' : undefined} 
        >
          <P fontType="medium" noMargin size="md" style={{color: colors.medDarkGray}}>{title}</P>
          <p style={{color: colors.veryDarkGray}}>{desc}</p>
          {_.includes(['lg','md'], widthCat) &&
            <Button />
          }
        </TextWrapper>
      </Grid>
    )}, 
    {
      id: 1, 
      content: (aniProps) => (
        <Grid 
          item md={6} sm={12}  
          key={`portfolio-item-2`} 
          style={{
            width: '100%', 
            textAlign: _.includes(['lg','md'], widthCat) ? flexDirection === 'row' ? 'right' : 'left' : 'center',
            ...aniProps ? {...aniProps} : { opacity: 0 }
          }}
        >  
          <CircleFrame
            src={clover} 
            style={{
              width: _.includes(['lg','md'], widthCat) ? '90%' : '80%',
              marginTop: marginTop ? contentMargin : undefined
            }}
          />
        </Grid>
      )
    }
  ];

  if (_.includes(['xs','sm'], widthCat)) {
    items.push({
      id: 2,
      content: (aniProps) => (
        <Grid 
          item display={{ sm: "block", md: "none" }} sm={12} 
          key={`portfolio-item-3`} 
          style={{
            width: '80%', 
            textAlign: 'center', 
            margin: `${contentMargin} 0px`,
            ...aniProps ? {...aniProps} : { opacity: 0 }
          }}
        >  
            <Button /> 
        </Grid>
      )
    });
  }

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

  function getDirection() {
    if (_.includes(['lg','md'], widthCat)) {
      return isEven(itemNo) ? 'row-reverse' : 'row'
    }

    return 'row'
  }
  
  return (
    <Grid container
      ref={itemRef}
      direction={flexDirection}
      alignItems="center"
      justify={_.includes(['lg','md'], widthCat) ? 'space-between' : 'center'}
      spacing={0}
    >
      {isScrolled 
        ? 
          <Transition
            items={items} 
            keys={item => item.id}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={config.gentle}
            trail={250}
          >
            {
              item => props => item.content() !== undefined && item.content(props)
            }
          </Transition>
        : 
          items.map(item => item.content() !== undefined && item.content())
      }
    </Grid>
  )
}

export default Item;