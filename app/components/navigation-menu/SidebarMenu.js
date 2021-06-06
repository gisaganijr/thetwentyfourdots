import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import styled from 'styled-components';
import { SwipeableDrawer } from '@material-ui/core';
import CustomIconButton from 'components/CustomIconButton';
import { makeStyles  } from '@material-ui/core/styles';
import { colors, iconSizeConfig, sidebarDrawerTransitionDuration, margin } from 'variables';
import { ReactComponent as MenuCloseSlider } from 'images/menu_close_slider_circle.svg';
import { PrimaryIcon } from "components/icons/PrimaryIcon";

const useStyles = makeStyles(theme => ({
  backdrop: {
    opacity: '0!important'
  },
  paper: {
    opacity: '0.90!important'
  }
}))

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

function CloseMenuIcon({hide = false, onClick}) {
  const MenuOpenSliderIcon = PrimaryIcon(MenuCloseSlider, iconSizeConfig.large);
  
  if (hide) return null;

  return (
    <MenuIconWrapper>
      <CustomIconButton 
        style={{ position: 'absolute', left: margin.page.left }} 
        onClick={onClick} edge="start" 
        color={colors.white}
        aria-label="menu" icon={MenuCloseSlider }
      />
    </MenuIconWrapper>
  )
}

const SidebarMenuWrapper = styled.div`
  width: ${props => props.width}px;
  height: 100%;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SidebarMenu({push, open, onClose, width}) {
  const classes = useStyles();

  return (
      <SwipeableDrawer 
          open={open} 
          onClose={onClose} 
          transitionDuration={{enter: sidebarDrawerTransitionDuration.enter, exit: sidebarDrawerTransitionDuration.exit}}
          ModalProps={{
            BackdropProps:{
              classes:{
                root:classes.backdrop
              }
            }
          }}
          PaperProps={{
            classes:{
              root:classes.paper
            }
          }}
        >
          <SidebarMenuWrapper width={width} bgColor={colors.medDarkGray}>
            <CloseMenuIcon onClick={onClose} />
            <NavigationMenu color={colors.white} onClose={onClose} location={location} push={push}/>
          </SidebarMenuWrapper>
      </SwipeableDrawer>
  )
}

export default SidebarMenu;