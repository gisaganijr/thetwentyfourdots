import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  iconRoot: props => ({
    width: '53.19px',
    height: '14.83px',
  }),
}));

function PointerIcon(props) {
  const classes = useStyles();

  return (
    <SvgIcon 
      viewBox="0 0 53.19 14.83"
      classes={{
        root: classes.iconRoot
      }}
    >
      <path class="st0" d="M50.38,8.48V0H0v0.75h49.62v7.73C48.04,8.67,46.8,10,46.8,11.63c0,1.76,1.43,3.19,3.19,3.19
	      s3.19-1.43,3.19-3.19C53.19,10,51.96,8.67,50.38,8.48z"/>
    </SvgIcon>
  );
}

export default PointerIcon;