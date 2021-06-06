import React from 'react';
import styled from 'styled-components';
import { SliderThemeIcon } from "components/icons/SliderThemeIcon";
import { PrimaryIcon } from "components/icons/PrimaryIcon";
import { ReactComponent as CircleMenuOutline } from 'images/dots_circle_menu_outline.svg';
import { ReactComponent as CircleMenu } from 'images/dots_circle_menu.svg';
import { iconSizeConfig, globalTexts } from 'variables'
import BottomRightWrapper from './BottomRightWrapper';


export function BottomRight() {
  return ( 
    <BottomRightWrapper>
      <p>{globalTexts.copyright}</p>
    </BottomRightWrapper>
  )
}
