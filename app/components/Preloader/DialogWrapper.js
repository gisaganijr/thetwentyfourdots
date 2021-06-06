import React, {useState} from 'react';
import { preLoaderBgColor } from 'variables';
import styled from 'styled-components';


const DialogWrapper = styled.div`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height:100%;
  min-height: 100%;
  display: flex!important;
  align-items: center!important;
  justify-content: center!important;
  background: ${preLoaderBgColor};
`

export default DialogWrapper;