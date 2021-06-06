import React from 'react';
import styled from 'styled-components';
import P from 'components/P';
import { contentMargin, colors, outlinedButton } from 'variables';
import { Link } from '@material-ui/core';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  color: ${colors.white};
`;

const ItemTextMobile = ({portfolio, isWideScreen, push }) => {

  if (isWideScreen) 
    return null;
    
  return (
    <MainWrapper>
        <Link 
          href="#" 
          color="inherit" 
          onClick={(e) => {
            e.preventDefault();

            push(`/portfolio/${portfolio.name}`)}
          }
        >
          <P fontType="medium" noMargin header size="xs" fontSizeLineHeight>{portfolio.title}</P>
        </Link>
    </MainWrapper>
  )

}

export default React.memo(ItemTextMobile);