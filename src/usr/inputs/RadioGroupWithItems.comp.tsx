import uniqueId from 'lodash/uniqueId';
import React from 'react';
import PropTypes from 'prop-types';
import RadioGroupMUI from '@material-ui/core/RadioGroup';
import RadioMUI from '@material-ui/core/Radio';
import FormControlLabelMUI from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import pickWithValues from '../a_lib/utils/pickWithValues';
import InputCircularProgress from '../a_lib/components/InputCircularProgress';
import { RadioGroupWithItemsProps, RadioGroupWithItemsTypes } from './RadioGroupWithItems.props';

const styles: any = () => ({
    group: {
        position: 'relative',
    },
});

interface RadioGroupWithItemsState {
    selectedValueLocal?: string;
}

/**
 * Radio buttons allow the user to select one option from a set.
 * Use radio buttons when the user needs to see all available options.
 * If available options can be collapsed, consider using a dropdown menu because it uses less space.
 */
class RadioGroupWithItems extends React.Component<RadioGroupWithItemsProps, RadioGroupWithItemsState> {

    static propTypes: PropTypes.InferProps<RadioGroupWithItemsProps>;
    static defaultProps: PropTypes.InferProps<RadioGroupWithItemsProps>;
    uniqueName: string;

    constructor(props: RadioGroupWithItemsProps) {
        super(props);
        this.uniqueName = uniqueId('radioGroup');
        this.state = {
            selectedValueLocal: this.props.selectedValue,
        };
    }

    componentDidUpdate(prevProps: RadioGroupWithItemsProps, prevState: RadioGroupWithItemsState) {
        const { selectedValue } = this.props;
        const { selectedValueLocal } = this.state;
        if (selectedValue !== prevProps.selectedValue && selectedValue !== selectedValueLocal) {
            this.setState({ selectedValueLocal: selectedValue });
        }
    }

    handleChange = (e: React.MouseEvent<HTMLInputElement>) => {
        this.setState({
            selectedValueLocal: e.currentTarget.value,
        });
        if (this.props.onChange) {
            this.props.onChange(e.currentTarget.value);
        }
    };

    render() {
        const { classes, items, loading, row, labelPlacement, size } = this.props;
        const radioElements: JSX.Element[] = [];
        if (items && items.length > 0) {
            let radioItem: any;
            let muiRadioItemProps: any;
            let muiRadioLabelProps: any;
            for (let i = 0; i < items.length; i++) {
                radioItem = items[i];
                if (radioItem) {
                    const { label, value, required, disabled, color } = radioItem;
                    muiRadioLabelProps = pickWithValues({ label, labelPlacement });
                    if (labelPlacement) {
                        muiRadioLabelProps.labelPlacement = labelPlacement;
                    }
                    muiRadioItemProps = pickWithValues({ value, required, disabled, color, size });
                    if (loading) {
                        muiRadioItemProps.disabled = true;
                    }
                    radioElements.push(
                        <FormControlLabelMUI
                            key={`${this.uniqueName}${i}`}
                            {...muiRadioLabelProps}
                            control={<RadioMUI {...muiRadioItemProps} />}
                        />
                    )
                }
            }
        }
        const { selectedValueLocal: value } = this.state;
        const muiRadioGroupProps: any = pickWithValues({ row, value });
        return (
            <RadioGroupMUI
                aria-label={this.uniqueName}
                name={this.uniqueName}
                className={classes.group}
                {...muiRadioGroupProps}
                onChange={this.handleChange}
            >
                {radioElements}
                {loading && (
                    <InputCircularProgress/>
                )}
            </RadioGroupMUI>
        );
    }
}

RadioGroupWithItems.propTypes = RadioGroupWithItemsTypes;

RadioGroupWithItems.defaultProps = {
    items: [
        { label: 'Orange', value: 'orange', labelPlacement: 'end', color: 'default' },
        { label: 'Green', value: 'green', labelPlacement: 'end', color: 'default' },
        { label: 'Blue', value: 'blue', labelPlacement: 'end', color: 'default' },
    ],
    row: true,
    selectedValue: 'Green'
};

export default withStyles(styles)(RadioGroupWithItems);
