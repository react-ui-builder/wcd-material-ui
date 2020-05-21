import PropTypes from 'prop-types';
import { ColorProps, ColorTypes } from './color.props';

export interface BordersProps {
  border?: number;
  borderTop?: number;
  borderRight?: number;
  borderBottom?: number;
  borderLeft?: number;
  borderColor?: ColorProps;
  borderRadius?: string;
}

export const BordersTypes: PropTypes.InferProps<BordersProps> = {
  /**
   * The border-width CSS property sets the width of an element's border.
   * When the value is specified, it applies the same width to all four sides.
   */
  border: PropTypes.number,
  // The border-top-width CSS property sets the width of the top border of an element
  borderTop: PropTypes.number,
  // The border-right-width CSS property sets the width of the right border of an element.
  borderRight: PropTypes.number,
  // The border-bottom-width CSS property sets the width of the bottom border of an element.
  borderBottom: PropTypes.number,
  // The border-left-width CSS property sets the width of the left border of an element.
  borderLeft: PropTypes.number,
  // The border-color CSS property sets the color of an element's border.
  borderColor: PropTypes.shape(ColorTypes),
  /**
   * The border-radius CSS property rounds the corners of an element's outer border edge.
   * You can set a single radius to make circular corners, or two radii to make elliptical corners.
   * Use a string value of the border radius to set units: 10% 30% 50% 70%
   */
  borderRadius: PropTypes.string,
};