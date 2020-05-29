import PropTypes from 'prop-types';

export interface DateTimePickerProps {
    allowKeyboard?: boolean;
    allowTextInput?: boolean;
    autoOk?: boolean;
    disabled?: boolean;
    format?: string;
    initialDate?: string;
    isTimePicker?: boolean;
    label?: string;
    orientation?: 'portrait' | 'landscape';
    variant?: 'inline' | 'dialog' | 'static';
    onChange?: (date: Date) => void;
}

export const DateTimePickerTypes: PropTypes.InferProps<DateTimePickerProps> = {
    /**
     * Enable keyboard input
     */
    allowKeyboard: PropTypes.bool,
    /**
     * If true, the calendar icon will be shown
     */
    allowTextInput: PropTypes.bool,
    /**
     * if true the date will be accepted on change
     */
    autoOk: PropTypes.bool,
    /**
     * If true, the picker will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * Date format string
     */
    format: PropTypes.string,
    /**
     * Initial date/time value
     */
    initialDate: PropTypes.string,
    /**
     * If true, only time will be shown
     */
    isTimePicker: PropTypes.bool,
    /**
     * DateTimePicker label text
     */
    label: PropTypes.string,
    /**
     * Orientation
     */
    orientation: PropTypes.oneOf(['portrait', 'landscape']),
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['inline', 'dialog', 'static']).isRequired,
    /**
     * Triggered when the user change the date.
     * Signature: `(date: Date) => void;`
     *
     */
    onChange: PropTypes.func,
};
