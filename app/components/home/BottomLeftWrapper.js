import React from 'react';
import styled from 'styled-components';
import { colors, colorSettings } from 'variables';

const BottomLeftWrapper = styled.div`
  display: flex;
  width: 50%;
  min-width: 50%;
  max-width: 50%;
  align-items: flex-end;
  justify-content: flex-start;
  position: absolute;
  bottom: 8px;
  left: 16px;
  color: ${colorSettings.primary.normal};
  > p {
    font-size: 12px;
    font-family: 'Gotham-ExtraLight';
    text-align: justify;
    margin: 0px;
    margin-left: 3px;
    margin-bottom: 1.5px;
  }
`
export default BottomLeftWrapper;