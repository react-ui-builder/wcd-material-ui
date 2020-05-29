import PropTypes from 'prop-types';

export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    labelPlacement?: '' | 'end' | 'start' | 'top' | 'bottom';
    value?: any;
    id?: string;
    color?: '' | 'default' | 'primary' | 'secondary';
    indeterminate?: boolean;
    required?: boolean;
    onChange?: (options: { checked?: boolean, value?: any, id?: string }) => void;
}

export const CheckboxTypes: PropTypes.InferProps<CheckboxProps> = {
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
     * If true, the component appears indeterminate.
     * This does not set the native input element to indeterminate due to inconsistent behavior across browsers.
     * However, we set a data-indeterminate attribute on the input.
     */
    indeterminate: PropTypes.bool,
    /**
     * If true, the input element will be required.
     */
    required: PropTypes.bool,
    /*
     * Fired when the state is changed.
     * Signature: `(options: { checked?: boolean, value?: any, id?: string }) => void;`
     */
    onChange: PropTypes.func
};
