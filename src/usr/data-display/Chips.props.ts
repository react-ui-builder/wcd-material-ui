import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@material-ui/core';

export interface ChipAvatarProps {
    alt?: string;
    child?: ReactNode;
    defLetter?: string;
    src?: string;
    variant?: 'circle' | 'rounded' | 'square';
}

export interface ChipProps {
    avatar?: ChipAvatarProps;
    color?: 'default' | 'primary' | 'secondary';
    disabled?: boolean;
    id?: string;
    label?: string;
}

export interface ChipsProps {
    align?: 'left' | 'center' | 'right' | 'justify';
    allowDeleting?: boolean;
    isClickable?: boolean;
    isChipsDisabled?: boolean;
    chipsColor?: 'default' | 'primary' | 'secondary';
    chipsSize?: 'small' | 'medium';
    chipsVariant?: 'default' | 'outlined';
    theme?: Theme;
    chipItems: ChipProps[];
    onDelete?: (id: string) => void;
}

export const ChipAvatarTypes: PropTypes.InferProps<ChipAvatarProps> = {
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
     * The `src` attribute for the `img` element.
     */
    src: PropTypes.string,
    /**
     * The shape of the avatar.
     */
    variant: PropTypes.oneOf(['circle', 'rounded', 'square']),
};

export const ChipTypes: PropTypes.InferProps<ChipProps> = {
    /**
     * Avatar element
     */
    avatar: PropTypes.shape(ChipAvatarTypes),
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['default', 'primary', 'secondary']),
    /**
     * If true, the chips should be displayed in a disabled state.
     */
    disabled: PropTypes.bool,
    /**
     * ID
     */
    id: PropTypes.string,
    /**
     * Label text
     */
    label: PropTypes.string,
};

export const ChipsTypes: PropTypes.InferProps<ChipsProps> = {
    /**
     * Align chips
     */
    align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    /**
     * Show delete icon
     */
    allowDeleting: PropTypes.bool,
    /**
     * If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined.
     * If false, the chip will not be clickable, even if onClick prop is defined. This can be used, for example,
     * along with the component prop to indicate an anchor Chip is clickable.
     */
    isClickable: PropTypes.bool,
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    chipsColor: PropTypes.oneOf(['default', 'primary', 'secondary']),
    /**
     * If true, the chips should be displayed in a disabled state.
     */
    isChipsDisabled: PropTypes.bool,
    /**
     *
     */
    chipsSize: PropTypes.oneOf(['small', 'medium']),
    /**
     * The shape of the chip.
     */
    chipsVariant: PropTypes.oneOf(['default', 'outlined']),
    /**
     * Items to show
     */
    chipItems: PropTypes.arrayOf(PropTypes.shape(ChipTypes)),
    /**
     * Callback function fired when the delete icon is clicked. If set, the delete icon will be shown.
     */
    onDelete: PropTypes.func,
};
