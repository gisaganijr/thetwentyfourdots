import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  iconRoot: props => ({
    width: '100%',
    height: '100%',
  }),
}));

function KnowHowEnvironment(props) {
  const classes = useStyles();

  return (
    <SvgIcon 
      viewBox="0 0 180.22 180.22"
      color={props.color}
      classes={{
        root: classes.iconRoot
      }}
    >
      <path class="st0" d="M90.11,180.22C40.42,180.22,0,139.8,0,90.11S40.42,0,90.11,0s90.11,40.42,90.11,90.11
        S139.8,180.22,90.11,180.22z M90.11,0.75c-49.27,0-89.36,40.09-89.36,89.36c0,49.27,40.09,89.36,89.36,89.36
        s89.36-40.09,89.36-89.36C179.47,40.84,139.39,0.75,90.11,0.75z"/>
      <g>
        <path class="st0" d="M90.14,46.02l37.89,21.24l-37.89,20.3l-37.95-20.3L90.14,46.02 M90.14,44.87L50.11,67.28l40.03,21.41
          l39.97-21.41L90.14,44.87L90.14,44.87z"/>
        <path class="st0" d="M129.11,68.95v43.09l-37.97,21.59V89.29L129.11,68.95 M130.11,67.28L90.14,88.69v46.66l39.97-22.73V67.28
          L130.11,67.28z"/>
        <path class="st0" d="M51.11,68.95l38.03,20.34v44.36l-38.03-21.29V68.95 M50.11,67.28v45.66l40.03,22.41V88.69L50.11,67.28
          L50.11,67.28z"/>
        <path class="st0" d="M90.13,110.22l-16.5-9.6V79.81l16.48-9.37l16.52,9.36V101L90.13,110.22z M75.63,99.47l14.52,8.45l14.48-8.09
          V80.98l-14.52-8.23l-14.49,8.23V99.47z"/>
        <g>
          <rect x="89.64" y="45.69" class="st0" width="1" height="1.5"/>
          <path class="st0" d="M90.64,66.82h-1v-3.27h1V66.82z M90.64,60.28h-1v-3.27h1V60.28z M90.64,53.73h-1v-3.27h1V53.73z"/>
          <rect x="89.64" y="70.1" class="st0" width="1" height="1.5"/>
        </g>
        <g>
          <rect x="105.81" y="100" transform="matrix(0.4391 -0.8984 0.8984 0.4391 -30.8884 152.014)" class="st0" width="1" height="1.5"/>
          <path class="st0" d="M125.02,110.45l-3.04-1.49l0.44-0.9l3.04,1.49L125.02,110.45z M118.94,107.47l-3.04-1.49l0.44-0.9l3.04,1.49
            L118.94,107.47z M112.85,104.5l-3.04-1.49l0.44-0.9l3.04,1.49L112.85,104.5z"/>
          <rect x="128.46" y="111.07" transform="matrix(0.4391 -0.8984 0.8984 0.4391 -28.1272 178.5795)" class="st0" width="1" height="1.5"/>
        </g>
        <g>
          <rect x="73.21" y="99.89" transform="matrix(0.8895 -0.457 0.457 0.8895 -37.7003 44.89)" class="st0" width="1.5" height="1"/>
          <path class="st0" d="M54.68,110.85l-0.46-0.89l2.36-1.21l0.46,0.89L54.68,110.85z M59.39,108.43l-0.46-0.89l2.36-1.21l0.46,0.89
            L59.39,108.43z M64.1,106.01l-0.46-0.89l2.36-1.21l0.46,0.89L64.1,106.01z M68.81,103.6l-0.46-0.89l2.36-1.21l0.46,0.89
            L68.81,103.6z"/>
          <rect x="50.67" y="111.46" transform="matrix(0.8895 -0.457 0.457 0.8895 -45.4754 35.8704)" class="st0" width="1.5" height="1"/>
        </g>
      </g>
    </SvgIcon>
  );
}

export default KnowHowEnvironment;