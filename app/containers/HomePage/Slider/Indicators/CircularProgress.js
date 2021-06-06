import React from 'react';
import { colors , sliderInterval } from 'variables';
import CustomCircularProgress from 'components/CustomCircularProgress';

function CircularProgress({activeSlideIndex, keyId, dotColor, color, isActive = false, nextSlide}) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!isActive) {
      clearInterval(timer);
      setProgress(0);
      return;
    }
      
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => {
        if (oldProgress >= 200) 
          nextSlide();

        return oldProgress >= 200 ? 0 : oldProgress + 1
      });
      
    }

    const timer = setInterval(tick, 100);
    return () => {
      clearInterval(timer);
    };
    
  }, [activeSlideIndex]);

  return <CustomCircularProgress keyId={keyId} value={!isActive ? 0 : progress / 2} color={color} dotColor={dotColor} />;
}

export default CircularProgress;