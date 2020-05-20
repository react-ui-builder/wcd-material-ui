import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface NumberFieldProps {
    value?: number;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    required?: boolean;
    label?: string;
    debounceDelay?: number;
    inputControl?: {
        autoComplete?: string;
        autoFocus?: boolean;
        id?: string;
    };
    formControl?: {
        color?: '' | 'primary' | 'secondary';
        fullWidth?: boolean;
        margin?: 'none' | 'dense' | 'normal';
        placeholder?: string;
        variant?: 'standard' | 'outlined' | 'filled';
        startAdornment?: ReactNode;
        endAdornment?: ReactNode;
    };
    onChange?: (value: number) => void;
}

export const NumberFieldTypes: PropTypes.InferProps<NumberFieldProps> = {
    /**
     * The value of the input element.
     */
    value: PropTypes.number,
    /**
     * If true, the input element will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * If true, the label will be displayed in an error state.
     */
    error: PropTypes.bool,
    /**
     * The helper text content.
     */
    helperText: PropTypes.string,
    /**
     * If true, the label is displayed as required and the input element` will be required.
     */
    required: PropTypes.bool,
    /**
     * The label text.
     */
    label: PropTypes.string,
    /**
     * Is used to ignore all value changes until the changes have stopped for a specified delay in milliseconds.
     */
    debounceDelay: PropTypes.number,
    /**
     * Properties of the input control specification
     */
    inputControl: PropTypes.shape({
        /**
         * This prop helps users to fill forms faster, especially on mobile devices.
         * The name can be confusing, as it's more like an autofill.
         */
        autoComplete: PropTypes.string,
        /**
         * If true, the input element will be focused during the first mount.
         */
        autoFocus: PropTypes.bool,
        /**
         * The id of the input element.
         * Use this prop to make label and helperText accessible for screen readers.
         */
        id: PropTypes.string,
    }),
    /**
     * Properties specific to the MUI form control
     */
    formControl: PropTypes.shape({
        /**
         * The color of the component. It supports those theme colors that make sense for this component.
         */
        color: PropTypes.oneOf(['', 'primary', 'secondary']),
        /**
         * If true, the input will take up the full width of its container.
         */
        fullWidth: PropTypes.bool,
        /**
         * If dense or normal, will adjust vertical spacing of this and contained components.
         */
        margin: PropTypes.oneOf(['none', 'dense', 'normal']),
        /**
         * The short hint displayed in the input before the user enters a value.
         */
        placeholder: PropTypes.string,
        /**
         * The variant to use.
         */
        variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
        /**
         * A component placed before the input control.
         */
        startAdornment: PropTypes.node,
        /**
         * A component placed after the input control.
         */
        endAdornment: PropTypes.node,
    }),
    /*
     * Triggered when the value is changed in the input control.
     * Signature: `(value: number) => void;`
     */
    onChange: PropTypes.func,
};
