import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import MenuItemMUI from '@material-ui/core/MenuItem';
import MenuMUI from '@material-ui/core/Menu';
import pickWithValues from '../a_lib/utils/pickWithValues';
import ButtonCircularProgress from '../a_lib/components/ButtonCircularProgress';
import { ButtonProps, ButtonTypes } from './Button.props';

const useStyles: any = makeStyles(() => ({
    button: {
        position: 'relative',
    },
}));

/**
 * Buttons allow users to take actions, and make choices, with a single tap.
 *
 * This button component lets you add a menu popup.
 */
const Button = (props: ButtonProps): JSX.Element => {
    const {
        label,
        color,
        variant,
        disabled,
        endIcon,
        startIcon,
        size,
        fullWidth,
        href,
        loading,
        menu,
    } = props;

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<any>(null);

    const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (props.onClick) {
            props.onClick();
        }
    };

    const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuItemClick = (id?: string, href?: string) => (e: React.MouseEvent<HTMLElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        setAnchorEl(null);
        if (props.onMenuItemClick) {
            props.onMenuItemClick({ id, href });
        }
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    let menuItems: JSX.Element[] = [];
    if (menu && menu.length > 0) {
        for (let i = 0; i < menu.length; i++) {
            if (menu[i]) {
                const { disabled, selected, id, href } = menu[i];
                menuItems.push(
                    <MenuItemMUI
                        key={`menuItem${i}`}
                        disabled={disabled}
                        selected={selected}
                        onClick={handleMenuItemClick(id, href)}
                    >
                        {menu[i].label}
                    </MenuItemMUI>
                );
            }
        }
    }
    const muiButtonProps: any = pickWithValues({ variant, color, disabled, size, fullWidth, href });
    if (startIcon) {
        muiButtonProps.startIcon = startIcon;
    }
    if (endIcon) {
        muiButtonProps.endIcon = endIcon;
    }
    if (loading) {
        muiButtonProps.disabled = true;
    }
    const buttonElement: JSX.Element = (
        <ButtonMUI
            className={classes.button}
            {...muiButtonProps}
            onClick={menuItems.length > 0 ? handleOpenMenu : handleButtonClick}
        >
            {label}
            {loading && (
                <ButtonCircularProgress size={size}/>
            )}
        </ButtonMUI>
    );
    if (menuItems.length > 0) {
        return (
            <React.Fragment>
                {buttonElement}
                <MenuMUI
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                >
                    {menuItems}
                </MenuMUI>
            </React.Fragment>
        );
    } else {
        return buttonElement;
    }
};

Button.propTypes = ButtonTypes;

Button.defaultProps = {
    label: 'Button',
    variant: 'contained',
};

export default Button;
