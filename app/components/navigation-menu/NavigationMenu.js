import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link, List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { colors, colorSettings } from 'variables';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';
import { push } from 'connected-react-router';
import { margin } from 'variables';

const NavigationMenuWrapper = styled.div`
  width: 250px;
`;

const StyledLink = styled.a`
  //color: ${colorSettings.primary.normal};
  color: ${props => props.color};
  font-family: 'Gotham-ExtraLight';
  display: inline-block;
  font-size: 1.5rem;
  font-family: 'Gotham-Bold';
  &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: ${props => props.hoverColor};
      transition: width .3s;
      
  }
  &:hover {
      cursor: pointer;
      &:after {
          width: 100%;
      }
  }
`;

export function NavigationMenu(props) {
    const { location, push, onClose } = props;
    const disabledContactUs = location && location.pathname !== '/contact-us' ? false : true;
    const linkProps = {
      color: props.color || colors.white,
      hoverColor: props.sliderTheme ?  props.selectedSlider.bgColor : colors.yellow
    }

    function handleClick(path) {
      if (push) push(path);
      if (onClose) onClose();
    }
    
    return ( 
      <MuiThemeProvider theme={getMuiTheme}>
        <List>
          <ListItem>
            <StyledLink {...linkProps} onClick={() => handleClick('/')}>HOME
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink {...linkProps} onClick={() => handleClick('/about-us')}>ABOUT US
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink {...linkProps} onClick={() => handleClick('/what-we-do')}>WHAT WE DO
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink {...linkProps} onClick={() => handleClick('/our-work')}>WORK
            </StyledLink>
          </ListItem>
          <ListItem 
            disabled={disabledContactUs}
          >
            <StyledLink 
              {...linkProps} 
              {...disabledContactUs && {hoverColor: undefined}}
              style={ disabledContactUs ? { cursor: 'default' } : null}
              onClick={() => {
                if (disabledContactUs)
                  e.preventDefault();

                handleClick('/contact-us')}
              }>LET'S TALK
            </StyledLink>
          </ListItem>
        </List>
      </MuiThemeProvider>
    )
}

const getMuiTheme = createMuiTheme({
    overrides: {
        MuiList: {
            root: {
                color: '#4b4b4b'
            },
            padding: {
                paddingTop: '0px',
                paddingBottom: '0px',
            }
        },
        MuiListItem: {
            root: {
                paddingTop: "10px!important",
                paddingBottom: "10px!important"
            },
            gutters: {
                paddingLeft: '0px',
                paddingRight: '0px'
            }
        }
    },
});
