import uniqueId from 'lodash/uniqueId';
import React, { RefObject } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SelectMUI from '@material-ui/core/Select';
import NativeSelectMUI from '@material-ui/core/NativeSelect';
import pickWithValues from '../a_lib/utils/pickWithValues';
import InputCircularProgress from '../a_lib/components/InputCircularProgress';
import { SelectWithOptionsProps, SelectWithOptionsTypes } from './SelectWithOptions.props';

interface SelectWithOptionsState {
    selectedValueLocal?: string;
    labelWidthLocal?: number;
}

/**
 * Select components are used for collecting user provided information from a list of options.
 */
class SelectWithOptions extends React.Component<SelectWithOptionsProps, SelectWithOptionsState> {

    static propTypes: PropTypes.InferProps<SelectWithOptionsProps>;
    static defaultProps: PropTypes.InferProps<SelectWithOptionsProps>;

    labelId: string;
    inputLabel: RefObject<HTMLLabelElement>;

    constructor(props: SelectWithOptionsProps) {
        super(props);
        this.labelId = uniqueId('selectWithOptions');
        this.inputLabel = React.createRef<HTMLLabelElement>();
        this.state = {
            selectedValueLocal: this.props.selectedValue,
            labelWidthLocal: 0
        };
    }

    componentDidMount() {
        const { formControl } = this.props;
        if (formControl!.variant === 'outlined' && this.inputLabel) {
            this.setState({
                labelWidthLocal: this.inputLabel.current!.offsetWidth,
            });
        }
    }

    componentDidUpdate(prevProps: SelectWithOptionsProps, prevState: SelectWithOptionsState) {
        const { selectedValue, label, formControl } = this.props;
        const { selectedValueLocal } = this.state;
        if (selectedValue !== prevProps.selectedValue && selectedValue !== selectedValueLocal) {
            this.setState({ selectedValueLocal: selectedValue });
        }
        if (label !== prevProps.label && formControl!.variant === 'outlined' && this.inputLabel) {
            this.setState({
                labelWidthLocal: this.inputLabel.current!.offsetWidth,
            });
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({
            selectedValueLocal: e.target.value,
        });
        if (this.props.onChange) {
            this.props.onChange(e.currentTarget.value);
        }
    };

    render(): JSX.Element {
        const {
            label: controlLabel,
            error,
            required,
            disabled,
            loading,
            formControl,
            options
        } = this.props;
        const {
            native,
            autoWidth,
            displayEmpty,
            variant,
            helperText,
            color,
            fullWidth,
            hiddenLabel,
            disableGuttersInOptions,
            denseOptions,
            margin,
            size,
        } = formControl!;
        const { selectedValueLocal, labelWidthLocal } = this.state;
        const muiFormControlProps: any = pickWithValues({ disabled, error, fullWidth, hiddenLabel, required });
        const muiSelectProps: any = pickWithValues({ autoWidth, displayEmpty });
        const optionsElements: JSX.Element[] = [];
        if (options && options.length > 0) {
            let optionItem: any;
            for (let i = 0; i < options.length; i++) {
                optionItem = options[i];
                if (optionItem) {
                    const { id, value, label, disabled } = optionItem;
                    if (native) {
                        optionsElements.push(
                            <option
                                key={id ? id : `menuItem${i}`}
                                value={value}
                                disabled={!!disabled}
                            >
                                {label}
                            </option>
                        )
                    } else {
                        optionsElements.push(
                            <MenuItem
                                key={id ? id : `menuItem${i}`}
                                value={value}
                                disabled={!!disabled}
                                disableGutters={!!disableGuttersInOptions}
                                dense={!!denseOptions}
                            >
                                {label}
                            </MenuItem>
                        );
                    }
                }
            }
        }
        if (loading) {
            muiFormControlProps.disabled = true;
        }
        return (
            <FormControl
                variant={variant}
                color={color}
                margin={margin}
                size={size}
                {...muiFormControlProps}
            >
                {controlLabel && (<InputLabel id={this.labelId} ref={this.inputLabel}>{controlLabel}</InputLabel>)}
                {native
                    ? (
                        <NativeSelectMUI
                            value={selectedValueLocal || ''}
                            inputProps={{
                                id: this.labelId,
                            }}
                            onChange={this.handleChange}
                        >
                            {optionsElements}
                        </NativeSelectMUI>
                    )
                    : (
                        <SelectMUI
                            labelId={this.labelId}
                            value={selectedValueLocal || ''}
                            labelWidth={labelWidthLocal}
                            {...muiSelectProps}
                            onChange={this.handleChange}
                        >
                            {optionsElements}
                        </SelectMUI>
                    )
                }
                {helperText && (<FormHelperText>{helperText}</FormHelperText>)}
                {loading && (
                    <InputCircularProgress size={size}/>
                )}
            </FormControl>
        );
    }
}

SelectWithOptions.propTypes = SelectWithOptionsTypes;

SelectWithOptions.defaultProps = {
    formControl: {
        color: 'primary',
        fullWidth: true,
        margin: 'none',
        variant: 'standard',
    },
    options: [
        { id: '0000', value: '', label: 'None' },
        { id: '0001', value: 'orange', label: 'Orange' },
        { id: '0002', value: 'blue', label: 'Blue' },
        { id: '0003', value: 'green', label: 'Green' }
    ]
};

export default SelectWithOptions;
