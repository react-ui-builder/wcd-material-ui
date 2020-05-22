import debounce from 'lodash/debounce';
import React from 'react';
import PropTypes from 'prop-types';
import TextFieldMUI from '@material-ui/core/TextField';
import InputAdornmentMUI from '@material-ui/core/InputAdornment';
import pickWithValues from '../a_lib/utils/pickWithValues';
import { NumberFieldProps, NumberFieldTypes } from './NumberField.props';

interface NumberFieldState {
    localInputValue?: number;
}

/**
 * Number field lets users enter and edit numbers.
 */
class NumberField extends React.Component<NumberFieldProps, NumberFieldState> {

    static propTypes: PropTypes.InferProps<NumberFieldProps>;
    static defaultProps: PropTypes.InferProps<NumberFieldProps>;

    debouncedChange?: any;

    constructor(props: NumberFieldProps) {
        super(props);
        const { value, debounceDelay } = this.props;
        this.state = {
            localInputValue: value,
        };
        this.setUpOnChange(debounceDelay);
    }

    componentDidUpdate(prevProps: NumberFieldProps, prevState: NumberFieldState) {
        const { value, debounceDelay } = this.props;
        const { localInputValue } = this.state;
        if (value !== prevProps.value && localInputValue !== value) {
            this.setState({
                localInputValue: value
            });
        }
        if (debounceDelay !== prevProps.debounceDelay) {
            this.setUpOnChange(debounceDelay);
        }
    }

    setUpOnChange = (debounceDelay?: number) => {
        if (typeof debounceDelay !== 'undefined' && debounceDelay > 0) {
            this.debouncedChange = debounce((value: number) => {
                if (this.props.onChange) {
                    this.props.onChange(value);
                }
            }, debounceDelay);
        } else {
            this.debouncedChange = (value: number) => {
                if (this.props.onChange) {
                    this.props.onChange(value);
                }
            };
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            localInputValue: Number(e.currentTarget.value)
        });
        this.debouncedChange(Number(e.currentTarget.value));
    };

    render() {
        const { localInputValue } = this.state;
        const { disabled, error, helperText, required, label, inputControl, formControl } = this.props;
        let mainProps: any = pickWithValues({ disabled, error, required, label, helperText });
        let inputProps: any = {};
        if (inputControl) {
            mainProps = { ...mainProps, ...pickWithValues(inputControl) };
        }
        if (formControl) {
            const { color, fullWidth, margin, placeholder, variant, startAdornment, endAdornment } = formControl;
            mainProps = { ...mainProps, ...pickWithValues({ color, fullWidth, margin, placeholder, variant }) };
            if (startAdornment) {
                inputProps.startAdornment = (
                    <InputAdornmentMUI position="start">{startAdornment}</InputAdornmentMUI>
                );
            }
            if (endAdornment) {
                inputProps.endAdornment = (
                    <InputAdornmentMUI position="end">{endAdornment}</InputAdornmentMUI>
                );
            }
        }
        return (
            <TextFieldMUI
                type="number"
                value={localInputValue || ''}
                InputProps={inputProps}
                {...mainProps}
                onChange={this.handleChange}
            />
        );
    }
}

NumberField.propTypes = NumberFieldTypes;

NumberField.defaultProps = {
    debounceDelay: 300,
    formControl: {
        margin: 'none',
    },
};

export default NumberField;
