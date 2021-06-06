/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors, iconColorConfig, iconSizeConfig } from 'variables';
import { SvgIcon, IconButton } from '@material-ui/core';
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import { muiOverrides } from 'global-mui-overrides';
import { ReactComponent as ArrowUp } from 'images/dots_arrow_up.svg';
import { omit } from 'lodash';

const useStyles = makeStyles(theme => ({
  label: props => ({
    color: props.color || colors.white,
    //width: props.iconSize === 'xs' ? '0.75em' : '1em',
    //height: props.iconSize === 'xs' ? '0.75em' : '1em',
  }),
  svgRoot: props => ({
    overflow: 'visible!important',
    //width: props.iconSize === 'xs' ? '0.75em' : '1em',
    //height: props.iconSize === 'xs' ? '0.75em' : '1em',
  }),
}));

const CustomIconButton = forwardRef((props, ref) => {
  const { icon, color, iconSize } = props;
  const classes = useStyles({ color, iconSize });
  // const propsToImport = _.pick([], props);

  return (
    <IconButton
      ref={ref}
      {...omit(props, ['color', 'icon', 'iconSize'])}
      classes={{
        label: classes.label,
      }}
    >
      <SvgIcon classes={{ root: classes.svgRoot }} component={icon} width="25" height="25" viewBox="0 0 25 25" />
    </IconButton>
  );
});

// const getMuiTheme = createMuiTheme({
//   overrides: {
//       ...muiOverrides,
//       MuiSvgIcon: {
//         root: {
//           width: '1.2em!important',
//           height: '1.2em!important',
//           fontSize: '1.2rem'
//         }
//       }
//   },
// });

export default CustomIconButton;
