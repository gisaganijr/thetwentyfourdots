import React, {useState} from 'react';
import styled from 'styled-components';
import { iconColorConfig, iconSizeConfig } from 'variables'

const StyledIcon = styled.div`
    color: ${props => props.slider.bgColor};
    :hover {
        color: ${props => props.slider.bgColor};
    }
`;

export function SliderThemeIcon(IconComponent, slider, props) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
        }
        render() {
          // Wraps the input component in a container, without mutating it. Good!
          return (
            <StyledIcon slider={slider}
            >
                <IconComponent
                    {...props}
                    {...!props ? iconSizeConfig.small : null}
                />
            </StyledIcon>  
          )
        }
    }
}


