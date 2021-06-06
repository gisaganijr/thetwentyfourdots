import React from 'react';
import styled from 'styled-components';
import { Chip } from '@material-ui/core';
import { colorSettings } from 'variables'

const CustomChip = styled(({ ...other }) => <Chip {...other} variant="outlined" />)
`
    border: 1px solid ${colorSettings.primary.normal}!important;
    max-width: ${props => props.maxWidth}
`;


export default CustomChip;
