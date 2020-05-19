import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface GridWithCellsProps {
    alignContent?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    spacing?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
    cells?: {
        child?: ReactNode;
        lg?: 'false' | 'auto' | 'true' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        md?: 'false' | 'auto' | 'true' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        sm?: 'false' | 'auto' | 'true' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        xl?: 'false' | 'auto' | 'true' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        xs?: 'false' | 'auto' | 'true' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
        zeroMinWidth: boolean;
    }[];
}

export const GridWithCellsTypes: PropTypes.InferProps<GridWithCellsProps> = {
    // Defines the align-content style property. It's applied for all screen sizes.
    alignContent: PropTypes.oneOf([
        'stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
    ]),
    // Defines the align-items style property. It's applied for all screen sizes.
    alignItems: PropTypes.oneOf([
        'flex-start', 'center', 'flex-end', 'stretch', 'baseline'
    ]),
    // Defines the flex-direction style property. It is applied for all screen sizes.
    direction: PropTypes.oneOf([
        'row', 'row-reverse', 'column', 'column-reverse'
    ]),
    // Defines the justify-content style property. It is applied for all screen sizes.
    justify: PropTypes.oneOf([
        'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'
    ]),
    // Defines the flex-wrap style property. It's applied for all screen sizes.
    wrap: PropTypes.oneOf([
        'nowrap', 'wrap', 'wrap-reverse'
    ]),
    /**
     * Defines the space between the type item component.
     */
    spacing: PropTypes.oneOf([
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ]),
    // A list of the cells in the grid.
    cells: PropTypes.arrayOf(PropTypes.shape({
        // Place here a component
        child: PropTypes.element,
        /**
         * Defines the number of grids the component is going to use.
         * It's applied for the lg breakpoint and wider screens if not overridden.
         */
        lg: PropTypes.oneOf([
            'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ]),
        /**
         * Defines the number of grids the component is going to use.
         * It's applied for the md breakpoint and wider screens if not overridden.
         */
        md: PropTypes.oneOf([
            'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ]),
        /**
         * Defines the number of grids the component is going to use.
         * It's applied for the sm breakpoint and wider screens if not overridden.
         */
        sm: PropTypes.oneOf([
            'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ]),
        /**
         * Defines the number of grids the component is going to use.
         * It's applied for the xl breakpoint and wider screens if not overridden.
         */
        xl: PropTypes.oneOf([
            'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ]),
        /**
         * Defines the number of grids the component is going to use.
         * It's applied for the xs breakpoint and wider screens if not overridden.
         */
        xs: PropTypes.oneOf([
            'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
        ]),
        // If true, it sets min-width: 0 on the item.
        zeroMinWidth: PropTypes.bool,
    })),
};