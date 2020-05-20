import PropTypes from 'prop-types';

export interface PaddingSpacingByThemeProps {
  padding?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | undefined;
  paddingTop?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | undefined;
  paddingRight?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | undefined;
  paddingBottom?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | undefined;
  paddingLeft?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | undefined;
}

export const PaddingSpacingByThemeTypes: PropTypes.InferProps<PaddingSpacingByThemeProps> = {
  /**
   * The property sets the padding area on all four sides of an element. The property is multiplied by the theme spacing value.
   */
  padding: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
  /**
   * The property sets the padding area on the top of an element. The property is multiplied by the theme spacing value.
   */
  paddingTop: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
  /**
   * The property sets the padding area on the right side of an element. The property is multiplied by the theme spacing value.
   */
  paddingRight: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
  /**
   * The property sets the padding area on the bottom of an element. The property is multiplied by the theme spacing value.
   */
  paddingBottom: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
  /**
   * The property sets the padding area on the left side of an element. The property is multiplied by the theme spacing value.
   */
  paddingLeft: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
};
