import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import {TypographyProps, TypographyTypes} from "../a_lib/props/typography.props";

export interface CardHeaderProps {
    action?: any;
    avatar?: {
        defaultLetter?: string;
        src?: string;
    };
    classes?: any;
    component?: string;
    disableTypography?: boolean;
    subHeader?: string;
    subheaderTypographyProps?: object;
    title?: string;
    titleTypographyProps?: object;
}

export interface CardMediaProps {
    component?: string;
    image?: string;
    src?: string;
    title?: string;
}

export interface CardProps {
    actionComponents?: JSX.Element[];
    isActionArea?: boolean;
    header?: CardHeaderProps;
    media?: CardMediaProps;
    content?: JSX.Element;
    variant?: 'outlined' | 'elevation';
    fullWidth?: boolean;
    onClick?: (buttonProps: { id?: string, href?: string }) => void;
}

export const CardHeaderTypes: PropTypes.InferProps<CardHeaderProps> = {
    /**
     * The action to display in the card header.
     */
    action: PropTypes.node,
    /**
     * The Avatar for the Card Header.
     */
    avatar: PropTypes.shape({
        defaultLetter: PropTypes.string,
        src: PropTypes.string,
    }),
    /**
     * Override or extend the styles applied to the component. See CSS API for more details.
     */
    classes: PropTypes.object,
    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * 	If true, subheader and title won't be wrapped by a Typography component. This can be useful to render an alternative Typography variant by wrapping the title text, and optional subheader text with the Typography component.
     */
    disableTypography: PropTypes.bool,
    /**
     * 	The content of the component.
     */
    subHeader: PropTypes.string,
    /**
     * 	These props will be forwarded to the subheader (as long as disableTypography is not true).
     */
    subheaderTypographyProps: PropTypes.object,
    /**
     * The content of the Card Title.
     */

    title: PropTypes.string,
    /**
     * 	These props will be forwarded to the title (as long as disableTypography is not true).
     */
    titleTypographyProps: PropTypes.object,
};

export const CardMediaTypes: PropTypes.InferProps<CardMediaProps> = {
    /**
     * The component used for the root node. Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * 	Image to be displayed as a background image. Either image or src prop must be specified. Note that caller must specify height otherwise the image will not be visible.
     */
    image: PropTypes.string,
    /**
     * An alias for image property. Available only with media components. Media components: video, audio, picture, iframe, img.
     */
    src: PropTypes.string,
    /**
     * Title for image
     */
    title: PropTypes.string,

};

export const CardTypes: PropTypes.InferProps<CardProps> = {
    /**
     * Action area
     */
    actionComponents: PropTypes.arrayOf(PropTypes.node),
    /**
     * If true, card will be shown as action area, with effects
     */
    isActionArea: PropTypes.bool,
    /**
     * Header content
     */
    header: PropTypes.shape(CardHeaderTypes),
    /**
     * Media content
     */
    media: PropTypes.shape(CardMediaTypes),
    /**
     * Card content
     */
    content: PropTypes.node,
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['outlined', 'elevation']),
    /**
     * If true, the button group will take up the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /*
     * Triggered when the user clicks on one of the buttons in the group
     *
     */
    onClick: PropTypes.func
};
