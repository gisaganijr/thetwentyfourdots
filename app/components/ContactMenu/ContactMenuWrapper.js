import styled from 'styled-components';
import { margin } from 'variables';

const ContactMenuWrapper = styled.div`
    position: fixed;
    bottom: ${margin.page.bottom};
    right: ${margin.page.right};
    z-index: 99999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;   

export default ContactMenuWrapper;