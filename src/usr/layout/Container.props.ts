import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@material-ui/core';
import { MarginProps, MarginTypes } from 'usr/a_lib/props/margin.props';
import { PaddingProps, PaddingTypes } from 'usr/a_lib/props/padding.props';

export interface ContainerProps {
    theme?: Theme;
    classes?: any;
    fixed?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    disableMaxWidth?: boolean;
    centralAreaElement?: ReactNode;
    outerMargins?: MarginProps;
    centralAreaPadding?: PaddingProps;
}

export const ContainerTypes: PropTypes.InferProps<ContainerProps> = {
    /**
     * Set the max-width to match the min-width of the current breakpoint.
     * This is useful if you'd prefer to design for a fixed set of sizes instead of trying to
     * accommodate a fully fluid viewport.
     * It's fluid by default.
     */
    fixed: PropTypes.bool,
    /**
     * Determine the max-width of the container.
     * The container width grows with the size of the screen.
     * Set disableMaxWidth to true to disable maxWidth.
     */
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /**
     * Set disableMaxWidth to true to disable maxWidth.
     */
    disableMaxWidth: PropTypes.bool,
    /**
     * The content of the container
     */
    centralAreaElement: PropTypes.element,
    /**
     * Container outer margins
     */
    outerMargins: PropTypes.shape(MarginTypes),
    /**
     * Container central area padding
     */
    centralAreaPadding: PropTypes.shape(PaddingTypes),
};
