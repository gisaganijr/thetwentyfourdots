import React, { forwardRef } from 'react';
import Item from './Item';
import { mapKeys } from "lodash";
import { contentMargin, colors, divider } from 'variables';
import ContentWrapper from 'components/ContentWrapper';
import PageSection from 'components/PageSection';

const Items = forwardRef(({portfolios, width, widthCat, isWideScreen, push, loadedImage}, ref) => {
  let _portfolios = []; 
  mapKeys(portfolios, (portfolio, key) => {
    if (portfolio.visibleOnHomepage === true)
      _portfolios.push({name: key, ...portfolio});
  })

  return (
    <PageSection 
      ref={ref} id='portfolio'
      sidePanelBorderColor={divider.dark}
      widthCat={widthCat} isWideScreen={isWideScreen}
      noSidePanel={true}
    >
      <ContentWrapper 
        isWideScreen={isWideScreen} widthCat={widthCat} noPadding
      >
        {
          _portfolios.map((portfolio, idx) => (
            <Item 
              key={idx} itemNo={idx} 
              widthCat={widthCat} portfolio={portfolio} 
              marginTop={idx !== 0 ? true : false} isWideScreen={isWideScreen} 
              push={push}
            />
          ))
        }
      </ContentWrapper>
    </PageSection>
  )
})

export default Items;