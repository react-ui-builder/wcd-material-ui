import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface IconButtonProps {
    color?: '' | 'default' | 'inherit' | 'primary' | 'secondary';
    edge?: '' | 'start' | 'end' | 'false';
    disabled?: boolean;
    icon?: ReactNode;
    size?: '' | 'small' | 'medium';
    loading?: boolean;
    onClick?: () => void;

}

export const IconButtonTypes: PropTypes.InferProps<IconButtonProps> = {
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
    /**
     * If given, uses a negative margin to counteract the padding on one side
     * (this is often helpful for aligning the left or right side of the icon with content above or below,
     * without ruining the border size and shape).
     */
    edge: PropTypes.oneOf(['', 'start', 'end', 'false']),
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Icon
     */
    icon: PropTypes.element,
    /**
     * The size of the button. `small` is equivalent to the dense button styling.
     */
    size: PropTypes.oneOf(['', 'small', 'medium']),
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
