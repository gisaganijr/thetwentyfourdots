import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { iconColorConfig, iconSizeConfig, colors } from 'variables';

const CustomGrid = styled(({ ...other }) => <Grid {...other} />)`
    ${props => props.flex && { 
      "display": "flex",
      ...props.flexDirection && {"flex-direction": props.flexDirection},
      ...props.alignItems && {"align-items": props.alignItems},
      ...props.justifyContent && {"justify-content": props.justifyContent},
    }};
`;

export default CustomGrid;
