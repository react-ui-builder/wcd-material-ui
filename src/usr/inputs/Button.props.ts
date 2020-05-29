import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface ButtonProps {
    label?: string;
    variant?: '' | 'text' | 'outlined' | 'contained';
    color?: '' | 'default' | 'inherit' | 'primary' | 'secondary';
    disabled?: boolean;
    endIcon?: ReactNode;
    startIcon?: ReactNode;
    size?: '' | 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    href?: string;
    loading?: boolean;
    menu?: {
        id?: string;
        label?: string;
        href?: string;
        disabled?: boolean;
        selected?: boolean;
    }[];
    onClick?: () => void;
    onMenuItemClick?: (options: { id?: string, href?: string }) => void;
}

export const ButtonTypes: PropTypes.InferProps<ButtonProps> = {
    /**
     * Button label text
     */
    label: PropTypes.string,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['', 'text', 'outlined', 'contained']),
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * An element placed after the button label.
     */
    endIcon: PropTypes.node,
    /**
     * An element placed before the button label.
     */
    startIcon: PropTypes.node,
    /**
     * The size of the button. `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    /**
     * If true, the button will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * The URL to link to when the button is clicked.
     */
    href: PropTypes.string,
    /**
     * If true the circular progress is shown and button is disabled.
     */
    loading: PropTypes.bool,
    /**
     * A list of the menu items
     */
    menu: PropTypes.arrayOf(PropTypes.shape({
        /**
         * A menu item id
         */
        id: PropTypes.string,
        /**
         * A menu item label
         */
        label: PropTypes.string,
        /**
         * The URL to link to when the menu item is clicked.
         */
        href: PropTypes.string,
        /**
         * If true, the menu item is disabled
         */
        disabled: PropTypes.bool,
        /**
         * If true, the menu item is selected
         */
        selected: PropTypes.bool,
    })),
    /*
     * Triggered when the user click on the button.
     * Signature: `() => void;`
     *
     */
    onClick: PropTypes.func,
    /*
     * Triggered when the user click on the menu item
     * Signature: `(options: { id?: string, href?: string }) => void`
     */
    onMenuItemClick: PropTypes.func
};
