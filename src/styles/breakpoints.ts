const DESKTOP_MIN_WIDTH = 1024;
const MOBILE_MAX_WIDTH = 639;

type DevicesType = 'desktop' | 'tablet-big' | 'tablet-small' | 'mobile';

const breakpoints: {
  [divice in DevicesType]: string;
} = {
  desktop: `${DESKTOP_MIN_WIDTH}px`,
  mobile: `${MOBILE_MAX_WIDTH}px`,
  'tablet-big': `${DESKTOP_MIN_WIDTH - 1}px`,
  'tablet-small': `${MOBILE_MAX_WIDTH + 1}px`,
};

export default breakpoints;
