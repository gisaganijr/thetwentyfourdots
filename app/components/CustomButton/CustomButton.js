import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { iconColorConfig, iconSizeConfig, colors } from 'variables';

const CustomButton = styled(({ ...other }) => <Button {...other} />)`
    border-radius: 40px!important;
    ${props => props.bold && { "font-family": "Gotham Medium Regular!important"}};
    margin-right: 0px!important;
`;

export default CustomButton;
