import React from 'react';
import PropTypes from 'prop-types';
import CheckboxMUI from '@material-ui/core/Checkbox';
import FormControlLabelMUI from '@material-ui/core/FormControlLabel';
import pickWithValues from '../a_lib/utils/pickWithValues';
import { CheckboxProps, CheckboxTypes } from './Checkbox.props';

/**
 * Checkboxes allow the user to select one or more items from a set.
 */
class Checkbox extends React.Component<CheckboxProps, any> {

    static propTypes: PropTypes.InferProps<CheckboxProps>;
    static defaultProps: PropTypes.InferProps<CheckboxProps>;

    handleChange = (e: React.MouseEvent<HTMLInputElement>) => {
        const checked = e.currentTarget.checked;
        const { value, id } = this.props;
        if (this.props.onChange) {
            this.props.onChange({ checked, value, id });
        }
    };

    render() {
        const { disabled, label, labelPlacement } = this.props;
        const { value, checked, id, color, indeterminate, required } = this.props;
        const muiFormControlLabelProps: any = pickWithValues({ disabled, label, labelPlacement });
        const muiCheckboxProps: any = pickWithValues({ value, checked, id, color, indeterminate, required });
        return (
            <FormControlLabelMUI
                control={
                    <CheckboxMUI {...muiCheckboxProps} onChange={this.handleChange}/>
                }
                {...muiFormControlLabelProps}
            />
        );
    }
}

Checkbox.propTypes = CheckboxTypes;

Checkbox.defaultProps = {
    label: 'Checkbox',
    color: 'default',
};

export default Checkbox;
