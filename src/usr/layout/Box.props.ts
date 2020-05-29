import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@material-ui/core';
import { ColorProps, ColorTypes } from '../a_lib/props/color.props';
import { SizingProps, SizingTypes } from '../a_lib/props/sizing.props';
import { SpacingProps, SpacingTypes } from '../a_lib/props/spacing.props';
import { BordersProps, BordersTypes } from '../a_lib/props/borders.props';
import { DisplayProps, DisplayTypes } from '../a_lib/props/display.props';
import { FlexboxProps, FlexboxTypes } from '../a_lib/props/flexbox.props';
import { PositionsProps, PositionsTypes } from '../a_lib/props/positions.props';
import { TypographyProps, TypographyTypes } from '../a_lib/props/typography.props';

export interface BoxProps {
    theme?: Theme;
    borders?: BordersProps;
    display?: DisplayProps;
    palette?: {
        color?: ColorProps;
        backgroundColor?: ColorProps;
    };
    sizing?: SizingProps;
    spacing?: SpacingProps;
    flexbox?: FlexboxProps;
    positions?: PositionsProps;
    boxShadow?: '0' | '1' | '2' | '3' |
        '4' | '5' | '6' | '7' |
        '8' | '9' | '10' | '11' |
        '12' | '13' | '14' | '15' |
        '16' | '17' | '18' | '19' |
        '20' | '21' | '22' | '23' |
        '24';
    typography?: TypographyProps;
    children?: ReactNode[];
}

export const BoxTypes = {
    // Sets style to element's border
    borders: PropTypes.shape(BordersTypes),
    // Toggle the display value of components
    display: PropTypes.shape(DisplayTypes),
    // Sets the color of the component
    palette: PropTypes.shape({
        color: PropTypes.shape(ColorTypes),
        backgroundColor: PropTypes.shape(ColorTypes),
    }),
    /**
     * Easily make an element as wide or as tall (relative to its parent) with the width and height utilities.
     */
    sizing: PropTypes.shape(SizingTypes),
    /**
     * A range of shorthand responsive margin and padding utility classes to modify an element’s appearance.
     */
    spacing: PropTypes.shape(SpacingTypes),
    /**
     * Manages the layout, alignment, and sizing of grid columns, navigation, components,
     * and more with a full suite of responsive Flexbox utilities.
     */
    flexbox: PropTypes.shape(FlexboxTypes),
    /**
     * Shorthand utilities for quickly configuring the position of an element.
     */
    positions: PropTypes.shape(PositionsTypes),
    /**
     * Shadow depth. It accepts values between 0 and 24 inclusive.
     */
    boxShadow: PropTypes.oneOf([
        '0', '1', '2', '3',
        '4', '5', '6', '7',
        '8', '9', '10', '11',
        '12', '13', '14', '15',
        '16', '17', '18', '19',
        '20', '21', '22', '23',
        '24'
    ]),
    // Text utilities to control alignment, wrapping, weight, and more.
    typography: PropTypes.shape(TypographyTypes),
    /**
     * The content of the box.
     */
    children: PropTypes.arrayOf(PropTypes.element),
};
