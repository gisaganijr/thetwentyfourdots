import React, { useEffect, useState, forwardRef } from 'react';
import styled from 'styled-components';
import { contentMargin, colors, appBarMinHeight } from 'variables';
import PointerTitle from 'components/PointerTitle';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import H2 from 'components/H2';
import P from 'components/P';
import { minHeightOfContentWrappers } from './helpers';
import HeadShake from 'react-reveal/HeadShake';
import Typist from 'react-typist';
import { useSpring, config, animated } from 'react-spring'
import { Spring, Transition } from 'react-spring/renderprops'

const HeadlineTextWrapper = styled.div`
  display: flex;
  flex-direction: row
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column
`;

const MainWrapper = styled.div`
  max-width: ${props => props.isWideScreen ? '50%' : '100%'};
  padding-right: ${props => props.isWideScreen && '4rem'};
  min-height: ${minHeightOfContentWrappers};
  padding-top: ${appBarMinHeight}px;
`

const Word = ({children, color = colors.cyan, show = false, widthCat}) => {
  return (
    <span style={{ display: !show ? 'none' : 'inline-block'}}>
      <HeadShake>
        <div style={{ maxHeight: '24px'}}>
          <span style={{color: color}}>{children}</span>
        </div>
      </HeadShake>
    </span>
  )
}

const Headline = forwardRef(({isWideScreen, widthCat}, ref) => {
  const [wordCtr, setWordCtr] = useState(0);
  const interval = 2000;
  const items = [{
    id: 0,
    content: 
      <P fontType="extra-light">Have we caught your attention?</P>
  }, {
    id: 1,
    content: 
      <p>
        If so, we are happy that you greet us and tell us a little more about your project, needs, 
        ideas or crazy things. We want to be the crazy people that walk this way with you.
      </p>
  }];

  useEffect(() => {
    changeWord();
  }, []) 
  
  useEffect(() => {
    changeWord();
  }, [wordCtr]) 

  const changeWord = () => {
    setTimeout(() => setWordCtr(wordCtr === 22 ? 0 : wordCtr + 1), interval);
  }

  const isShow = (wordNo) => {
    if (wordNo === wordCtr) 
      return true;
    
    return false;
  }

  const [aniTypingDone, setAniTypingDone] = useState(false);
  const handleTypingDone = () => {
    setAniTypingDone(true);
  }

  const WordProps = {right: true, cascade: true, forever: true, widthCat: widthCat }
  
  return (
      <MainWrapper ref={ref} isWideScreen={isWideScreen}>
        <PointerTitle title="Contact" color={colors.veryDarkGray} isWideScreen={isWideScreen}/>
        <HeadlineTextWrapper>
          { !aniTypingDone ? 
            <TextWrapper>
              <Typist
                avgTypingDelay={30} 
                cursor={{show: false}} 
                onTypingDone={handleTypingDone}
              >
                <P fontType="bold" size="lg" smallest="1.5rem" customLineHeight="4rem" header widthCat={widthCat} style={{color: colors.veryDarkGray, }} noMargin={true}>
                  Let's create <br />something&nbsp;
                  <span style={{color: colors.orange}}>Original.</span>
                </P>
              </Typist>
            </TextWrapper>
          : 
            <TextWrapper>
              <P fontType="bold" size="lg" smallest="1.5rem" customLineHeight="4rem" header widthCat={widthCat} style={{color: colors.veryDarkGray, whiteSpace: "nowrap" }} noMargin={true}>
                Let's create <br />something&nbsp; 
                <Word {...WordProps} show={isShow(0)} color={colors.orange}>Original.</Word>
                <Word {...WordProps} show={isShow(1)} color={colors.yellow}>Thrilling.</Word>
                <Word {...WordProps} show={isShow(2)} color={colors.turquoise} >Stylized.</Word>
                <Word {...WordProps} show={isShow(3)} color={colors.cyan} >Sexy.</Word>
                <Word {...WordProps} show={isShow(4)} color={colors.orange} >Bold.</Word>
                <Word {...WordProps} show={isShow(5)} color={colors.yellow} >Massive.</Word>
                <Word {...WordProps} show={isShow(6)} color={colors.turquoise} >Epic.</Word>
                <Word {...WordProps} show={isShow(7)} color={colors.cyan} >Moving.</Word>
                <Word {...WordProps} show={isShow(8)} color={colors.orange} >Happy.</Word>
                <Word {...WordProps} show={isShow(9)} color={colors.yellow} >Fantastic.</Word>
                <Word {...WordProps} show={isShow(10)} color={colors.turquoise} >Colourful.</Word>
                <Word {...WordProps} show={isShow(11)} color={colors.cyan} >Unique.</Word>
                <Word {...WordProps} show={isShow(12)} color={colors.orange} >Vibrant.</Word>
                <Word {...WordProps} show={isShow(13)} color={colors.yellow} >Powerful.</Word>
                <Word {...WordProps} show={isShow(14)} color={colors.turquoise} >Inspiring.</Word>
                <Word {...WordProps} show={isShow(15)} color={colors.cyan} >Dramatic.</Word>
                <Word {...WordProps} show={isShow(16)} color={colors.orange} >Inviting.</Word>
                <Word {...WordProps} show={isShow(17)} color={colors.yellow} >Upbeat.</Word>
                <Word {...WordProps} show={isShow(18)} color={colors.turquoise} >Dynamic.</Word>
                <Word {...WordProps} show={isShow(19)} color={colors.cyan} >Enthral.</Word>
                <Word {...WordProps} show={isShow(20)} color={colors.orange} >Exciting.</Word>
                <Word {...WordProps} show={isShow(21)} color={colors.yellow} >Charming.</Word>
                <Word {...WordProps} show={isShow(22)} color={colors.turquoise} >Strong.</Word>
                <Word {...WordProps} show={isShow(23)} color={colors.cyan} >Awesome.</Word>
              </P>
            </TextWrapper>
          }
        </HeadlineTextWrapper>
        { !aniTypingDone ?
            items.map((item) => <div style={{ opacity: 0 }}>{item.content}</div>)
          :
          <Transition
            items={items} 
            keys={item => item.id}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={config.gentle}
            trail={250}
          >
            {item => props => <div style={{...props}}>{item.content}</div>}
          </Transition>
        }  
      </MainWrapper>
  )
})

export default React.memo(Headline);