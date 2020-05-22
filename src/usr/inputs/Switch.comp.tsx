import React from 'react';
import PropTypes from 'prop-types';
import SwitchMUI from '@material-ui/core/Switch';
import FormControlLabelMUI from '@material-ui/core/FormControlLabel';
import pickWithValues from '../a_lib/utils/pickWithValues';
import { SwitchProps, SwitchTypes } from './Switch.props';

/**
 * Switches toggle the state of a single setting on or off.
 * Switches are the preferred way to adjust settings on mobile. The option that the switch controls,
 * as well as the state it’s in, should be made clear from the corresponding inline label.
 */
class Switch extends React.Component<SwitchProps, any> {

    static propTypes: PropTypes.InferProps<SwitchProps>;
    static defaultProps: PropTypes.InferProps<SwitchProps>;

    handleChange = (e: React.MouseEvent<HTMLInputElement>) => {
        const checked = e.currentTarget.checked;
        const { value } = this.props;
        if (this.props.onChange) {
            this.props.onChange({ checked, value });
        }
    };

    render(): JSX.Element {
        const { disabled, label, labelPlacement } = this.props;
        const { value, checked, id, color, required, size } = this.props;
        const muiFormControlLabelProps: any = pickWithValues({ disabled, label, labelPlacement });
        const muiSwitchProps: any = pickWithValues({ value, checked, id, color, required });
        if (size) {
            muiSwitchProps.size = size;
        }
        return (
            <FormControlLabelMUI
                control={
                    <SwitchMUI {...muiSwitchProps} onChange={this.handleChange}/>
                }
                {...muiFormControlLabelProps}
            />
        );
    }
}

Switch.propTypes = SwitchTypes;

Switch.defaultProps = {
    label: 'Switch',
    color: 'primary'
};

export default Switch;
