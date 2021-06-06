

import styled from 'styled-components';
import { margin } from 'variables';

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${props => props.isWideScreen ? '4rem 4rem' : '2rem 2rem'};
` 

export default ContentWrapper;