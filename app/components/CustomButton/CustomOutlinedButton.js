import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { iconColorConfig, iconSizeConfig, colors } from 'variables';
import { createMuiTheme , makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
  outlined: props => ({
    border: `1px solid ${props.borderColor}`,
  }),
  root: {
    borderRadius: '40px'
  },
  label: props => ({
    color: `${props.color}`
  })
}));

const CustomOutlinedButton = forwardRef((props, ref) => {
  const classes = useStyles({color: props.color, borderColor: props.borderColor || props.color});
  
  return (
      <CustomButton 
        ref={ref}
        disabled={props.disabled}
        variant="outlined"
        //className={`${classes.outlined} ${classes.root} ${classes.label}`}
        classes={{
          root: classes.root,
          outlined: classes.outlined,
          label: classes.label
        }} 
        size="small"
        onClick={props.onClick}
      >
        {props.children}
      </CustomButton>
  )
})

export default CustomOutlinedButton;
