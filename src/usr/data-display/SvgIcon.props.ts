import PropTypes from 'prop-types';

export interface SvgIconProps {
    fontSize?: '' | 'inherit' | 'default' | 'small' | 'large';
    color?: '' | 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled';
    viewBox?: string;
    paths?: {
        fill?: string;
        d?: string;
    }[];
}

export const SvgIconTypes: PropTypes.InferProps<SvgIconProps> = {
    // The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
    fontSize: PropTypes.oneOf([
        '', 'inherit', 'default', 'small', 'large'
    ]),
    // The color of the component. It supports those theme colors that make sense for this component.
    color: PropTypes.oneOf([
        '', 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled'
    ]),
    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element.
     * For example, if the SVG element is 500 (width) by 200 (height), and you pass viewBox="0 0 50 20",
     * this means that the coordinates inside the SVG will go
     * from the top left corner (0,0) to bottom right (50,20) and each unit will be worth 10px.
     */
    viewBox: PropTypes.string,
    /**
     * The svg paths array. Each item is as path tag with d attribute as item value.
     */
    paths: PropTypes.arrayOf(PropTypes.shape({
        /**
         * fill attribute in the path tag
         */
        fill: PropTypes.string,
        /**
         * d attribute in the path tag
         */
        d: PropTypes.string,
    })),
};
