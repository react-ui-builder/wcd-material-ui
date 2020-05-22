import React from 'react';
import PropTypes from 'prop-types';
import TypographyMUI from '@material-ui/core/Typography';
import pickWithValues from 'usr/a_lib/utils/pickWithValues';
import { TypographyProps, TypographyTypes } from './Typography.props';

/**
 * Use typography to present your design and content as clearly and efficiently as possible.
 *
 * Too many type sizes and styles at once can spoil any layout.
 * A typographic scale has a limited set of type sizes that work well together along with the layout grid.
 */
class Typography extends React.Component<TypographyProps, any> {

    static propTypes: PropTypes.InferProps<TypographyProps>;
    static defaultProps: PropTypes.InferProps<TypographyProps>;

    render(): JSX.Element {
        const {
            align,
            color,
            display,
            gutterBottom,
            noWrap,
            paragraph,
            variant,
            letterSpacing,
            text
        } = this.props;
        const muiTypographyProps =
            pickWithValues({ align, color, display, gutterBottom, noWrap, paragraph, variant, text });
        let spanStyle: any = {};
        if (letterSpacing) {
            spanStyle.letterSpacing = letterSpacing;
        }
        return (
            <TypographyMUI
                {...muiTypographyProps}
            >
                <span style={spanStyle}>{text}</span>
            </TypographyMUI>
        );
    }
}

Typography.propTypes = TypographyTypes;

Typography.defaultProps = {
    align: 'inherit',
    color: 'initial',
    display: 'initial',
    gutterBottom: false,
    noWrap: false,
    paragraph: false,
    variant: 'body1',
    text: 'Text here'
};

export default Typography;
