import PropTypes from 'prop-types';

export interface MarginProps {
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
}

export const MarginTypes: PropTypes.InferProps<MarginProps> = {
  /**
   * The property sets the margin area.
   */
  margin: PropTypes.string,
  /**
   * The property sets the margin area on the top of an element.
   */
  marginTop: PropTypes.string,
  /**
   * The property sets the margin area on the right side of an element.
   */
  marginRight: PropTypes.string,
  /**
   * The property sets the margin area on the bottom of an element.
   */
  marginBottom: PropTypes.string,
  /**
   * The property sets the margin area on the left side of an element.
   */
  marginLeft: PropTypes.string,
};
