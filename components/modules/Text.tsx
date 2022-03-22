import { styled } from '../../stitches.config';

export const Text = styled('span', {
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    align: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
      },
    },
    color: {
      main: {
        color: '$main11',
      },
      secondary: {
        color: '$secondary11',
      },
      accent: {
        color: '#accent11',
      },
      red: {
        color: '$red11',
      },
      crimson: {
        color: '$crimson11',
      },
      pink: {
        color: '$pink11',
      },
      purple: {
        color: '$purple11',
      },
      violet: {
        color: '$violet11',
      },
      indigo: {
        color: '$indigo11',
      },
      blue: {
        color: '$blue11',
      },
      cyan: {
        color: '$cyan11',
      },
      teal: {
        color: '$teal11',
      },
      green: {
        color: '$green11',
      },
      lime: {
        color: '$lime11',
      },
      yellow: {
        color: '$yellow11',
      },
      orange: {
        color: '$orange11',
      },
      gold: {
        color: '$gold11',
      },
      bronze: {
        color: '$bronze11',
      },
      gray: {
        color: '$slate11',
      },
      contrast: {
        color: '$hiContrast',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
  },
  compoundVariants: [
    {
      color: 'red',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $red11, $crimson11)',
      },
    },
    {
      color: 'crimson',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $crimson11, $pink11)',
      },
    },
    {
      color: 'pink',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $pink11, $purple11)',
      },
    },
    {
      color: 'purple',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $purple11, $violet11)',
      },
    },
    {
      color: 'violet',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $violet11, $indigo11)',
      },
    },
    {
      color: 'indigo',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $indigo11, $blue11)',
      },
    },
    {
      color: 'blue',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $blue11, $cyan11)',
      },
    },
    {
      color: 'cyan',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $cyan11, $teal11)',
      },
    },
    {
      color: 'teal',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $teal11, $green11)',
      },
    },
    {
      color: 'green',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $green11, $lime11)',
      },
    },
    {
      color: 'lime',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $lime11, $yellow11)',
      },
    },
    {
      color: 'yellow',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $yellow11, $orange11)',
      },
    },
    {
      color: 'orange',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $orange11, $red11)',
      },
    },
    {
      color: 'gold',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $gold11, $gold9)',
      },
    },
    {
      color: 'bronze',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $bronze11, $bronze9)',
      },
    },
    {
      color: 'gray',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $gray11, $gray12)',
      },
    },
    {
      color: 'contrast',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $hiContrast, $gray12)',
      },
    },
  ],
  defaultVariants: {
    align: 'center',
    size: '3',
    color: 'contrast',
  },
});
