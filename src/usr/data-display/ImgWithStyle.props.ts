import PropTypes from 'prop-types';

export interface ImgWithStyleProps {
    style?: any;
    src?: string;
    alt?: string;
}

export const ImgWithStyleTypes: PropTypes.InferProps<ImgWithStyleProps> = {
    /**
     * Inline styles of the component. The object is used as a style property of the img component.
     */
    style: PropTypes.object,
    /**
     * The src attribute is required, and contains the path to the image you want to embed.
     */
    src: PropTypes.string,
    /**
     * The alt attribute holds a text description of the image,
     * which isn't mandatory but is incredibly useful for accessibility —
     * screen readers read this description out to their users so they know what the image means.
     * Alt text is also displayed on the page if the image can't be loaded for some reason:
     * for example, network errors, content blocking, or linkrot.
     */
    alt: PropTypes.string,
};
