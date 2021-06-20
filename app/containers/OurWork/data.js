import { colors } from 'variables';

const works = [
  {
    itemId: 1,
    image: `${process.env.PUBLIC_URL}/assets/images/portfolio/Work Page/1_Scene Sunset_1292x1200.jpg`,
    layout: { x: 0, y: 0, w: 6, h: 1 },
    smLayout: { x: 0, y: 0, w: 12, h: 1 },
    maxHeightSource: [2],
    title: 'CaseStudy',
    url: '/portfolio/CaseStudy',
    description: '3D Environment'
  },
  {
    itemId: 2,
    image: `${process.env.PUBLIC_URL}/assets/images/portfolio/Work Page/2_HDB Awards_1440x1200.jpg`,
    layout: { x: 6, y: 0, w: 6, h: 1 },
    smLayout: { x: 0, y: 1, w: 12, h: 1 },
    title: 'HDB Awards',
    description: 'Display Panels'
  },
  {
    itemId: 3,
    image: `${process.env.PUBLIC_URL}/assets/images/portfolio/Work Page/3_Adobe Exhibition Booth_1900x1200.jpg`,
    layout: { x: 0, y: 1, w: 8, h: 1 },
    smLayout: { x: 0, y: 2, w: 12, h: 1 },
    title: 'Retail Visualization',
    description: 'Visual Merchandise, Retail Booth'
  },
  {
    itemId: 4,
    image: `${process.env.PUBLIC_URL}/assets/images/portfolio/Work Page/4_Poster 3_832x1200.jpg`,
    layout: { x: 8, y: 1, w: 4, h: 1 },
    smLayout: { x: 0, y: 3, w: 12, h: 1 },
    maxHeightSource: [3],
    title: 'Product Display',
    description: 'Graphic Design'
  },
  {
    itemId: 5,
    image: `${process.env.PUBLIC_URL}/assets/images/portfolio/Work Page/5_HDB Singapore_1292x1200.jpg`,
    layout: { x: 0, y: 2, w: 6, h: 1 },
    smLayout: { x: 0, y: 4, w: 12, h: 1 },
    maxHeightSource: [6],
    title: 'HDB Poster',
    description: 'Branding, Graphic Design'
  },
  {
    itemId: 6,
    image: `${process.env.PUBLIC_URL}/assets/images/portfolio/Work Page/6_S-Postcard_1440x1200.jpg`,
    layout: { x: 6, y: 2, w: 6, h: 1 },
    smLayout: { x: 0, y: 5, w: 12, h: 1 },
    title: 'Little City',
    description: '3D Environment, Graphic Design, Illustration'
  },
  {
    itemId: 7,
    image: `${process.env.PUBLIC_URL}/assets/images/portfolio/Work Page/7_HPFixtures_832x1200.jpg`,
    layout: { x: 0, y: 3, w: 4, h: 1 },
    smLayout: { x: 0, y: 6, w: 12, h: 1 },
    maxHeightSource: [8],
    title: 'HP Fixtures',
    description: 'Product Display',
    url: '/portfolio/HPFixtures',
  },
  {
    itemId: 8,
    image: `${process.env.PUBLIC_URL}/assets/images/portfolio/Work Page/8_SKII Retail Booth_Cover_1900x1200.jpg`,
    layout: { x: 4, y: 3, w: 8, h: 1 },
    smLayout: { x: 0, y: 7, w: 12, h: 1 },
    title: 'SKII',
    description: 'Visual Merchandise, Retail Booth, 3D Assets',
    url: '/portfolio/SKII',
  },
];

export default works;