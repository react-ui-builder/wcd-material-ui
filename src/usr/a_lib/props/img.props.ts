import PropTypes from 'prop-types';

export interface ImgProps {
    alt?: string;
    crossorigin?: 'anonymous' | 'use-credentials';
    height?: string;
    src?: string;
    width?: number;
}

export const ImgTypes: PropTypes.InferProps<ImgProps> = {
    alt: PropTypes.string,
    crossorigin: PropTypes.oneOf(['anonymous', 'use-credentials']),
    height: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.string,
};