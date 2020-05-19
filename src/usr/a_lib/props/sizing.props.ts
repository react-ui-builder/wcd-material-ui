import PropTypes from 'prop-types';

export interface SizingProps {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
}

export const SizingTypes: PropTypes.InferProps<SizingProps> = {
  /**
   * The width CSS property sets an element's width. By default, it sets the width of the content area.
   * Use a string value to specify units: 50%
   */
  width: PropTypes.string,
  /**
   * The max-width CSS property sets the maximum width of an element.
   * It prevents the used value of the width property from becoming larger than the value specified by max-width.
   * Use a string value to specify units: 50%
   */
  maxWidth: PropTypes.string,
  /**
   * The min-width CSS property sets the minimum width of an element.
   * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
   * Use a string value to specify units: 50%
   */
  minWidth: PropTypes.string,
  /**
   * The height CSS property specifies the height of an element.
   * By default, the property defines the height of the content area.
   * Use a string value to specify units: 50%
   */
  height: PropTypes.string,
  /**
   * The max-height CSS property sets the maximum height of an element.
   * It prevents the used value of the height property from becoming larger than the value specified for max-height.
   * Use a string value to specify units: 50%
   */
  maxHeight: PropTypes.string,
  /**
   * The min-height CSS property sets the minimum height of an element.
   * It prevents the used value of the height property from becoming smaller than the value specified for min-height.
   * Use a string value to specify units: 50%
   */
  minHeight: PropTypes.string,
};