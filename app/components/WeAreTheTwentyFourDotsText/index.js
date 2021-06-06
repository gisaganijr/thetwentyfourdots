import React from 'react';
import styled from 'styled-components';
import { colors } from 'variables';

const StyledText = styled.h2`
  color: ${props => props.color};
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row
`;

const WeAreTheTwentyFourDotsText = ({children, widthCat, marginBottom}) => {
  return (
    <>
      <span style={{color: colors.orange}}>the</span>
      <span style={{color: colors.yellow}}>twenty</span>
      <span style={{color: colors.turquoise}}>four</span>
      <span style={{color: colors.cyan}}>dots</span>
    </>
  )
}

export default WeAreTheTwentyFourDotsText;