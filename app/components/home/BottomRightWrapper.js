import React from 'react';
import styled from 'styled-components';
import { colors, colorSettings } from 'variables';

const BottomRightWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  width: 50%;
  min-width: 50%;
  max-width: 50%;
  bottom: 8px;
  right: 16px;
  color: ${colorSettings.primary.normal};
  > p {
    font-size: 12px;
    font-family: 'Gotham-ExtraLight';
    margin: 0px;
  }
`
export default BottomRightWrapper;