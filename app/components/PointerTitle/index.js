import React from 'react';
import styled from 'styled-components';
import { contentMarginSmall, contentMargin, colors} from 'variables';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, Grid } from '@material-ui/core';
import { ReactComponent as Pointer } from 'images/Pointer.svg';
import PointerIcon from './icon';
import P from 'components/P';

const useStyles = makeStyles(theme => ({
  itemTextRoot: { 
    marginTop: '6px!important'
  }
}));

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  //margin-bottom: ${props => props.isWideScreen ? contentMargin : contentMarginSmall};
  margin-bottom: 1rem;
`

const PointerTitle = ({color, iconColor, isWideScreen, idx, title}) => {
  const classes = useStyles();

  return (
    <ItemWrapper isWideScreen={isWideScreen}>
      <P size='xs' style={{ color: color, margin: '0px', marginRight: '10px', fontSize: '0.675rem' }}>{title}</P>
      <div style={{color: iconColor || color, marginTop: '10px'}}>
        <SvgIcon component={PointerIcon} />
      </div>
    </ItemWrapper>
  )
}

export default PointerTitle;