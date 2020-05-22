import React from 'react';
import PropTypes from 'prop-types';
import IconButtonMUI from '@material-ui/core/IconButton';
import pickWithValues from '../a_lib/utils/pickWithValues';
import ButtonCircularProgress from '../a_lib/components/ButtonCircularProgress';
import { IconButtonProps, IconButtonTypes } from './IconButton.props';

/**
 * Icon buttons are commonly found in app bars and toolbars.
 *
 * Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected,
 * such as adding or removing a star to an item.
 */
class IconButton extends React.Component<IconButtonProps, any> {

    static propTypes: PropTypes.InferProps<IconButtonProps>;
    static defaultProps: PropTypes.InferProps<IconButtonProps>;

    handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.props.onClick) {
            this.props.onClick();
        }
    };

    render() {
        const { color, edge, disabled, icon, size, loading } = this.props;
        const muiButtonProps: any = pickWithValues({ color, edge, disabled, size });
        if (loading) {
            muiButtonProps.disabled = true;
        }
        return (
            <IconButtonMUI
                onClick={this.handleButtonClick}
                {...muiButtonProps}
            >
                {icon}
                {loading && (
                    <ButtonCircularProgress size={size}/>
                )}
            </IconButtonMUI>
        );
    }
}

IconButton.propTypes = IconButtonTypes;

IconButton.defaultProps = {
    icon: <span/>,
    onClick: () => {
        console.info('IconButton.onClick is not set');
    }
};

export default IconButton;
