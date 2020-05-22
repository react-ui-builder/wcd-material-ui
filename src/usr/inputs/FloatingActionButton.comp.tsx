import React from 'react';
import PropTypes from 'prop-types';
import { Theme, withStyles } from '@material-ui/core/styles';
import FabMUI from '@material-ui/core/Fab';
import pickWithValues from '../a_lib/utils/pickWithValues';
import ButtonCircularProgress from '../a_lib/components/ButtonCircularProgress';
import { FloatingActionButtonProps, FloatingActionButtonTypes } from './FloatingActionButton.props';

const styles: any = (theme: Theme) => ({
    button: {
        position: 'relative',
    },
    label: {
        marginLeft: theme.spacing(1),
    }
});

/**
 * A floating action button (FAB) performs the primary, or most common, action on a screen.
 */
class FloatingActionButton extends React.Component<FloatingActionButtonProps, any> {

    static propTypes: PropTypes.InferProps<FloatingActionButtonProps>;
    static defaultProps: PropTypes.InferProps<FloatingActionButtonProps>;

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
        const { classes, label, color, variant, disabled, icon, size, href, loading } = this.props;
        const muiButtonProps: any = pickWithValues({ variant, color, disabled, size, href });
        let labelElement: JSX.Element | null = null;
        if (label) {
            if (icon) {
                labelElement = <span className={classes.label}>{label}</span>;
            } else {
                labelElement = <span>{label}</span>;
            }
        }
        if (loading) {
            muiButtonProps.disabled = true;
        }
        return (
            <FabMUI
                className={classes.button}
                onClick={this.handleButtonClick}
                {...muiButtonProps}
            >
                {icon}
                {labelElement}
                {loading && (
                    <ButtonCircularProgress size={size}/>
                )}
            </FabMUI>
        );
    }
}

FloatingActionButton.propTypes = FloatingActionButtonTypes;

FloatingActionButton.defaultProps = {};

export default withStyles(styles)(FloatingActionButton);
