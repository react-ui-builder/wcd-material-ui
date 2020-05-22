import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import * as _ from "lodash";
import { CardProps, CardTypes } from './Card.props';


import CardMUI from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import AvatarMUI from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 100,
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
    }),
);

/**
 * Cards contain content and actions about a single subject.
 * Cards are surfaces that display content and actions on a single topic.
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
 */
const Card = (props: CardProps) => {
    const classes: any = useStyles();

    const handleButtonClick = (buttonProps: { id?: string, href?: string }) => (e: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (props.onClick) {
            props.onClick(buttonProps);
        }
    };

    const { actionComponents, header, media, content, variant, fullWidth, isActionArea } = props;

    let headerElement = null;
    if (header && (header?.action || header?.title || header?.subHeader || !_.isEmpty(header?.avatar))) {
        headerElement = (
            <CardHeader
                avatar={(header?.avatar?.src || header?.avatar?.defaultLetter) &&
                <AvatarMUI
                  src={header?.avatar && header?.avatar.src}
                >
                    {header?.avatar && header.avatar.defaultLetter}
                </AvatarMUI>
                }
                action={props.header?.action}
                title={props.header?.title}
                subheader={props.header?.subHeader}
                disableTypography={header?.disableTypography}
            />
        )
    }
    let mediaElement = null;
    if (media && (media.image || media.src)) {
        mediaElement = (
            <CardMedia
                className={classes.media}
                image={media?.image}
                src={media?.src}
                title={media?.title}
            />
        )
    }
    let contentElement = null;
    if (content) {
        contentElement = (
            <CardContent>
                {content}
            </CardContent>
        )
    }

    const actionAreaElement = isActionArea ?
        (
            <CardActionArea>
                {headerElement}
                {mediaElement}
                {contentElement}
            </CardActionArea>
        ) : null;
    let actionsElement = null;
    if (actionComponents && actionComponents.length) {
        let actionButtons: JSX.Element[] = [];
        _.forEach(actionComponents, (actionComponent, index) => {
            if (actionComponent) {
                actionButtons.push(actionComponent);
            }
        });
        if (actionButtons && actionButtons.length) {
            actionsElement = (
                <CardActions>
                    {actionButtons}
                </CardActions>
            )
        }
    }

    return (
        <CardMUI
            className={!fullWidth ? classes.root : ''}
            variant={props?.variant}
        >
            {actionAreaElement}
            {!actionAreaElement && headerElement}
            {!actionAreaElement && mediaElement}
            {!actionAreaElement && contentElement}
            {actionsElement}
        </CardMUI>
    );
};

Card.propTypes = CardTypes;

Card.defaultProps = {
    variant: `elevation`,
};

export default Card;
