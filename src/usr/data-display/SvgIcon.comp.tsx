import React from 'react';
import PropTypes from 'prop-types';
import SvgIconMUI from '@material-ui/core/SvgIcon';
import { SvgIconProps, SvgIconTypes } from './SvgIcon.props';
import pickWithValues from '../a_lib/utils/pickWithValues';

class SvgIcon extends React.Component<SvgIconProps, any> {

    static propTypes: PropTypes.InferProps<SvgIconProps>;
    static defaultProps: PropTypes.InferProps<SvgIconProps>;

    render(): JSX.Element {
        const { fontSize, color, viewBox, paths } = this.props;
        return (
            <SvgIconMUI {...pickWithValues({ fontSize, color, viewBox })}>
                {paths!.map((pathItem, index) => {
                    return (
                        <path key={`path${index}`} {...pickWithValues(pathItem)} />
                    );
                })}
            </SvgIconMUI>
        );
    }
}

SvgIcon.propTypes = SvgIconTypes;

SvgIcon.defaultProps = {
    fontSize: 'inherit',
    color: 'inherit',
    viewBox: '0 0 24 24',
    paths: [{ d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' }],
};

export default SvgIcon;
