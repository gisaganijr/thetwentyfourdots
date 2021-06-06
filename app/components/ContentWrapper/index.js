

import styled from 'styled-components';
import { pageContentMargin, pageContentMarginSmall, margin } from 'variables';

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${props => props.alignItems && {"align-items" : props.alignItems}};
  ${props => props.justifyContent && {"justify-content" : props.justifyContent}};
  padding: ${props => props.isWideScreen ? pageContentMargin : pageContentMarginSmall }};
  ${props => props.noPadding && { "padding": "0" }}
` 

export default ContentWrapper;