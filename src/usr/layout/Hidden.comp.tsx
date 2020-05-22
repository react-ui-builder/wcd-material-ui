import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import HiddenMUI from '@material-ui/core/Hidden';

export interface HiddenProps {
    xsDown?: boolean;
    visibilityIn?: '' |
        'xsDown' | 'smDown' | 'mdDown' | 'lgDown' | 'xlDown' |
        'xsUp' | 'smUp' | 'mdUp' | 'lgUp' | 'xlUp';
    content?: ReactNode;
}

/**
 * Quickly and responsively toggle the visibility value of components and more with the hidden utilities.
 */
class Hidden extends React.Component<HiddenProps, any> {

    static propTypes: PropTypes.InferProps<HiddenProps>;
    static defaultProps: PropTypes.InferProps<HiddenProps>;

    render(): JSX.Element {
        const { visibilityIn, content } = this.props;
        let newProps: any = {};
        if (visibilityIn) {
            newProps[visibilityIn] = true;
        }
        return (
            <HiddenMUI {...newProps}>
                {content}
            </HiddenMUI>
        );
    }
}

Hidden.propTypes = {
    visibilityIn: PropTypes.oneOf([
        '',
        'xsDown', 'smDown', 'mdDown', 'lgDown', 'xlDown',
        'xsUp', 'smUp', 'mdUp', 'lgUp', 'xlUp',
    ]),
    content: PropTypes.node,
};

Hidden.defaultProps = {
    visibilityIn: '',
    content: <span/>
};

export default Hidden;
