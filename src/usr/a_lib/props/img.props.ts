import PropTypes from 'prop-types';

export interface ImgProps {
    alt?: string;
    crossOrigin?: 'anonymous' | 'use-credentials';
    height?: string;
    width?: number;
}

export const ImgTypes: PropTypes.InferProps<ImgProps> = {
    alt: PropTypes.string,
    crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials']),
    height: PropTypes.string,
    width: PropTypes.string,
};