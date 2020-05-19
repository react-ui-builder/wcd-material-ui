import PropTypes from 'prop-types';

export const PaddingSpacingByThemeTypes = {
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

export const PaddingTypes = {
  /**
   * The property sets the padding area on all four sides of an element.
   */
  padding: PropTypes.string,
  /**
   * The property sets the padding area on the top of an element.
   */
  paddingTop: PropTypes.string,
  /**
   * The property sets the padding area on the right side of an element.
   */
  paddingRight: PropTypes.string,
  /**
   * The property sets the padding area on the bottom of an element.
   */
  paddingBottom: PropTypes.string,
  /**
   * The property sets the padding area on the left side of an element.
   */
  paddingLeft: PropTypes.string,
};
