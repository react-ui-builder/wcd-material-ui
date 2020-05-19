import PropTypes from 'prop-types';

export interface ImgProps {
    alt?: string,
    crossorigin?: 'anonymous' | 'use-credentials',
    height?: number,
    src?: string,
    width?: number,
}

export const ImgTypes: PropTypes.InferProps<ImgProps> = {
    alt: PropTypes.string,
    crossorigin: PropTypes.oneOf(['anonymous', 'use-credentials']),
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
};