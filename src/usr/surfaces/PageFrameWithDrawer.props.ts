import PropTypes from 'prop-types';
import { ColorProps, ColorTypes } from 'usr/a_lib/props/color.props';
import { PaddingProps, PaddingTypes } from 'usr/a_lib/props/padding.props';
import { ReactNode } from 'react';
import { Theme } from '@material-ui/core';

export interface PageFrameWithDrawerProps {
    theme?: Theme;
    classes?: any;
    pageHeight?: string;
    topLeftArea?: {
        topLeftAreaPalette?: {
            color?: ColorProps;
            backgroundColor?: ColorProps;
        };
        topLeftAreaElevation?:
            '0' | '1' | '2' | '3' |
            '4' | '5' | '6' | '7' |
            '8' | '9' | '10' | '11' |
            '12' | '13' | '14' | '15' |
            '16' | '17' | '18' | '19' |
            '20' | '21' | '22' | '23' |
            '24';
        topLeftAreaPadding?: PaddingProps;
        topLeftAreaElement?: ReactNode;
    }
    topCentralArea?: {
        topCentralPalette?: {
            color?: ColorProps;
            backgroundColor?: ColorProps;
        };
        topCentralAreaElevation?:
            '0' | '1' | '2' | '3' |
            '4' | '5' | '6' | '7' |
            '8' | '9' | '10' | '11' |
            '12' | '13' | '14' | '15' |
            '16' | '17' | '18' | '19' |
            '20' | '21' | '22' | '23' |
            '24';
        topCentralAreaCentralSectionElement?: ReactNode;
        topCentralAreaRightSectionElement?: ReactNode;
        topCentralAreaCentralSectionPadding?: PaddingProps;
        topCentralAreaRightSectionPadding?: PaddingProps;
    };
    leftArea?: {
        leftAreaWidth?: number,
        leftAreaPalette?: {
            color?: ColorProps;
            backgroundColor?: ColorProps;
        };
        leftAreaElement?: ReactNode;
        leftAreaPadding?: PaddingProps;
    };
    centralArea?: {
        centralAreaPalette?: {
            color?: ColorProps;
            backgroundColor?: ColorProps;
        };
        centralAreaElement?: ReactNode;
        centralAreaPadding?: PaddingProps;
    };
    actionArea?: {
        actionAreaElement: ReactNode;
    }
    hiddenElements?: ReactNode[];
    onToggleLeftArea?: () => void;
}

export const PageFrameWithDrawerTypes: PropTypes.InferProps<PageFrameWithDrawerProps> = {
    /**
     * Sets the height of the entire page.
     * Set to 100% when the content of the central area is less than one screen height.
     */
    pageHeight: PropTypes.string,
    /**
     * The top left area.
     */
    topLeftArea: PropTypes.shape({
        /**
         * Sets the custom color of the top left bar
         */
        topLeftAreaPalette: PropTypes.shape({
            color: PropTypes.shape(ColorTypes),
            backgroundColor: PropTypes.shape(ColorTypes),
        }),
        /**
         * Shadow depth of the top left bar.
         */
        topLeftAreaElevation: PropTypes.oneOf([
            '0', '1', '2', '3',
            '4', '5', '6', '7',
            '8', '9', '10', '11',
            '12', '13', '14', '15',
            '16', '17', '18', '19',
            '20', '21', '22', '23',
            '24'
        ]),
        /**
         * Sets the padding of the top left area
         */
        topLeftAreaPadding: PropTypes.shape(PaddingTypes),
        /**
         * Sets the element in the top app bar on the left side of the page
         */
        topLeftAreaElement: PropTypes.element,
    }),

    /**
     * The top central area
     */
    topCentralArea: PropTypes.shape({
        /**
         * Sets the custom color of the top central bar
         */
        topCentralPalette: PropTypes.shape({
            color: PropTypes.shape(ColorTypes),
            backgroundColor: PropTypes.shape(ColorTypes),
        }),
        /**
         * Shadow depth of the top central bar.
         */
        topCentralAreaElevation: PropTypes.oneOf([
            '0', '1', '2', '3',
            '4', '5', '6', '7',
            '8', '9', '10', '11',
            '12', '13', '14', '15',
            '16', '17', '18', '19',
            '20', '21', '22', '23',
            '24'
        ]),
        /**
         * Sets the title element in the center of the app bar
         */
        topCentralAreaCentralSectionElement: PropTypes.element,
        /**
         * Sets the element in the right-side of the app bar
         */
        topCentralAreaRightSectionElement: PropTypes.element,
        /**
         * Sets the padding of the central section element of top central area
         */
        topCentralAreaCentralSectionPadding: PropTypes.shape(PaddingTypes),
        /**
         * Sets the padding of the right-side section element of top central area
         */
        topCentralAreaRightSectionPadding: PropTypes.shape(PaddingTypes),
    }),
    /**
     *
     */
    leftArea: PropTypes.shape({
        /**
         * The width of the left drawer. Should be a number value in pixels.
         */
        leftAreaWidth: PropTypes.number,
        /**
         * Sets the custom color of the left bar
         */
        leftAreaPalette: PropTypes.shape({
            color: PropTypes.shape(ColorTypes),
            backgroundColor: PropTypes.shape(ColorTypes),
        }),
        /**
         * The left area element
         */
        leftAreaElement: PropTypes.element,
        /**
         * Sets the padding of the left area
         */
        leftAreaPadding: PropTypes.shape(PaddingTypes),
    }),
    /**
     * The central area in the page
     */
    centralArea: PropTypes.shape({
        /**
         * Sets the custom background color of the central area
         */
        centralAreaPalette: PropTypes.shape({
            color: PropTypes.shape(ColorTypes),
            backgroundColor: PropTypes.shape(ColorTypes),
        }),
        /**
         * Sets the central area element
         */
        centralAreaElement: PropTypes.element,
        /**
         * Sets the padding of the central area
         */
        centralAreaPadding: PropTypes.shape(PaddingTypes),
    }),
    /**
     * The action area
     */
    actionArea: PropTypes.shape({
        /**
         * Sets the action area element.
         */
        actionAreaElement: PropTypes.element,
    }),
    /**
     * Hidden elements, useful for dialogs.
     */
    hiddenElements: PropTypes.arrayOf(PropTypes.node),

    /**
     * Triggered when the user toggle drawer.
     * Signature: `() => void`
     */
    onToggleLeftArea: PropTypes.func,
};
