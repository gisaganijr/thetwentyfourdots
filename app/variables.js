const colors = {
  white: '#ffffff',
  lightGray: '#f0f0f0',
  darkGray: '#7D7D7D',
  medDarkGray: '#4b4b4b',
  veryDarkGray: '#404040',
  red:'#da523a',
  strongRed: '#bd3b24',
  blue: '#00a4e4',
  black: '#000000',
  orange:'#da523a',
  yellow:'#fcb94d',
  turquoise: '#138e91',
  cyan: '#00a4e4',
  darkCyan: '#138e91'
}

const borderColor = {
  light: colors.lightGray,
  dark: colors.darkGray
}

const divider = {
  light: 'rgba(255, 255, 255, 0.10)',
  dark: 'rgba(0, 0, 0, 0.23)'
}

const outlinedButton = {
  light: { color: colors.white, borderColor: divider.light},
  dark: { color: colors.veryDarkGray, borderColor: divider.dark},
}

const button = {
  outlined: { 
    gray: { color: colors.medDarkGray, borderColor: divider.dark}
  }
}

const customLoadingIndicatorMinDelay = 1500;
const imageCurtainColor = colors.veryDarkGray;
const preLoaderBgColor = colors.veryDarkGray;
const taglineColor = colors.medDarkGray;
const coverBgColor = colors.lightGray;
const appBgColor = colors.white;
const appBarMinHeight = 56;
const appBarPadding = '12px 12px 12px 24px'

const colorSettings = {
  primary: { normal: colors.darkGray, hover: colors.medDarkGray },
	red: { normal: colors.red, hover: colors.strongRed }
}

const contentMarginSmall = '1rem';
const pageContentMargin = '4rem';
const pageContentMarginSmall = '2rem';
const contentMargin = '2rem';

const iconColorConfig = {
  primary: { normal: colors.white, hover: colors.medDarkGray },
	red: { normal: colors.white, hover: colors.strongRed }
}

const globalTexts = {
  copyright: '©24DOTS — All rights reserved'
}

const iconSizeConfig = {
  extraSmall: { width: '15px', height: '15px' },
  small: { width: '20px', height: '20px' },
	medium: { width: '25px', height: '25px' },
	large: { width: '30px', height: '30px' }
}

const animationConfig = {
  zoom: { duration: 500 }
}

const margin = {
  page: {top: '40px', right: '40px', left: '40px', bottom: '40px'},
  button: '12px'
}

const smallMargin = {
  page: {top: '12px', right: '12px', left: '12px', bottom: '12px'},
  button: '12px'
}

const sidebarDrawerTransitionDuration = {
  enter: 500,
  exit: 250
}

const sliderInterval = 100;

const identities = {
    d: {
        title: 'DIFFERENT',
        color: '#DA523A',
        text: 'We are equipped with knowledge on multiple design software which help us execute our boundless ideas that give us extraordinary result. We provide stories and design strategy with unique technical procedures.'
    },
    o: {
      title: 'ORIGINAL',
      color: '#FCB94D',
      text: '24DOTS we connect ideas, at heart we approach every brief with a clear understanding of the business problem, we provide solution and what return on investment is needed for the campaign to be a success. Our strategy is determined by the problem we are facing. We are adaptable which lead us to a magical journey that never ends.'
    },
    t: {
      title: 'THRILLING',
      color: '#138E91',
      text: '24DOTS is more than just a Creative Agency, we let our creative thinking and our work do the talking. We are people with boundless ideas and we take pride in our ability. We provide quality of work and never doubt possibilities of solution. We are not original yet we are unique.'
    },
    s: {
      title: 'SOLUTION',
      color: '#00A4E4',
      text: 'Our talent will guide you through your creative needs and together we make ideas happen, from brand strategy to promotional materials, 3D modelling, high quality renders and other printing procedures. 24DOTS our brand name and we are committed to serve our clients around the globe.'
    },
}

export {
  appBgColor,
  button,
  animationConfig,
  colors,
  margin,
  smallMargin,
  iconColorConfig,
  iconSizeConfig,
  coverBgColor,
  taglineColor,
  identities,
  colorSettings,
  globalTexts,
  sidebarDrawerTransitionDuration,
  borderColor,
  contentMargin,
  contentMarginSmall,
  pageContentMargin,
  pageContentMarginSmall,
  appBarMinHeight,
  appBarPadding,
  divider,
  outlinedButton,
  sliderInterval,
  preLoaderBgColor,
  customLoadingIndicatorMinDelay,
  imageCurtainColor,
}