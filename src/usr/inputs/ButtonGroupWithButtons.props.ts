import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface ButtonGroupWithButtonsProps {
    buttons?: {
        id?: string;
        label?: string;
        href?: string;
        loading?: boolean;
        disabled?: boolean;
        color?: '' | 'default' | 'inherit' | 'primary' | 'secondary';
        endIcon?: ReactNode;
        startIcon: ReactNode;
    }[];
    variant?: '' | 'text' | 'outlined' | 'contained';
    size?: '' | 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    onClick?: (buttonProps: { id?: string, href?: string }) => void;
}

export const ButtonGroupWithButtonsTypes: PropTypes.InferProps<ButtonGroupWithButtonsProps> = {
    /**
     * A list of buttons in the group.
     */
    buttons: PropTypes.arrayOf(PropTypes.shape({
        // The unique id of the button
        id: PropTypes.string.isRequired,
        /**
         * Button label text
         */
        label: PropTypes.string,
        /**
         * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
         */
        href: PropTypes.string,
        /**
         * If true the circular progress is shown and button is disabled.
         */
        loading: PropTypes.bool,
        /**
         * If true, the button will be disabled.
         */
        disabled: PropTypes.bool,
        /**
         * The color of the component. It supports those theme colors that make sense for this component.
         */
        color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
        /**
         * An element placed after the button label.
         */
        endIcon: PropTypes.node,
        /**
         * An element placed before the button label.
         */
        startIcon: PropTypes.node,
    })),
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['', 'text', 'outlined', 'contained']),
    /**
     * The size of the button group. `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    /**
     * If true, the button group will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /*
     * Triggered when the user clicks on one of the buttons in the group.
     * Signature: `(buttonProps: { id?: string, href?: string }) => void;`
     *
     */
    onClick: PropTypes.func
};
