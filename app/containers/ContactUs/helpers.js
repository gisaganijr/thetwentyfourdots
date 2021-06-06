const getPrevSlide = (_slideIndex) => {
    console.log(`getPrevSlide for ${_slideIndex}`)
    if (parseInt(_slideIndex) === 1)
      return 4;
    else 
      return parseInt(_slideIndex) - 1
}

const getNextSlide = (_slideIndex) => {
    if (parseInt(_slideIndex) === 4)
      return 1;
    else 
      return parseInt(_slideIndex) + 1
}

export {
    getPrevSlide,
    getNextSlide,
};
  