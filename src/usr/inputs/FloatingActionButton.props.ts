import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface FloatingActionButtonProps {
    classes?: any;
    label?: string;
    variant?: '' | 'round' | 'extended';
    color?: '' | 'default' | 'inherit' | 'primary' | 'secondary';
    disabled?: boolean;
    icon?: ReactNode;
    size?: '' | 'small' | 'medium' | 'large';
    href?: string;
    loading?: boolean;
    onClick?: () => void;
}

export const FloatingActionButtonTypes: PropTypes.InferProps<FloatingActionButtonProps> = {
    /**
     * Button label text
     */
    label: PropTypes.string,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['', 'round', 'extended']),
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * An icon placed as a child of the button.
     */
    icon: PropTypes.node,
    /**
     * The size of the button. `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    /**
     * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
     */
    href: PropTypes.string,
    /**
     * If true the circular progress is shown and button is disabled.
     */
    loading: PropTypes.bool,
    /*
     * Triggered when the user click on the button.
     * Signature: `() => void;`
     */
    onClick: PropTypes.func
};
