import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { margin, smallMargin, colors } from 'variables';
import CustomIconButton from 'components/CustomIconButton';
import { ReactComponent as MenuOpenSlider } from 'images/menu_open_slider_circle.svg';

const MenuIconWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 9999;
  left: ${margin.page.left};
`

const MenuIconMobileWrapper = styled.div`
`

const MenuIcon = forwardRef(({hide, onClick, color, isWideScreen}, ref) => {
  if (hide) return null;

  if (isWideScreen)
    return (
      <MenuIconWrapper>
        <CustomIconButton ref={ref} onClick={onClick} edge="start" color={color || colors.white} aria-label="menu" icon={MenuOpenSlider} />
      </MenuIconWrapper>
    )

  return (
      <CustomIconButton ref={ref} onClick={onClick} edge="start" color={color || colors.white} aria-label="menu" icon={MenuOpenSlider} />
  )
  
})

export default MenuIcon;