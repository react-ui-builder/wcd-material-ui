import PropTypes from 'prop-types';

export interface TypographyProps {
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
    display?: 'initial' | 'block' | 'inline';
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    variant?: 'h1' |
        'h2' |
        'h3' |
        'h4' |
        'h5' |
        'h6' |
        'subtitle1' |
        'subtitle2' |
        'body1' |
        'body2' |
        'caption' |
        'button' |
        'overline' |
        'srOnly' |
        'inherit';
    letterSpacing?: string;
    text?: string;
}

export const TypographyTypes: PropTypes.InferProps<TypographyProps> = {
    // Set the text-align on the component.
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),
    // Controls the display type
    display: PropTypes.oneOf(['initial', 'block', 'inline']),
    // If true, the text will have a bottom margin.
    gutterBottom: PropTypes.bool,
    /**
     * If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     * Note that text overflow can only happen with block or inline-block level elements
     * (the element needs to have a width in order to overflow).
     */
    noWrap: PropTypes.bool,
    // If true, the text will have a bottom margin.
    paragraph: PropTypes.bool,
    // Applies the theme typography styles.
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
        'srOnly',
        'inherit'
    ]),
    /**
     * Letter spacing CSS
     */
    letterSpacing: PropTypes.string,
    // The content of the component.
    text: PropTypes.string,
};
