import React, { useEffect, useLayoutEffect , useRef, forwardRef } from "react";
import { colors } from 'variables';
import GridLayout from 'react-grid-layout';
import ImageItem from './ImageItem';
import TextItem from './TextItem';
import { generateGridItems } from 'helpers';
import { isEqual } from 'lodash';

const rowHeight = 12;

const ListItems = forwardRef(({
  width, height, widthCat, isWideScreen, 
  portfolio, selPortfolioName, layout, 
  changeLayoutHeight, updateGridItems, loadedImage, showPreloader
}, ref) => {
  const list = portfolio && portfolio.gridItems;

  useLayoutEffect(() => {
    generateLayout();
  })

  useEffect(() => {
    generateLayout();
  }, [list, width])
  
  async function generateLayout() {
    const updatedGridItems = await generateGridItems(list, rowHeight, window.innerWidth, isWideScreen);
    if (!isEqual(list, updatedGridItems))
      updateGridItems(selPortfolioName, updatedGridItems, isWideScreen);
  }

  if (!list || (list && list.length === 0) || !layout || (layout && layout.length === 0))
    return null;
  
  return (
    <div>
      <div ref={ref}>
        <GridLayout 
          layout={layout}
          className="layout" 
          cols={12} 
          rowHeight={rowHeight} 
          width={width} 
          margin={[0, 0]}  
          preventCollision={true}
          isDraggable={false}
          isResizable={false}
        >
          {
            list.map((item, idx) => {
              const itemProps = { 
                key: item.itemId,
                portfolioId: portfolio.itemNo, 
                selPortfolioName, 
                gridItems: list, 
                item, width, widthCat, isWideScreen, height, 
                changeLayoutHeight, loadedImage, rowHeight, layouts: layout
              };

              return (
                <div 
                  key={item.itemId} 
                  data-grid={isWideScreen ? item.layout : item.smLayout || item.layout} 
                  style={
                    item.image ? { } : { backgroundColor: colors[item.bgColor] }
                  }
                >
                  { item.image 
                    ? 
                      <ImageItem {...itemProps} />
                    :
                      <TextItem {...itemProps} />
                  }
                </div>
              )
            })
          }
        </GridLayout>
      </div>
    </div>
  )
})

export default React.memo(ListItems);
