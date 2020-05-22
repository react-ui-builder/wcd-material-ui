import React from 'react';
import PropTypes from 'prop-types';
import AvatarMUI from "@material-ui/core/Avatar";
import { Theme, withStyles } from '@material-ui/core/styles';
import { AvatarProps, AvatarTypes } from './Avatar.props';
import pickWithValues from "usr/a_lib/utils/pickWithValues";

const styles: any = (theme: Theme) => ({
    root: {
        position: 'relative'
    },
});

/**
 * Avatars are found throughout material design with uses in everything from tables to dialog menus.
 */
class Avatar extends React.Component<AvatarProps, any> {

    static propTypes: PropTypes.InferProps<AvatarProps>;
    static defaultProps: PropTypes.InferProps<AvatarProps>;

    render() {
        const {
            alt,
            child,
            defLetter,
            imgProps,
            src,
            variant,
        } = this.props;
        const nonEmptyProps: any = pickWithValues({ alt, imgProps, src, variant });
        if (src) {
            return (
                <AvatarMUI {...nonEmptyProps} />
            );
        } else if (defLetter) {
            return (
                <AvatarMUI {...nonEmptyProps}>
                    {defLetter}
                </AvatarMUI>
            );
        } else {
            return (
                <AvatarMUI {...nonEmptyProps}>
                    {child}
                </AvatarMUI>
            );
        }

    }
}

Avatar.propTypes = AvatarTypes;

Avatar.defaultProps = {
    variant: `circle`,
};

export default withStyles(styles)(Avatar);
