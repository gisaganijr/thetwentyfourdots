import React from 'react';
import { NavigationMenu } from './NavigationMenu';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';
import CustomIconButton from 'components/CustomIconButton';
import { makeStyles  } from '@material-ui/core/styles';
import { colors, iconSizeConfig, sidebarDrawerTransitionDuration, smallMargin } from 'variables';
import { ReactComponent as MenuCloseSlider } from 'images/menu_close_slider_circle.svg';
import { PrimaryIcon } from "components/icons/PrimaryIcon";

const useStyles = makeStyles(theme => ({
  backdrop: {
    opacity: '0!important'
  },
  paper: {
    opacity: '0.75!important'
  }
}))

const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${smallMargin.page.top};
  right: ${smallMargin.page.right};
  z-index: 999;
`

function CloseMenuIcon({hide = false, onClick}) {
  const MenuOpenSliderIcon = PrimaryIcon(MenuCloseSlider, iconSizeConfig.large);
  
  if (hide) return null;

  return (
    <MenuIconWrapper>
      <CustomIconButton 
        onClick={onClick} edge="start" 
        color={colors.white}
        aria-label="menu" icon={MenuCloseSlider }
      />
    </MenuIconWrapper>
  )
}

const MenuWrapper = styled.div`
  width: ${props => props.width}px;
  height: 100%;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MobileMenu({push, open, onClose, width, location}) {
  const classes = useStyles();

  return (
      <Dialog 
          open={open} 
          onClose={onClose} 
          fullScreen
          //transitionDuration={{enter: sidebarDrawerTransitionDuration.enter, exit: sidebarDrawerTransitionDuration.exit}}
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
            <MenuWrapper width={width} bgColor={colors.medDarkGray}>
              <CloseMenuIcon onClick={onClose} />
              <NavigationMenu color={colors.white} onClose={onClose} location={location} push={push} />
            </MenuWrapper>
      </Dialog>
  )
}

export default MobileMenu;