import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  iconRoot: props => ({
    width: '100%',
    height: '100%',
  }),
}));

function WhatWeDo3D(props) {
  const classes = useStyles();

  return (
    <SvgIcon 
      viewBox="0 0 80 90.48"
      color={props.color}
      classes={{
        root: classes.iconRoot
      }}
    >
      <g>
        <path class="st0" d="M40.03,1.15l37.89,21.24l-37.89,20.3L2.08,22.39L40.03,1.15 M40.03,0L0,22.41l40.03,21.41L80,22.41L40.03,0
          L40.03,0z"/>
        <path class="st0" d="M79,24.08v43.09L41.03,88.76V44.42L79,24.08 M80,22.41L40.03,43.82v46.66L80,67.75V22.41L80,22.41z"/>
        <path class="st0" d="M1,24.08l38.03,20.34v44.36L1,67.49V24.08 M0,22.41v45.66l40.03,22.41V43.82L0,22.41L0,22.41z"/>
        <path class="st0" d="M40.02,65.35l-16.5-9.6V34.94L40,25.57l16.52,9.36v21.2L40.02,65.35z M25.52,54.6l14.52,8.45l14.48-8.09V36.11
          L40,27.88l-14.49,8.23V54.6H25.52z"/>
        <g>
          <rect x="39.53" y="0.82" class="st0" width="1" height="1.5"/>
          <path class="st0" d="M40.53,21.95h-1v-3.27h1V21.95z M40.53,15.41h-1v-3.27h1V15.41z M40.53,8.86h-1V5.59h1V8.86z"/>
          <rect x="39.53" y="25.23" class="st0" width="1" height="1.5"/>
        </g>
        <g>
          <rect x="55.7" y="55.12" transform="matrix(0.4391 -0.8984 0.8984 0.4391 -18.6798 81.8275)" class="st0" width="1" height="1.5"/>
          <path class="st0" d="M74.91,65.58l-3.04-1.49l0.44-0.9l3.04,1.49L74.91,65.58z M68.83,62.6l-3.04-1.49l0.44-0.9l3.04,1.49
            L68.83,62.6z M62.74,59.63l-3.04-1.49l0.44-0.9l3.04,1.49L62.74,59.63z"/>
          <rect x="78.35" y="66.2" transform="matrix(0.4391 -0.8984 0.8984 0.4391 -15.9269 108.392)" class="st0" width="1" height="1.5"/>
        </g>
        <g>
          <rect x="23.11" y="55.02" transform="matrix(0.8895 -0.457 0.457 0.8895 -22.734 17.0377)" class="st0" width="1.5" height="1"/>
          <path class="st0" d="M4.57,65.98l-0.46-0.89l2.36-1.21l0.46,0.89L4.57,65.98z M9.28,63.56l-0.46-0.89l2.36-1.21l0.46,0.89
            L9.28,63.56z M13.99,61.14l-0.46-0.89l2.36-1.21l0.46,0.89L13.99,61.14z M18.7,58.73l-0.46-0.89l2.36-1.21l0.46,0.89L18.7,58.73z"
            />
          <rect x="0.57" y="66.59" transform="matrix(0.8895 -0.457 0.457 0.8895 -30.5134 8.0177)" class="st0" width="1.5" height="1"/>
        </g>
      </g>
    </SvgIcon>
  );
}

export default WhatWeDo3D;