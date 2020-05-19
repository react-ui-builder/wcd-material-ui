import PropTypes from 'prop-types';

export const TypographyTypes = {
  /**
   * The font-size CSS property sets the size of the font.
   */
  fontSize: PropTypes.number,
  /**
   * The font-style CSS property sets whether a font should be styled with a normal, italic.
   */
  fontStyle: PropTypes.oneOf(['', 'normal', 'italic']),
  /**
   * Sets the weight (or boldness) of the font according to the application settings.
   */
  fontWeight: PropTypes.oneOf(['', 'fontWeightLight', 'fontWeightRegular', 'fontWeightMedium', 'fontWeightBold']),
  /**
   * The letter-spacing CSS property sets the spacing behavior between text characters.
   */
  letterSpacing: PropTypes.string,
  /**
   * The line-height CSS property sets the height of a line box.
   * It's commonly used to set the distance between lines of text.
   * On block-level elements, it specifies the minimum height of line boxes within the element.
   */
  lineHeight: PropTypes.string,
  /**
   * The text-align CSS property sets the horizontal alignment of a block element or table-cell box.
   */
  textAlign: PropTypes.oneOf(['', 'start', 'end', 'left', 'right', 'center', 'justify', 'match-parent']),
};
