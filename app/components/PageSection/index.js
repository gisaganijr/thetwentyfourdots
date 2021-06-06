import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { divider } from 'variables';
import SidePanel from 'components/SidePanel';
import _ from "lodash"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  ${props => props.height !== undefined && {"height": props.height} }
  position: relative;
`

const PageSection = forwardRef(({id, color, noSidePanel = false, bgColor, children, height, sidePanelBorderColor, width, widthCat, isWideScreen}, ref) => {

  return (
    <MainWrapper ref={ref} id={id} color={color} bgColor={bgColor} height={height}>
      { !noSidePanel && 
        <SidePanel 
          height="auto" 
          borderColor={sidePanelBorderColor || divider.light}
          hide={isWideScreen ? false:  true} 
        />
      }
      {children}
    </MainWrapper>
  )
})

export default PageSection;