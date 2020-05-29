import PropTypes from 'prop-types';

export interface SwitchProps {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    labelPlacement?: '' | 'end' | 'start' | 'top' | 'bottom';
    value?: any;
    id?: string;
    color?: '' | 'default' | 'primary' | 'secondary';
    required?: boolean;
    size?: '' | 'medium' | 'small';
    onChange?: (options: { checked?: boolean, value?: any }) => void;
}

export const SwitchTypes: PropTypes.InferProps<SwitchProps> = {
    /**
     * If true, the component appears selected.
     */
    checked: PropTypes.bool,
    /**
     * If true, the control will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The text to be used in an enclosing label element.
     */
    label: PropTypes.string,
    /**
     * The position of the label.
     */
    labelPlacement: PropTypes.oneOf(['', 'end', 'start', 'top', 'bottom']),
    /**
     * The value of the component.
     */
    value: PropTypes.object,
    /**
     * The id of the input element.
     */
    id: PropTypes.string,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['', 'default', 'primary', 'secondary']),
    /**
     * If true, the input element will be required.
     */
    required: PropTypes.bool,
    /**
     * The size of the switch. small is equivalent to the dense switch styling.
     */
    size: PropTypes.oneOf(['', 'medium', 'small']),
    /*
     * Fired when the state is changed.
     * Signature: `(options: { checked?: boolean, value?: any }) => void;`
     */
    onChange: PropTypes.func
};
