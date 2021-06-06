import React, {useState} from 'react';
import styled, { keyframes }  from 'styled-components';
import { ReactComponent as LogoHorizontal } from './logo-horizontal.svg';
import { colors } from 'variables';

const pulse = keyframes`
    fill: linear-gradient(to right, red 50%, blue 50%);
`;
// 0% {
//     fill: ${colors.blue};
//   }
//   50% {
//     fill: ${colors.red};
//   }
//   100% {
//     fill: ${colors.yellow};
//   }
const StyledIcon = styled.div`
    
`;

//animation: ${pulse} 4s;

const StyledLogoHorizontal = styled(LogoHorizontal)`
    width: 300px;
    .logo-horizontal_svg__st0 {
        animation: ${pulse} 4s;
    }
`;

export default function LogoHorizontalIcon() {
    
    const [hover, setHover] = useState(false);

    return (  
        <StyledIcon 
            customStyle={
                hover ? {
                    backgroundColor: colors.red,
                    width: 150,
                    height: 150
                }
                : {
                    backgroundColor: colors.yellow,
                    width: 150,
                    height: 150
                }
            }
        >
            <StyledLogoHorizontal 
                onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} 
                width={150}
                height={150} 
            />
        </StyledIcon>  
    );
}
