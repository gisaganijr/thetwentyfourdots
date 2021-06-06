

import styled from 'styled-components';
import { margin } from 'variables';

const ContentInnerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => props.alignItems && {"align-items" : props.alignItems}};
  ${props => props.justifyContent && {"justify-content" : props.justifyContent}};
  ${props => props.flexDirection && {"flex-direction" : props.flexDirection}};
  //padding: ${props => props.isWideScreen ? '4rem 4rem' : '2rem 2rem'};
` 

export default ContentInnerWrapper;