import React, { forwardRef } from 'react';
import { contentMargin, divider, colors, margin } from 'variables'
import styled from 'styled-components';
import PageSection from 'components/PageSection';
import ContentWrapper from 'components/ContentWrapper';
import P from 'components/P';
import { getHeaderTextSize } from 'helpers';
import ContactMenu from 'components/ContactMenu/ContactMenu';
import Copyright from 'components/Copyright';

const ContactMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${contentMargin}
`

const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Footer = forwardRef(({children, isWideScreen, widthCat, bgColor, height, hide}, ref) => {

  if (hide)
    return null;
    
  return (
    <PageSection 
      ref={ref} id='footer'
      bgColor={colors.veryDarkGray}
      sidePanelBorderColor={divider.light}
      widthCat={widthCat} isWideScreen={isWideScreen}
    >
      <ContentWrapper isWideScreen={isWideScreen} widthCat={widthCat}>
        <P 
          fontType="bold"
          size="lg" 
          widthCat={widthCat}
          noMargin={true} 
          header
          style={{ color: colors.veryDarkGray }}
        >
          <span style={{color: colors.yellow}}>Let's</span>&nbsp;
          <span style={{color: colors.white}}>do this, We are ready!</span>
        </P>
        <P style={{color: colors.white}}>Say Hello, We'd love to hear from you and discover unconventional ideas together.</P>
        { !isWideScreen && 
          <>
            <ContactMenuWrapper>
              <ContactMenu marginRight={true} />
            </ContactMenuWrapper> 
            <CopyrightWrapper>
              <Copyright size="xs" style={{ color: colors.white}} rotated={false} />
            </CopyrightWrapper>
          </>
        }
      </ContentWrapper>
    </PageSection>
  )
})

export default Footer;