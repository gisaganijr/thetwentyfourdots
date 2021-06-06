import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { config} from 'react-spring/renderprops'
import { CustomSpring } from 'components/Spring/';

const MainWrapper = styled.div`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Indicators = ({sliders, activeSlideIndex, changeSlide, widthCat}) => {
  return (
    <CustomSpring
      startAni={true}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{...config.gentle}}
      noLoader={true}
      delay={100}
      renderAni={(aniProps) => (
        <MainWrapper style={{...aniProps ? { ...aniProps } : { opacity: 0 }}} widthCat={widthCat}>
          {
            sliders.map((slider, idx) => (
              <Item key={idx} sliders={sliders} slider={slider} activeSlideIndex={activeSlideIndex} isActiveSlide={activeSlideIndex === idx ? true : false} changeSlide={changeSlide} />
            ))
          }
        </MainWrapper>
      )}
    />
  )
}

export default Indicators;