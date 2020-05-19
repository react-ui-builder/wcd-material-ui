import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import { Theme } from '@material-ui/core';

export interface ListItemProps {
    url?: string;
    selected?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    primaryText?: string;
    secondaryText?: string;
    divider?: boolean;
    iconIndex?: number;
    childrenItems?: {
        url?: string;
        selected?: boolean;
        disabled?: boolean;
        primaryText?: string;
        secondaryText?: string;
        divider?: boolean;
        iconIndex?: number;
    }[],
}

export interface ListNavigationProps {
    theme?: Theme;
    classes?: any;
    dense?: boolean;
    items?: ListItemProps[],
    icons?: ReactNode[],
    itemsTextVariant?:
        'h1' |
        'h2' |
        'h3' |
        'h4' |
        'h5' |
        'h6' |
        'subtitle1' |
        'subtitle2' |
        'body1' |
        'body2' |
        'caption' |
        'button' |
        'overline' |
        'srOnly' |
        'inherit';
    onListNavigationItemClick?: (url?: string) => void;
    onListNavigationItemExpandClick?: (url?: string) => void;
    onListNavigationItemCollapseClick?: (url?: string) => void;
}

export const ListItemTypes: PropTypes.InferProps<ListItemProps> = {
    // The list item url.
    url: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    expanded: PropTypes.bool,
    // The list item primary text
    primaryText: PropTypes.string,
    // The list item secondary text
    secondaryText: PropTypes.string,
    // If true, a 1px light border is added to the bottom of the list item.
    divider: PropTypes.bool,
    /**
     * The index value of the icon in the icons array property
     */
    iconIndex: PropTypes.number,
    /**
     * Nested list items
     */
    childrenItems: PropTypes.arrayOf(PropTypes.shape({
        // The list item url.
        url: PropTypes.string,
        selected: PropTypes.bool,
        disabled: PropTypes.bool,
        // The list item primary text
        primaryText: PropTypes.string,
        // The list item secondary text
        secondaryText: PropTypes.string,
        // If true, a 1px light border is added to the bottom of the list item.
        divider: PropTypes.bool,
        /**
         * The index value of the icon in the icons array property
         */
        iconIndex: PropTypes.number,
    })),
};

export const ListNavigationTypes: PropTypes.InferProps<ListNavigationProps> = {
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense: PropTypes.bool,
    /**
     * The list of actions.
     */
    items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
    /**
     * An icons elements array
     */
    icons: PropTypes.arrayOf(PropTypes.node),
    // Applies the theme typography styles to items primary text.
    itemsTextVariant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
        'srOnly',
        'inherit'
    ]),
    /**
     *
     */
    onListNavigationItemClick: PropTypes.func,
    /**
     *
     */
    onListNavigationItemExpandClick: PropTypes.func,
    /**
     *
     */
    onListNavigationItemCollapseClick: PropTypes.func,
};
