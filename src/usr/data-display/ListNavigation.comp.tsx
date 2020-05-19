import get from 'lodash/get';
import React from 'react';
import PropTypes from 'prop-types';
import { Theme, withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import pickWithValues from 'usr/a_lib/utils/pickWithValues';
import { ListItemProps, ListNavigationProps, ListNavigationTypes } from './ListNavigation.props';

const styles: any = (theme: Theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
});

class ListNavigation extends React.Component<ListNavigationProps, any> {

    static propTypes: PropTypes.InferProps<ListNavigationProps>;
    static defaultProps: PropTypes.InferProps<ListNavigationProps>;

    handleItemClick = (item: ListItemProps) => (e: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        const { onListNavigationItemClick } = this.props;
        if (onListNavigationItemClick) {
            onListNavigationItemClick(item.url);
        }
    };

    handleItemToggle = (item: ListItemProps) => (e: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        const { onListNavigationItemExpandClick, onListNavigationItemCollapseClick } = this.props;
        if (item.expanded && onListNavigationItemCollapseClick) {
            onListNavigationItemCollapseClick(item.url);
        } else if (!item.expanded && onListNavigationItemExpandClick) {
            onListNavigationItemExpandClick(item.url);
        }
    };

    renderList = (listItems: ListItemProps[], level: number = 0) => {
        const { classes, dense, icons, itemsTextVariant } = this.props;
        const resultElementList: any[] = [];
        if (listItems && listItems.length > 0) {
            listItems.forEach((item: ListItemProps, idx: number) => {
                if (item) {
                    const {
                        primaryText,
                        secondaryText,
                        url: href,
                        selected,
                        expanded,
                        disabled,
                        childrenItems,
                        divider,
                        iconIndex
                    } = item;
                    const listItemProperties = pickWithValues({ dense, divider, selected, disabled });
                    const uniqueKey = `listItem${idx}.${level}`;
                    const iconElement = get(icons, `[${iconIndex}]`);
                    if (childrenItems && childrenItems.length > 0) {
                        resultElementList.push(
                            <ListItem
                                key={uniqueKey}
                                button={true}
                                {...listItemProperties}
                                onClick={this.handleItemToggle(item)}
                            >
                                {iconElement && (
                                    <ListItemIcon>
                                        {iconElement}
                                    </ListItemIcon>
                                )}
                                <ListItemText
                                    primary={<Typography variant={itemsTextVariant}
                                                         color="primary">{primaryText}</Typography>}
                                    secondary={secondaryText}
                                />
                                {expanded ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                            </ListItem>
                        );
                        resultElementList.push(
                            <Collapse
                                key={`collapse.${uniqueKey}`}
                                in={expanded}
                                timeout="auto"
                                unmountOnExit={true}
                            >
                                {this.renderList(childrenItems, level + 1)}
                            </Collapse>
                        );
                    } else {
                        resultElementList.push(
                            <ListItem
                                key={uniqueKey}
                                button={true}
                                {...listItemProperties}
                                onClick={this.handleItemClick(item)}
                            >
                                {iconElement && (
                                    <ListItemIcon>
                                        {iconElement}
                                    </ListItemIcon>
                                )}
                                {href
                                    ? (
                                        <ListItemText
                                            primary={
                                                <Link
                                                    color="primary"
                                                    underline="none"
                                                    variant={itemsTextVariant}
                                                    href={href}
                                                    onClick={this.handleItemClick(item)}
                                                >
                                                    {primaryText}
                                                </Link>
                                            }
                                            secondary={secondaryText}
                                        />
                                    )
                                    : (
                                        <ListItemText
                                            primary={<Typography variant={itemsTextVariant}
                                                                 color="primary">{primaryText}</Typography>}
                                            secondary={secondaryText}
                                        />
                                    )
                                }
                            </ListItem>
                        );
                    }
                }
            });
        }
        return (
            <List
                component="div"
                className={level > 0 ? classes.nested : ''}
                disablePadding={true}
            >
                {resultElementList}
            </List>
        );
    };

    render() {
        if (this.props.items) {
            return this.renderList(this.props.items);
        }
        return null;
    }
}

ListNavigation.propTypes = ListNavigationTypes;

ListNavigation.defaultProps = {
    items: [
        {
            url: '/page1',
            primaryText: 'List Item 00001',
            secondaryText: 'Subtext 00001',
            divider: true,
        },
        {
            url: '/page2',
            primaryText: 'List Item 00002',
            secondaryText: 'Subtext 00002'
        },
        {
            url: '/page3',
            primaryText: 'List Item 00003',
            secondaryText: 'Subtext 00003',
        },
        {
            url: '/page4',
            primaryText: 'List Item 00004',
            secondaryText: 'Subtext 00004'
        }
    ],
    itemsTextVariant: 'body1'
};

export default withStyles(styles)(ListNavigation);
