import debounce from 'lodash/debounce';
import React from 'react';
import PropTypes from 'prop-types';
import TextFieldMUI from '@material-ui/core/TextField';
import InputAdornmentMUI from '@material-ui/core/InputAdornment';
import pickWithValues from '../a_lib/utils/pickWithValues';
import { TextFieldProps, TextFieldTypes } from './TextField.props';

interface TextFieldState {
    localInputText?: string;
}

/**
 * Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
 */
class TextField extends React.Component<TextFieldProps, TextFieldState> {

    static propTypes: PropTypes.InferProps<TextFieldProps>;
    static defaultProps: PropTypes.InferProps<TextFieldProps>;

    debouncedChange?: any;

    constructor(props: TextFieldProps) {
        super(props);
        const { value, debounceDelay } = this.props;
        this.state = {
            localInputText: value,
        };
        this.setUpOnChange(debounceDelay);
    }

    componentDidUpdate(prevProps: TextFieldProps, prevState: TextFieldState) {
        const { value, debounceDelay } = this.props;
        const { localInputText } = this.state;
        if (value !== prevProps.value && localInputText !== value) {
            this.setState({
                localInputText: value
            });
        }
        if (debounceDelay !== prevProps.debounceDelay) {
            this.setUpOnChange(debounceDelay);
        }
    }

    setUpOnChange = (debounceDelay?: number): void => {
        if (typeof debounceDelay !== 'undefined' && debounceDelay > 0) {
            this.debouncedChange = debounce((value: string) => {
                if (this.props.onChange) {
                    this.props.onChange(value);
                }
            }, debounceDelay);
        } else {
            this.debouncedChange = (value: string) => {
                if (this.props.onChange) {
                    this.props.onChange(value);
                }
            };
        }
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            localInputText: e.currentTarget.value
        });
        this.debouncedChange(e.currentTarget.value);
    };

    render(): JSX.Element {
        const { localInputText } = this.state;
        const { disabled, error, helperText, required, label, inputControl, formControl, multilineControl } = this.props;
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
        if (multilineControl) {
            mainProps = { ...mainProps, ...pickWithValues(multilineControl) };
        }
        return (
            <TextFieldMUI
                value={localInputText || ''}
                InputProps={inputProps}
                {...mainProps}
                onChange={this.handleChange}
            />
        );
    }
}

TextField.propTypes = TextFieldTypes;

TextField.defaultProps = {
    debounceDelay: 300,
    inputControl: {
        type: 'text',
    },
    formControl: {
        margin: 'none',
    }
};

export default TextField;
