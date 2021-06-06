import styled from 'styled-components';
import { margin } from 'variables';

const NavigationMenuWrapper = styled.div`
  position: absolute;
  top: ${margin.page.top};
  left: ${margin.page.left};
  z-index: 999
`;

export default NavigationMenuWrapper;