import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { colors, contentMargin, divider, appBarMinHeight } from 'variables';
import ContentWrapper from 'components/ContentWrapper';
import ContentInnerWrapper from 'components/ContentInnerWrapper';
import CustomOutlinedButton from 'components/CustomButton/CustomOutlinedButton';
import PointerTitle from 'components/PointerTitle';
import PageSection from 'components/PageSection';
import P from 'components/P';
import { getHeaderTextSize } from 'helpers';

const ContactUs = forwardRef(({width, widthCat, isWideScreen, isLogoColoured, portfolio, push}, ref) => {

  return (
    <PageSection 
      ref={ref} id='contact-us'
      color={colors.white}
      bgColor={colors.turquoise}
      sidePanelBorderColor={divider.light}
      widthCat={widthCat} isWideScreen={isWideScreen}
      height='100%'
    >
      <ContentWrapper isWideScreen={isWideScreen} widthCat={widthCat}>
        <ContentInnerWrapper isWideScreen={isWideScreen}>
          <div style={{ width: '100%' }}>
            <P 
              size="lg"
              header
              widthCat={widthCat}
              fontType="bold"
              noMargin={true} 
              style={{ color: colors.white }}
            >
              Interested?
            </P>
            <P noMargin title size="sm">
              Need graphic design services, modeling assets, or 3d visualization in your company? Let’s have a chat.
            </P>
            <div style={{ marginTop: contentMargin }}>
              <CustomOutlinedButton color={colors.white} size="small" onClick={() => push('/contact-us')}>
                Write to us
              </CustomOutlinedButton> 
            </div> 
          </div>
        </ContentInnerWrapper>
      </ContentWrapper>
    </PageSection>
  )
})

export default ContactUs;