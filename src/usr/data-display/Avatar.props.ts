import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@material-ui/core';
import { ImgProps, ImgTypes } from 'usr/a_lib/props/img.props';

export interface AvatarProps {
    classes?: any;
    alt?: string;
    child?: ReactNode;
    defLetter?: string;
    imgProps?: ImgProps;
    src?: string;
    variant?: 'circle' | 'rounded' | 'square';
    theme?: Theme;
}

export const AvatarTypes: PropTypes.InferProps<AvatarProps> = {
    /**
     * Used in combination with `src` or `srcSet` to provide an `alt` attribute for the rendered `img` element.
     */
    alt: PropTypes.string,
    /**
     * 	Used to render icon or text elements inside the Avatar if src is not set. This can be an element, or just a string.
     */
    child: PropTypes.node,
    /**
     * Default Letter
     */
    defLetter: PropTypes.string,
    /**
     * Attributes applied to the img element if the component is used to display an image. It can be used to listen for
     * the loading error event.
     */
    imgProps: PropTypes.shape(ImgTypes),
    /**
     * The `src` attribute for the `img` element.
     */
    src: PropTypes.string,
    /**
     * The shape of the avatar.
     */
    variant: PropTypes.oneOf(['circle', 'rounded', 'square']),
};
