import { styled } from '../../stitches.config';

export const Button = styled('button', {
  // Reset
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$5',
  px: '$2',
  fontFamily: '$text',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        px: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$5',
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6',
      },
      '3': {
        borderRadius: '$2',
        height: '$7',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7',
      },
    },
    variant: {
      main: {
        backgroundColor: '$main2',
        boxShadow: 'inset 0 0 0 1px $colors$main7',
        color: '$main11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$main8',
          },
        },
        '&:active': {
          backgroundColor: '$main3',
          boxShadow: 'inset 0 0 0 1px $colors$main8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$main8, 0 0 0 1px $colors$main8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$main4',
          boxShadow: 'inset 0 0 0 1px $colors$main8',
        },
      },
      secondary: {
        backgroundColor: '$secondary2',
        boxShadow: 'inset 0 0 0 1px $colors$secondary7',
        color: '$secondary11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$secondary8',
          },
        },
        '&:active': {
          backgroundColor: '$secondary3',
          boxShadow: 'inset 0 0 0 1px $colors$secondary8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$secondary8, 0 0 0 1px $colors$secondary8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$secondary4',
          boxShadow: 'inset 0 0 0 1px $colors$secondary8',
        },
      },
      accent: {
        backgroundColor: '$accent2',
        boxShadow: 'inset 0 0 0 1px $colors$accent7',
        color: '$accent11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$accent8',
          },
        },
        '&:active': {
          backgroundColor: '$accent3',
          boxShadow: 'inset 0 0 0 1px $colors$accent8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$accent8, 0 0 0 1px $colors$accent8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$accent4',
          boxShadow: 'inset 0 0 0 1px $colors$accent8',
        },
      },
      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: 'white',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,100%,100%,.25)',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },
      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        color: 'black',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,0%,0%,.25)',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: '$slate11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
      },
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'main',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$main3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$main4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$main8, 0 0 0 1px $colors$main8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$main4',
          boxShadow: 'none',
        },
      },
    },
    {
      variant: 'secondary',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$secondary3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$secondary4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$secondary8, 0 0 0 1px $colors$secondary8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$secondary4',
          boxShadow: 'none',
        },
      },
    },
    {
      variant: 'accent',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$accent3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$accent4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$accent8, 0 0 0 1px $colors$accent8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$accent4',
          boxShadow: 'none',
        },
      },
    },
  ],
  defaultVariants: {
    size: '2',
    variant: 'main',
  },
});
