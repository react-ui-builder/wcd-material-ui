import React from 'react';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
    DatePicker,
    TimePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePickerProps, DateTimePickerTypes } from './DateTimePicker.props';

/**
 * Date / Time pickers
 * Date pickers and Time pickers provide a simple way to select a single value from a pre-determined set.
 */

const DateTimePicker = (props: DateTimePickerProps): JSX.Element => {
    const {
        autoOk, format, initialDate, label, variant, disabled, allowKeyboard,
        allowTextInput, orientation, isTimePicker, onChange
    } = props;
    const initialValue = initialDate ? new Date(initialDate) : new Date();

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        initialValue,
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (onChange && date) {
            onChange(date);
        }
    };

    const commonProps = {
        autoOk,
        variant,
        format,
        id: isTimePicker ? "time-picker" : "date-picker",
        label,
        value: selectedDate,
        disabled,
        orientation,
        onChange: handleDateChange,
    };

    let pickerElement;
    if (isTimePicker) {
        if (allowTextInput) {
            pickerElement = (
                <KeyboardTimePicker
                    {...commonProps}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            )
        } else {
            pickerElement = (
                <TimePicker
                    {...commonProps}
                />
            )
        }
    } else {
        if (allowTextInput) {
            pickerElement = (
                <KeyboardDatePicker
                    {...commonProps}
                    allowKeyboardControl={allowKeyboard}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            )
        } else {
            pickerElement = (
                <DatePicker
                    {...commonProps}
                />
            )
        }
    }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {pickerElement}
        </MuiPickersUtilsProvider>
    );
};

DateTimePicker.propTypes = DateTimePickerTypes;

DateTimePicker.defaultProps = {
    variant: 'dialog',
};

export default DateTimePicker;
