import styled from 'styled-components';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: ${props => props.width ? props.width : '40%'};;
  ${props => props.marginBottom !== undefined && {"margin-bottom": props.marginBottom}}
`;

export default TextWrapper;
