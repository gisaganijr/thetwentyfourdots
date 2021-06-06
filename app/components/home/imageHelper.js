import slide1 from 'images/24DOTS_1-D Slider.svg';
import slide2 from 'images/24DOTS_2-O Slider.svg';
import slide3 from 'images/24DOTS_3-T Slider.svg';
import slide4 from 'images/24DOTS_4-S Slider.svg';

const getSlideImage = (_slideIndex) => {
    switch(_slideIndex) {
      case 1: 
        return slide1;
      case 2: 
        return slide2;
      case 3: 
        return slide3;
      case 4: 
        return slide4;
    }
}

export {
  getSlideImage
};
  