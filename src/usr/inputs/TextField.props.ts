import { ReactNode } from 'react';
import PropTypes from 'prop-types';

export interface TextFieldProps {
    value?: string;
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
        type?: 'date' | 'datetime-local' | 'email' | 'password' | 'search' | 'text' | 'time';
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
    multilineControl?: {
        multiline?: boolean;
        rows?: number;
        rowsMax?: number;
    };
    onChange?: (value?: string) => void;
}

export const TextFieldTypes: PropTypes.InferProps<TextFieldProps> = {
    /**
     * The value of the input element.
     */
    value: PropTypes.string,
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
        /**
         * The value of input type attribute
         */
        type: PropTypes.oneOf(['date', 'datetime-local', 'email', 'password', 'search', 'text', 'time']),
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
    /**
     * Properties for multiline control
     */
    multilineControl: PropTypes.shape({
        /**
         * If true, a textarea element will be rendered instead of an input.
         */
        multiline: PropTypes.bool,
        /**
         * Number of rows to display when multiline option is set to true.
         */
        rows: PropTypes.number,
        /**
         * Maximum number of rows to display when multiline option is set to true.
         */
        rowsMax: PropTypes.number,
    }),
    /*
     * Triggered when the text is changed in the input control
     * Signature: `(value?: string) => void;`
     */
    onChange: PropTypes.func,
};
