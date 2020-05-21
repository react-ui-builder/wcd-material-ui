import PropTypes from 'prop-types';

export interface PaddingProps {
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
}

export const PaddingTypes: PropTypes.InferProps<PaddingProps> = {
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
