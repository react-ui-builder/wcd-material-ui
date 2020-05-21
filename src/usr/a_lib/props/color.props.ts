import PropTypes from 'prop-types';

export interface ColorProps {
  colorHue: string;
  colorShade: string;
}

export const ColorTypes: PropTypes.InferProps<ColorProps> = {
  // A value from the collection of colors, i.e. hues
  colorHue: PropTypes.oneOf([
    '',
    'primary.main',
    'primary.light',
    'primary.dark',
    'primary.contrastText',
    'secondary.main',
    'secondary.light',
    'secondary.dark',
    'secondary.contrastText',
    'error.main',
    'text.primary',
    'text.secondary',
    'text.disabled',
    'text.hint',
    'white',
    'black',
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange',
    'brown',
    'grey',
    'blueGrey'
  ]),
  // A value from the collection of colors shades
  colorShade: PropTypes.oneOf([
    '',
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A400',
    'A700'
  ]),

};
