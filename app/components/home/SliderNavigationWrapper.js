import styled from 'styled-components';
import { margin } from 'variables';

const SliderNavigationWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: ${margin.page.right};
`
export default SliderNavigationWrapper;