
import React, {useState} from 'react';
import styled from 'styled-components';
import { iconColorConfig, iconSizeConfig } from 'variables'

const StyledIcon = styled.div`
    color: ${iconColorConfig.red.normal};
    :hover {
        svg {
            fill: ${iconColorConfig.red.hover};
        }
    }
`;

export function RedIcon(IconComponent, props) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
        }
        render() {
          // Wraps the input component in a container, without mutating it. Good!
          return (
            <StyledIcon 
            >
                <IconComponent
                    {...props}
                    {...!props ? iconSizeConfig.small : null}
                    {...props ? props.size === 'medium' ? iconSizeConfig.medium : null: null}
                />
            </StyledIcon>  
          )
        }
    }
}