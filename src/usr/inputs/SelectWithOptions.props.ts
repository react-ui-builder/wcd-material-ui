import PropTypes from 'prop-types';

export interface SelectWithOptionsProps {
    selectedValue?: string;
    disabled?: boolean;
    label?: string;
    error?: boolean;
    required?: boolean;
    loading?: boolean;
    formControl?: {
        native?: boolean;
        autoWidth?: boolean;
        displayEmpty?: boolean;
        variant?: '' | 'standard' | 'outlined' | 'filled';
        size?: '' | 'small' | 'medium' | undefined;
        disableGuttersInOptions?: boolean;
        denseOptions?: boolean;
        helperText?: string;
        color?: '' | 'primary' | 'secondary';
        fullWidth?: boolean;
        hiddenLabel?: boolean;
        margin?: 'none' | 'dense' | 'normal';
    };
    options?: {
        id?: string;
        value?: string;
        label?: string;
        disabled?: boolean;
    }[],
    onChange?: (value: string) => void;
}

export const SelectWithOptionsTypes: PropTypes.InferProps<SelectWithOptionsProps> = {
    /**
     * The input value. Providing an empty string will select no options.
     */
    selectedValue: PropTypes.string,
    /**
     * If true, the input element will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Label text
     */
    label: PropTypes.string,
    /**
     * If true, the component should be displayed in an error state.
     */
    error: PropTypes.bool,
    /**
     * If true, the label will indicate that the select is required.
     */
    required: PropTypes.bool,
    /**
     * If true the circular progress is shown and the component is disabled.
     */
    loading: PropTypes.bool,
    /**
     * Form control properties
     */
    formControl: PropTypes.shape({
        /**
         * If true, the component will be using a native select element.
         */
        native: PropTypes.bool,
        /**
         * If true, the width of the popover will automatically be set according to the items inside the menu,
         * otherwise it will be at least the width of the select input.
         */
        autoWidth: PropTypes.bool,
        /**
         * If true, a value is displayed even if no items are selected.
         */
        displayEmpty: PropTypes.bool,
        /**
         * The variant to use.
         */
        variant: PropTypes.oneOf(['', 'standard', 'outlined', 'filled']),
        /**
         * The size of the select control.
         */
        size: PropTypes.oneOf(['', 'small', 'medium']),
        /**
         * If true, the left and right padding is removed in each option.
         */
        disableGuttersInOptions: PropTypes.bool,
        /**
         * If true, compact vertical padding designed for keyboard and mouse input will be used for each option.
         */
        denseOptions: PropTypes.bool,
        /**
         * Helper text, it is placed below the component
         */
        helperText: PropTypes.string,
        /**
         * The color of the component. It supports those theme colors that make sense for this component.
         */
        color: PropTypes.oneOf(['', 'primary', 'secondary']),
        /**
         * If true, the component will take up the full width of its container.
         */
        fullWidth: PropTypes.bool,
        /**
         * If true, the label will be hidden. This is used to increase density for a filled component.
         */
        hiddenLabel: PropTypes.bool,
        /**
         * If dense or normal, will adjust vertical spacing of this and contained components.
         */
        margin: PropTypes.oneOf(['none', 'dense', 'normal']),
    }),
    /**
     * An array of select options
     */
    options: PropTypes.arrayOf(PropTypes.shape({
        /**
         * Unique id of the option
         */
        id: PropTypes.string,
        /**
         * Option value
         */
        value: PropTypes.string,
        /**
         * Option display label
         */
        label: PropTypes.string,
        /**
         * If true, the list item will be disabled.
         */
        disabled: PropTypes.bool,
    })),
    /*
     * Submits the entered value. Signature: `(value: string) => void;`
     *
     */
    onChange: PropTypes.func
};
