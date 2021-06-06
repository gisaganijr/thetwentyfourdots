import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import P from 'components/P';
import { Link } from '@material-ui/core';
import { contentMargin, colors, outlinedButton } from 'variables';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import CustomCircularProgress from 'components/CustomCircularProgress';
import LoaderWrapper from 'components/CustomCircularProgress/LoaderWrapper';
import _ from "lodash";
import { config } from 'react-spring/renderprops';
import { CustomSpring, Curtain, Spinner } from 'components/Spring/';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  width: 100%;
  height: ${props => props.height || "100%"};
  background-color: ${props => props.bgColor};
  color: ${colors.white};
  overflow: hidden;
`;

const Button = (props) => {
  return (
    <CustomOutlinedButton {...outlinedButton.light} bold={true} {...props}>
      Explore projects
    </CustomOutlinedButton>
  )
}

const ItemText = ({portfolio, isWideScreen, push, topScrolled, imageLoaded }) => {
  const textRef = useRef();
  const textOuterWrapperRef = useRef();
  const textInnerWrapperRef = useRef();
  const [textOverflown, setTextOverflown] = useState(false);

  useLayoutEffect(() => {
    const textInnerWrapperHeight  = textInnerWrapperRef && textInnerWrapperRef.current && textInnerWrapperRef.current.clientHeight || 0;
    const textWrapperHeight = textRef && textRef.current && textRef.current.clientHeight || 0 + 32;
    if (textWrapperHeight > textInnerWrapperHeight) {
      setTextOverflown(true);
    }
  })

  return (
    <MainWrapper >
      <InnerWrapper ref={textOuterWrapperRef} bgColor={portfolio.bgColor} height={isWideScreen ? "50%" : "100%"}>
        <div style={{ position: 'relative', height: '100%' }}>
          <div ref={textInnerWrapperRef} style={{ height: "100%", padding: '2rem' }}>
            <Link 
              href="#" 
              color="inherit" 
              onClick={(e) => {
                e.preventDefault();
                push(`/portfolio/${portfolio.name}`)}
              }
            >
              <P fontType="medium" noMargin title header size="md">{portfolio.title}</P>
            </Link>
              
            <P ref={textRef} fontType="light" size={!textOverflown ? "sm" : "xs"}>{portfolio.desc}</P>
          </div>

          <CustomSpring
            startAni={topScrolled && imageLoaded ? true : false}
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

          </div>
      </InnerWrapper>

      { isWideScreen && 
        <InnerWrapper bgColor={colors.veryDarkGray} height="50%">
          <div style={{ position: 'relative', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', width: '100%', height: '100%', padding: '2rem'}}>
              <Button />
            </div>
            <CustomSpring
              startAni={topScrolled && imageLoaded ? true : false}
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
          </div>
        </InnerWrapper>
      }
    </MainWrapper>
  )

}

export default React.memo(ItemText);