import React from 'react';
import { SvgIcon } from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  iconRoot: props => ({
    width: '100%',
    height: '100%',
    display: 'block'
  }),
}));

function DashBig(props) {
  const classes = useStyles();

  return (
      <SvgIcon 
        viewBox="0 0 40 1"
        color={props.color}
        classes={{
          root: classes.iconRoot
        }}
      >
        <rect class="st0" width="40" height="1"/>
      </SvgIcon>
  );
}

export default DashBig;