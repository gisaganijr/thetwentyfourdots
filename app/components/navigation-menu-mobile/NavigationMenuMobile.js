import React from 'react';
import styled from 'styled-components';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { colors } from 'variables';
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Fade';

const StyledList = styled(({ ...other }) => <List {...other} />)`
    color: #4b4b4b;
    min-height: ${props => props.minHeight}px;
    margin-bottom: ${props => props.bottomMargin ? '24px' : 'unset'}!important;
`;

const StyledListItem = styled(({ ...other }) => <ListItem {...other} />)`
    &.MuiListItem-root { 
        padding-top: 14px;
        padding-bottom: 0px;
        display: block;
        text-align: center;
    }
    &.gutters {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

const StyledLink = withReveal(styled.a`
    color: #4b4b4b;
    font-family: 'Gotham-ExtraLight';
    display: inline-block;
    &:after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: ${colors.yellow};
        transition: width .3s;
        
    }
    &:hover {
        cursor: pointer;
        &:after {
            width: 100%;
        }
    }
`, <Fade left duration={700} />);;

export function NavigationMenuMobile(props) {
    function onNavigate(url) {
        props.push(url);
        props.toggleDrawer();
    }

    return (
        <StyledList {...props}>
            <StyledListItem>
                <StyledLink onClick={() => onNavigate('/app')}>
                    HOME
                </StyledLink>
            </StyledListItem>
            <StyledListItem>
                <StyledLink>ABOUT US</StyledLink>
            </StyledListItem>
            <StyledListItem>
                <StyledLink>WHAT WE DO</StyledLink>
            </StyledListItem>
            <StyledListItem>
                <StyledLink>WORK</StyledLink>
            </StyledListItem>
            <StyledListItem>
                <StyledLink>LET'S TALK</StyledLink>
            </StyledListItem>
        </StyledList>
    )
}
