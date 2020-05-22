import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Theme, withStyles } from '@material-ui/core/styles';
import TypographyMUI from '@material-ui/core/Typography';
import BreadcrumbsMUI from '@material-ui/core/Breadcrumbs';
import LinkMUI from '@material-ui/core/Link';
import pickWithValues from '../a_lib/utils/pickWithValues';
import { BreadCrumbsWithLinksProps, BreadcrumbsWithLinksTypes } from './BreadcrumbsWithLinks.props';

const styles: any = (theme: Theme) => ({
    itemTextWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    itemIconWrapper: {
        marginRight: theme.spacing(0.5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

/**
 * Breadcrumbs allow users to make selections from a range of values.
 */
class BreadcrumbsWithLinks extends React.Component<BreadCrumbsWithLinksProps, any> {

    static propTypes: PropTypes.InferProps<BreadCrumbsWithLinksProps>;
    static defaultProps: PropTypes.InferProps<BreadCrumbsWithLinksProps>;

    handleClick = (href?: string) => (e: React.MouseEvent<HTMLElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.props.onClick) {
            this.props.onClick(href);
        }
    };

    render(): JSX.Element {
        const {
            classes,
            links,
            separatorText,
            separatorNode,
            itemsAfterCollapse,
            itemsBeforeCollapse,
            maxItems
        } = this.props;
        const linksElements = [];
        if (links && links.length > 0) {
            for (let i = 0; i < links.length; i++) {
                const { disabled, id, href, color, underline, variant, label, icon } = links[i];
                if (!disabled && href) {
                    linksElements.push(
                        <LinkMUI
                            key={`breadcrumbsLink${id}${i}`}
                            {...pickWithValues({ href, color, underline, variant })}
                            onClick={this.handleClick(href)}
                        >
                            {icon
                                ? (
                                    <div className={classes.itemTextWrapper}>
                                        <div className={classes.itemIconWrapper}>
                                            {icon}
                                        </div>
                                        {label}
                                    </div>
                                )
                                : label
                            }
                        </LinkMUI>
                    )
                } else {
                    linksElements.push(
                        <TypographyMUI
                            key={`breadcrumbsDisabledLink${id}${i}`}
                            {...pickWithValues({ color, variant })}
                        >
                            {icon
                                ? (
                                    <div className={classes.itemTextWrapper}>
                                        <div className={classes.itemIconWrapper}>
                                            {icon}
                                        </div>
                                        {label}
                                    </div>
                                )
                                : label
                            }
                        </TypographyMUI>
                    );
                }
            }
        }
        let separator: ReactNode | string = '/';
        if (separatorText && separatorText.length > 0) {
            separator = separatorText;
        } else if (separatorNode) {
            separator = separatorNode;
        }
        return (
            <BreadcrumbsMUI
                aria-label="breadcrumb"
                separator={separator}
                {...pickWithValues({ maxItems, itemsBeforeCollapse, itemsAfterCollapse })}
            >
                {linksElements}
            </BreadcrumbsMUI>
        );
    }
}

BreadcrumbsWithLinks.propTypes = BreadcrumbsWithLinksTypes;

BreadcrumbsWithLinks.defaultProps = {
    itemsAfterCollapse: 1,
    itemsBeforeCollapse: 1,
    maxItems: 8,
    links: [
        { id: '0001', label: 'Path 1', href: '#', variant: 'inherit' },
        { id: '0002', label: 'Path 2', href: '#', variant: 'inherit' },
        { id: '0003', label: 'Path 3', href: '#', variant: 'inherit' },
    ]
};

export default withStyles(styles)(BreadcrumbsWithLinks);
