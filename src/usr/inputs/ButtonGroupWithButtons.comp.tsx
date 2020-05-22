import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import ButtonGroupMUI from '@material-ui/core/ButtonGroup';
import ButtonCircularProgress from '../a_lib/components/ButtonCircularProgress';
import pickWithValues from '../a_lib/utils/pickWithValues';
import { ButtonGroupWithButtonsProps, ButtonGroupWithButtonsTypes } from './ButtonGroupWithButtons.props';

const useStyles: any = makeStyles(() => ({
    button: {
        position: 'relative',
    },
}));

/**
 * The ButtonGroup component can be used to group outlined (the default) or contained buttons.
 */
const ButtonGroupWithButtons = (props: ButtonGroupWithButtonsProps): JSX.Element => {
    const classes: any = useStyles();

    const handleButtonClick = (buttonProps: { id?: string, href?: string }) => (e: React.MouseEvent<HTMLElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (props.onClick) {
            props.onClick(buttonProps);
        }
    };

    const { buttons, variant, size, fullWidth } = props;

    const buttonsElements: JSX.Element[] = [];
    if (buttons && buttons.length > 0) {
        let muiButtonProps: any;
        for (let i = 0; i < buttons.length; i++) {
            const { id, loading, label, disabled, href, color, endIcon, startIcon } = buttons[i];
            muiButtonProps = pickWithValues({ disabled, href, color });
            if (loading) {
                muiButtonProps.disabled = true;
            }
            if (label) {
                muiButtonProps.startIcon = startIcon;
                muiButtonProps.endIcon = endIcon;
                buttonsElements.push(
                    <ButtonMUI
                        key={`${id}${i}`}
                        className={classes.button}
                        onClick={handleButtonClick({ id, href })}
                        {...muiButtonProps}
                    >
                        {label}
                        {loading && (
                            <ButtonCircularProgress size={size}/>
                        )}
                    </ButtonMUI>
                );
            } else {
                buttonsElements.push(
                    <ButtonMUI
                        key={`${id}${i}`}
                        className={classes.button}
                        onClick={handleButtonClick({ id, href })}
                        {...muiButtonProps}
                    >
                        {startIcon}
                        {endIcon}
                        {loading && (
                            <ButtonCircularProgress size={size}/>
                        )}
                    </ButtonMUI>
                );
            }
        }
    }

    const muiButtonGroupProps: any = pickWithValues({ variant, size, fullWidth });
    return (
        <ButtonGroupMUI {...muiButtonGroupProps}>
            {buttonsElements}
        </ButtonGroupMUI>
    );
};

ButtonGroupWithButtons.propTypes = ButtonGroupWithButtonsTypes;

ButtonGroupWithButtons.defaultProps = {
    buttons: [
        { id: '0001', label: 'Button1' },
        { id: '0002', label: 'Button2' },
        { id: '0003', label: 'Button3' },
    ]
};

export default ButtonGroupWithButtons;
