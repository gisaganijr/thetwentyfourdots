import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { contentMargin, colors } from 'variables';
import SidePanel from 'components/SidePanel';
import PointerTitle from 'components/PointerTitle';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import H2 from 'components/H2';
import P from 'components/P';
import Typist from 'react-typist';
import { Spring, config, Transition } from 'react-spring/renderprops'

const HeadlineTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${props => `${props.maxHeight}px`}
`;

const Headline = ({
  headerText, author, pointerTitle, textColor = 'inherit', pointerColor, widthCat,
  buttonText, button, longText, isWideScreen, startAni = true, typingAniDelay = 0, pointerIconColor
}) => {
  const [aniTypingDone, setAnimateOthers] = useState(false);
  const [items, setItems] = useState([])
  const [headlineTextMaxHeight, setHeadlineTextMaxHeight] = useState(0);
  const headlineTextRef = useRef(null);
  console.log("Headline headerText", headerText)
   
  useEffect(() => {
    let newItems = [];
    if (author) {
      newItems.push({
        id: 0,
        content: 
          <P style={{ color: textColor }} fontType="extra-light" fontSize="normal">
          - {author}
          </P>
      })
    }

    if (longText) {
      newItems.push({
        id: 1,
        content: 
          <p style={{ color: textColor }}>
            {longText}
          </p>
      })
    }

    if (buttonText) {
      newItems.push({
        id: 2,
        content: 
          <div style={{ marginTop: contentMargin }}>
            <CustomOutlinedButton {...button} bold={true} size="small">
              {buttonText}
            </CustomOutlinedButton> 
          </div> 
      })
    }

    setItems(newItems);
  }, [isWideScreen])

  setTimeout(() => {
    if (headlineTextRef && headlineTextRef.current) {
      setHeadlineTextMaxHeight(headlineTextRef.current.getBoundingClientRect().height);
    }
  }, 100);

  const handleTypingDone = () => {
    setTimeout(() => setAnimateOthers(true), 150);
  }
  
  return (
      <>
        <PointerTitle title={pointerTitle} color={pointerColor} iconColor={pointerIconColor} isWideScreen={isWideScreen}/>
        { startAni && (
          <HeadlineTextWrapper maxHeight={headlineTextMaxHeight}>
            <Typist
              startDelay={typingAniDelay}
              avgTypingDelay={30} 
              cursor={{show: false}} 
              onTypingDone={handleTypingDone}
            >
              {headerText}
            </Typist>
            <div ref={headlineTextRef} style={{ opacity: 0 }}>{headerText}</div>
          </HeadlineTextWrapper>
        )}
        { startAni && aniTypingDone ? (
          <Transition
            items={items} 
            keys={item => item.id}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={config.gentle}
            trail={500}
          >
            {item => props => <div style={{...props}}>{item.content}</div>}
          </Transition>
        ) : (
          items.map((item) => <div style={{ opacity: 0 }}>{item.content}</div>)
        )}
        {/* <Spring
          from={{ opacity: 0 }}
          to={{ opacity: aniTypingDone ? 1: 0 }}
          config={{ ...config.gentle, duration: 1000 }}
        >
          {props => {
            return (
            <div style={props} >
              <P fontType="extra-light">
                - {author}
              </P>
            
              <p>
                {longText}
              </p>
              <div style={{ marginTop: contentMargin }}>
                <CustomOutlinedButton {...button} bold={true} size="small">
                  {buttonText}
                </CustomOutlinedButton> 
              </div> 
            </div>
          )}}
        </Spring> */}
      </>
  )
}

export default Headline;