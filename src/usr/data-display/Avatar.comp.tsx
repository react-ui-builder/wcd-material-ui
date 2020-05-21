import React from 'react';
import PropTypes from 'prop-types';
import AvatarMUI from "@material-ui/core/Avatar";
import { Theme, withStyles } from '@material-ui/core/styles';
import StyleObjectBuilder from 'usr/a_lib/utils/StyleObjectBuilder';
import { AvatarProps, AvatarTypes } from './Avatar.props';
import pickWithValues from "usr/a_lib/utils/pickWithValues";

const styles: any = (theme: Theme) => ({
    root: {
        position: 'relative'
    },
});

/**
 * _From Material UI documentation_
 *
 * # Avatar
 *
 * Avatars are found throughout material design with uses in everything from tables to dialog menus.
 *
 * ## Image avatars
 *
 * Image avatars can be created by passing standard `img` props `src` or `srcSet` to the component.
 *
 * ## Letter avatars
 *
 * Avatars containing simple characters can be created by passing a string as `children`.
 *
 *  ## Sizes
 *
 *  You can change the size of the avatar with the `height` and `width` CSS properties.
 *
 *  ## Icon avatars
 *
 * Icon avatars are created by passing an icon as `children`.
 *
 * ## Variants
 *
 * If you need square or rounded avatars, use the `variant` prop.
 *
 * ## Fallbacks
 *
 * If there is an error loading the avatar image, the component falls back to an alternative in the following order:
 *
 * - the provided children
 * - the first letter of the `alt` text
 *  - a generic avatar icon
 *
 * ## Grouped
 *
 * `AvatarGroup` renders its children as a stack.
 *
 * ## With badge
 *
 * */
class Avatar extends React.Component<AvatarProps, any> {

    static propTypes: PropTypes.InferProps<AvatarProps>;
    static defaultProps: PropTypes.InferProps<AvatarProps>;

    render() {
        const {
            alt,
            children,
            defLetter,
            imgProps,
            src,
            variant,
        } = this.props;
        const nonEmptyProps = pickWithValues({alt, imgProps, src, children, variant});
        if (src) {
            return (
                <AvatarMUI {...nonEmptyProps} />
            );
        } else {
            return (
                <AvatarMUI>
                    {defLetter}
                </AvatarMUI>
            )
        }

    }
}

Avatar.propTypes = AvatarTypes;

Avatar.defaultProps = {
    variant: `circle`,
};

export default withStyles(styles)(Avatar);
