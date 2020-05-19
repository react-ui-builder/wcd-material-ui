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

  handleChange = (e: React.MouseEvent) => {
    const checked = (e.currentTarget as any).checked;
    const { value, id } = this.props;
    this.props.onChange({ checked, value, id });
  };

  render() {
    const { disabled, label, labelPlacement } = this.props;
    const { value, checked, id, color, indeterminate, required } = this.props;
    const muiFormControlLabelProps = pickWithValues({ disabled, label, labelPlacement });
    const muiCheckboxProps = pickWithValues({ value, checked, id, color, indeterminate, required });
    return (
      <FormControlLabelMUI
        control={
          <CheckboxMUI {...muiCheckboxProps} onChange={this.handleChange} />
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
