import React from 'react';
import styled from 'styled-components';
import { SliderThemeIcon } from "components/icons/SliderThemeIcon";
import { PrimaryIcon } from "components/icons/PrimaryIcon";
import { ReactComponent as CircleMenuOutline } from 'images/dots_circle_menu_outline.svg';
import { ReactComponent as CircleMenu } from 'images/dots_circle_menu.svg';
import { iconSizeConfig, margin } from 'variables'
import BottomLeftWrapper from './BottomLeftWrapper';


export function BottomLeft({
  outline, push, hideContactUs, sliderTheme, slideIndex, toggleDrawer, selectedSlider, changeSlide, hideSliderNavigation, chipLabel
}) {
  const CircleMenuOutlineIcon = sliderTheme ? SliderThemeIcon(CircleMenuOutline, selectedSlider, iconSizeConfig.extraSmall ) : PrimaryIcon(CircleMenuOutline, iconSizeConfig.extraSmall);
  const CircleMenuIcon = sliderTheme ? SliderThemeIcon(CircleMenu, selectedSlider, iconSizeConfig.extraSmall) : PrimaryIcon(CircleMenu, iconSizeConfig.extraSmall) ;
  
  return ( 
    <BottomLeftWrapper>
        <CircleMenuIcon />
        <p>To discover our projects, just send us an email.</p>
    </BottomLeftWrapper>
  )
}
