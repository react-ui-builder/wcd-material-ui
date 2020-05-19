import PropTypes from 'prop-types';

export interface SpacingProps {
    marginSpacing?: {
        margin?: string;
        marginTop?: string;
        marginRight?: string;
        marginBottom?: string;
        marginLeft?: string;
        marginX?: string;
        marginY?: string;
    };
    paddingSpacing?: {
        padding?: string;
        paddingTop?: string;
        paddingRight?: string;
        paddingBottom?: string;
        paddingLeft?: string;
        paddingX?: string;
        paddingY?: string;
    }
}

export const SpacingTypes: PropTypes.InferProps<SpacingProps> = {
    /**
     * A group of the margin properties
     * Depending on the input and the theme configuration, the following transformation is applied:
     * (1) number - the property is multiplied by the theme spacing value,
     * (2) number - the property is used as the array index in theme spacing array,
     * (3) string - the property is passed as raw CSS value
     */
    marginSpacing: PropTypes.shape({
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
        /**
         * The property sets the margin area on the left and right sides of an element.
         */
        marginX: PropTypes.string,
        /**
         * The property sets the margin area on the top and bottom sides of an element.
         */
        marginY: PropTypes.string,
    }),
    /**
     * A group of the padding properties.
     * Depending on the input and the theme configuration, the following transformation is applied:
     * (1) number - the property is multiplied by the theme spacing value,
     * (2) number - the property is used as the array index in theme spacing array,
     * (3) string - the property is passed as raw CSS value
     */
    paddingSpacing: PropTypes.shape({
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
        /**
         * The property sets the padding area on the left and right sides of an element.
         */
        paddingX: PropTypes.string,
        /**
         * The property sets the padding area on the top and bottom sides of an element.
         */
        paddingY: PropTypes.string,
    })
};