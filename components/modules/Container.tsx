import { styled } from '../../stitches.config';

export const Container = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  mx: 'auto',

  variants: {
    width: {
      full: {
        maxWidth: '$width$full',
      },
      large: {
        maxWidth: '$width$large',
      },
      medium: {
        maxWidth: '$width$medium',
      },
      small: {
        maxWidth: '$width$small',
      },
    },
    background: {
      true: {
        backgroundColor: '$panel',
      },
      false: {},
    },
    gutterX: {
      true: {
        px: '$gutterX',
      },
      false: {
        px: '0',
      },
    },
    gutterY: {
      true: {
        py: '$gutterY',
      },
      false: {
        py: '0',
      },
    },
  },

  defaultVariants: {
    width: 'large',
    background: 'false',
    gutterX: 'true',
    gutterY: 'true',
  },
});
