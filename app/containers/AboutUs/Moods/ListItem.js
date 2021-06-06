import React from 'react';
import styled from 'styled-components';
import { colors, borderColor } from 'variables';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, Grid } from '@material-ui/core';
import { ReactComponent as CircleFilled } from 'images/CircleFilled.svg';
import {useTransition, useSpring, config, animated } from 'react-spring'
import CustomSVG from 'components/CustomSVG';

const useStyles = makeStyles(theme => ({
  itemTextRoot: { 
    marginTop: '6px!important'
  }
}));

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0px;
`

const ListItem = ({isWideScreen, idx, title, aniProps}) => {
  const classes = useStyles();

  return (
    <Grid item sm={6} xs={12} style={{width: '100%'}}>
      <ItemWrapper
        style={{
          ...aniProps ? {...aniProps} : { opacity: 0 } 
        }}
      >
        <div style={{color: colors.yellow, width: '20px', height: 'auto'}}>
          <CustomSVG 
            component={CircleFilled} 
            viewBox="0 0 25 25"
            //width="25"
            //height="25"
          />
        </div>
        <p style={{ margin: '0px', padding: '0px 18px' }}>{title}</p>
      </ItemWrapper>
    </Grid>
  )
}

export default React.memo(ListItem);