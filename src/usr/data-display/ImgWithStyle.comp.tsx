import React from 'react';
import PropTypes from 'prop-types';
import { ImgWithStyleProps, ImgWithStyleTypes } from './ImgWithStyle.props';

/**
 * The HTML <img> element embeds an image into the document.
 */
class ImgWithStyle extends React.Component<ImgWithStyleProps, any> {

    static propTypes: PropTypes.InferProps<ImgWithStyleProps>;
    static defaultProps: PropTypes.InferProps<ImgWithStyleProps>;

    render(): JSX.Element {
        const { style, src, alt } = this.props;
        return (
            <img style={style} src={src} alt={alt}/>
        );
    }
}

ImgWithStyle.propTypes = ImgWithStyleTypes;

ImgWithStyle.defaultProps = {
    style: {
        width: '100%',
    },
    alt: 'No Image'
};

export default ImgWithStyle;
