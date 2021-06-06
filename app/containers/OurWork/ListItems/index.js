import React, { useLayoutEffect, useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";
import { isEqual } from 'lodash';
import { colors } from 'variables';
import GridLayout from 'react-grid-layout';
import ImageItem from './ImageItem';
import TextItem from './TextItem';
import { generateGridItems } from 'helpers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const rowHeight = 12;

const ListItems = forwardRef(({
  width, height, widthCat, isWideScreen, works, layout, 
  changeLayoutHeight, updateWorks, loadedImage,
  touchedWork, setTouchedWork, push
}, ref) => {
  const list = works;

  useLayoutEffect(() => {
    generateLayout();
  })

  useEffect(() => {
    generateLayout();
  }, [list, width])
  
  async function generateLayout() {
    const updatedWorks = await generateGridItems(list, rowHeight, window.innerWidth, isWideScreen);
    if (!isEqual(list, updatedWorks))
      updateWorks(updatedWorks, isWideScreen);
  }

  if (!list || (list && list.length === 0) || !layout || (layout && layout.length === 0))
    return (<>
      <p>list.length {list.length}</p>
      <p>layout.length {layout.length}</p>
    </>);

  return (
    <Wrapper ref={ref} id="list">
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
          works.map((item, idx) => {
            const finalSize = { width: item.width, height: item.height };
            const layout = isWideScreen ? item.layout : item.smLayout || item.layout;
            
            const itemProps = { 
              key: item.itemId,
              works, item, layout,
              imageOrigSize: finalSize, 
              width, widthCat, isWideScreen, height, 
              changeLayoutHeight, loadedImage, rowHeight, 
              touchedWork, setTouchedWork, push
            };

            return (
              <div 
                key={item.itemId} 
                data-grid={layout} 
                style={
                  item.image ? { overflow: "hidden" } : { backgroundColor: colors[item.bgColor] }
                }
                onMouseEnter={() => setTouchedWork(item.itemId)}
                onMouseLeave={() => setTouchedWork(null)}
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
    </Wrapper>
  )
})

export default React.memo(ListItems);
