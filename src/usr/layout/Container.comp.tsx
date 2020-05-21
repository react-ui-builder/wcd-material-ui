import React from 'react';
import PropTypes from 'prop-types';
import ContainerMUI from '@material-ui/core/Container';
import { Theme, withStyles } from '@material-ui/core/styles';
import StyleObjectBuilder from 'usr/a_lib/utils/StyleObjectBuilder';
import { ContainerProps, ContainerTypes } from './Container.props';

const styles: any = (theme: Theme) => ({
    root: {
        position: 'relative'
    },
});

/**
 * _From Material UI documentation_
 *
 * The container centers your content horizontally. It's the most basic layout element.
 * * A fluid container width is bounded by that `maxWidth` property value.
 * * If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the `fixed` property. The max-width matches the min-width of the current breakpoint.
 */
class Container extends React.Component<ContainerProps, any> {

    static propTypes: PropTypes.InferProps<ContainerProps>;
    static defaultProps: PropTypes.InferProps<ContainerProps>;

    render() {
        const {
            classes,
            centralAreaElement,
            fixed,
            maxWidth,
            disableMaxWidth,
            outerMargins,
            centralAreaPadding
        } = this.props;

        const containerStyle = new StyleObjectBuilder()
            .withStyleProps(outerMargins)
            .withStyleProps(centralAreaPadding)
            .build();

        return (
            <ContainerMUI
                className={classes.root}
                style={containerStyle}
                fixed={fixed}
                maxWidth={disableMaxWidth ? false : maxWidth}
            >
                {centralAreaElement}
            </ContainerMUI>
        );
    }
}

Container.propTypes = ContainerTypes;

Container.defaultProps = {
    fixed: false,
    maxWidth: 'lg',
    disableMaxWidth: false,
    centralAreaElement: <span/>
};

export default withStyles(styles)(Container);
