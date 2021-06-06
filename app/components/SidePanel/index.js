import React from 'react';
import styled from 'styled-components';
import { colors, margin } from 'variables'
import PageDivider from 'components/PageDivider';

const MainWrapper = styled.div`
    width: 17%;
    height: ${props => props.height || '100%'};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    // top: 0px;
    // left: 0px;
    // height: 100%;
    padding-top:${margin.page.top};
    background-color: ${props => props.bgColor || 'transparent'};
`;

const SidePanel = ({children, borderColor, bgColor, height, hide, isLogoColoured = false}) => {

  if (hide)
    return null;
    
  return (
    <MainWrapper bgColor={bgColor} height={height}>
      {children}&nbsp;
      <PageDivider color={borderColor} />
    </MainWrapper>
  )
}

export default SidePanel;