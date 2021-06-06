import styled from 'styled-components';

const Title = styled.div` 
    font-family: 'Florsn43';
    color: ${props => props.color};
    font-size: ${props => props.isWideScreen ? '44px' : '32px'};
`;   

export default Title;