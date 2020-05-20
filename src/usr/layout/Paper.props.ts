import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@material-ui/core';
import { ColorProps, ColorTypes } from '../a_lib/props/color.props';
import { PaddingSpacingByThemeProps, PaddingSpacingByThemeTypes } from '../a_lib/props/spacingByTheme.props';

export interface PaperProps {
    classes?: any;
    theme?: Theme;
    elevation?: '0' | '1' | '2' | '3' |
        '4' | '5' | '6' | '7' |
        '8' | '9' | '10' | '11' |
        '12' | '13' | '14' | '15' |
        '16' | '17' | '18' | '19' |
        '20' | '21' | '22' | '23' | '24';
    square?: boolean;
    variant?: 'elevation' | 'outlined';
    palette?: {
        color?: ColorProps;
        backgroundColor?: ColorProps;
    };
    paddingSpacing?: PaddingSpacingByThemeProps;
    children?: ReactNode[];
}

export const PaperTypes: PropTypes.InferProps<PaperProps> = {
    /**
     * Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
     */
    elevation: PropTypes.oneOf([
        '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9', '10', '11',
        '12', '13', '14', '15',
        '16', '17', '18', '19',
        '20', '21', '22', '23',
        '24'
    ]),
    /**
     * If true, rounded corners are disabled.
     */
    square: PropTypes.bool,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['elevation', 'outlined']),
    // Sets the color of the component
    palette: PropTypes.shape({
        color: PropTypes.shape(ColorTypes),
        backgroundColor: PropTypes.shape(ColorTypes),
    }),
    /**
     * A group of the padding properties.
     */
    paddingSpacing: PropTypes.shape(PaddingSpacingByThemeTypes),
    /**
     * Children components
     */
    children: PropTypes.arrayOf(PropTypes.element),
};
