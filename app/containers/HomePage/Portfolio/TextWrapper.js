import styled from 'styled-components';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  ${props => props.paddingLeft !== undefined && {"padding-left": props.paddingLeft}}
  ${props => props.paddingRight !== undefined && {"padding-right": props.paddingRight}}
  ${props => props.marginBottom !== undefined && {"margin-bottom": props.marginBottom}}
  ${props => props.marginTop !== undefined && {"margin-top": props.marginTop}}
`;

export default TextWrapper;
