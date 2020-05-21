import React from 'react';
import * as _ from "lodash";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AvatarMUI from '@material-ui/core/Avatar';
import ChipMUI from '@material-ui/core/Chip';
import { ChipsProps, ChipsTypes } from "./Chips.props";
import pickWithValues from "../a_lib/utils/pickWithValues";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
    }),
);

const Chips = (props: ChipsProps): JSX.Element => {
    const classes: any = useStyles();

    const {chipItems, chipsColor, chipsSize, chipsVariant, isChipsDisabled, isClickable, onDelete,
        allowDeleting, align} = props;

    const handleDelete = (id?: string) => () => {
        if (onDelete) {
            onDelete(id ? id : "");
        }
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    let flexAlignment = null;
    switch (align) {
        case "center":
            flexAlignment = 'center';
            break;
        case "left":
            flexAlignment = 'flex-start';
            break;
        case "right":
            flexAlignment = 'flex-end';
            break;
        case "justify":
            flexAlignment = 'justify';
            break;
        default:
            break;
    }
    const styleAlignment = flexAlignment ? {justifyContent: flexAlignment} : {};

    let chipsToRender: JSX.Element[] = [];
    const commonChipProps = pickWithValues({
        color: chipsColor,
        size: chipsSize,
        variant: chipsVariant,
        disabled: isChipsDisabled,
        clickable: isClickable,
    });
    if (chipItems && chipItems.length) {
        let avatarElement: JSX.Element | null = null;
        _.forEach(chipItems, (chip, index) => {
            const {avatar, color, disabled, id, label} = chip;
            let ownProps = pickWithValues({color, disabled, label});
            if (allowDeleting) {
                ownProps.onDelete = handleDelete(id);
            }
            const {alt, child, defLetter, src, variant } = avatar!;
            if (src) {
                avatarElement = (
                    <AvatarMUI {...pickWithValues({alt, src, variant})} />
                );
            } else if (defLetter) {
                avatarElement = (
                    <AvatarMUI {...pickWithValues({alt, variant})}>
                        {defLetter}
                    </AvatarMUI>
                );
            } else {
                avatarElement = (
                    <AvatarMUI {...pickWithValues({alt, variant})}>
                        {child}
                    </AvatarMUI>
                );
            }
            chipsToRender.push(
                <ChipMUI
                    key={"" + id + index}
                    avatar={avatarElement}
                    {...commonChipProps}
                    {...ownProps}
                />
            );
        })
    }

    return (
        <div className={classes.root} style={styleAlignment}>
            {chipsToRender}
        </div>
    );
};

Chips.propTypes = ChipsTypes;

Chips.defaultProps = {
    chipsSize: 'small',
    align: 'center',
};

export default Chips;