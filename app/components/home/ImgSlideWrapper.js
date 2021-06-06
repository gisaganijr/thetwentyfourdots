import React from 'react';
import styled from 'styled-components';
import { includes } from "lodash"

const ImgSlideWrapper = styled.div`
  width: ${props => includes(['lg','md'], props.widthCat) ? props.width : '100%'};
  min-width: ${props => includes(['lg','md'], props.widthCat) ? props.width : '100%'};
  max-width: ${props => includes(['lg','md'], props.widthCat) ? props.width : '100%'};
  height: ${props => props.height};
  min-height: ${props => props.height};
  max-height: ${props => props.height};
  display: flex!important;
  align-items: center!important;
  justify-content: center!important;
  margin-bottom: ${props => props.bottomMargin ? '24px' : 'unset'};
`
export default ImgSlideWrapper;