import React from 'react';
import PropTypes, {arrayOf} from 'prop-types';
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import {ExpansionPanelProps, ExpansionPanelTypes, PanelProps} from './ExpansionPanel.props';
import * as _ from 'lodash';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import pickWithValues from "../a_lib/utils/pickWithValues";
import Divider from "@material-ui/core/Divider";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import {ExpansionPanelActions} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

/**
 *  Expansion panels contain creation flows and allow lightweight editing of an element.
 *  An expansion panel is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.
 */

const NoMarginsPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const NoMarginsSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const NoMarginsDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);

//class ExpansionPanel extends React.Component<ExpansionPanelProps, any> {
    const ExpansionPanel = (props: ExpansionPanelProps): JSX.Element => {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleAccordionChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [expandedList, changeExpandedList] = React.useState<string[]>([]);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        if (isExpanded) {
            changeExpandedList(list => _.concat([], list, [panel]));
        } else {
            changeExpandedList(list => _.filter(list, item => item !== panel));
        }
    };

    const createNoMarginsPanel = (panel: PanelProps,
                                  index: number,
                                  isSquare: boolean,
                                  isAccordion: boolean): JSX.Element => {

        let actionButtons: JSX.Element[] = [];
        if (panel.action && panel.action.buttons) {
            _.forEach(panel.action.buttons, (button, i) => {
                actionButtons.push(button);
            });
        }
        const {disabled, defaultExpanded, id} = panel;
        let panelProps: any = {
            disabled,
            square: isSquare,
            defaultExpanded,
            id: id ? id : `panel_${index}`,
        };
        if (isAccordion) {
            panelProps.onChange = handleAccordionChange(`panel_${index}`);
            panelProps.expanded = expanded === `panel_${index}`;
        } else {
            panelProps.onChange = handleChange(`panel_${index}`);
            panelProps.expanded = _.indexOf(expandedList, `panel_${index}`) !== -1;
        }
        return (
            <NoMarginsPanel
                {...panelProps}
                key={'expansionPanel_' + index}
            >
                <NoMarginsSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls={`areaControls_${panel.id}`}
                    areal-label={"Expand"}
                    id={panel.id}
                >
                    {panel.summary ? panel.summary : "Panel summary"}
                </NoMarginsSummary>
                <NoMarginsDetails>
                    {panel.details ? panel.details : "Panel Details"}
                </NoMarginsDetails>
                {panel.action && panel.action.divider && <Divider/>}
                <ExpansionPanelActions>
                    {actionButtons}
                </ExpansionPanelActions>
            </NoMarginsPanel>
        );
    };

    const createCommonPanel = (panel: PanelProps,
                               index: number,
                               isSquare: boolean,
                               isAccordion: boolean): JSX.Element => {

        let actionButtons: JSX.Element[] = [];
        if (panel.action && panel.action.buttons) {
            _.forEach(panel.action.buttons, (button, i) => {
                actionButtons.push(button);
            });
        }
        const {disabled, defaultExpanded, id} = panel;
        let panelProps: any = {
            disabled,
            square: isSquare,
            defaultExpanded,
            id: id ? id : `panel_${index}`
        };
        if (isAccordion) {
            panelProps.onChange = handleAccordionChange(`panel_${index}`);
            panelProps.expanded = expanded === `panel_${index}`;
        } else {
            panelProps.onChange = handleChange(`panel_${index}`);
            panelProps.expanded = _.indexOf(expandedList, `panel_${index}`) !== -1;
        }
        return (
            <MuiExpansionPanel
                {...panelProps}
                key={'expansionPanel_' + index}
            >
                <MuiExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls={`areaControls_${panel.id}`}
                    areal-label={"Expand"}
                    id={panel.id}
                >
                    {panel.summary ? panel.summary : "Panel summary"}
                </MuiExpansionPanelSummary>
                <MuiExpansionPanelDetails>
                    {panel.details ? panel.details : "Panel Details"}
                </MuiExpansionPanelDetails>
                {panel.action && panel.action.divider && <Divider/>}
                <ExpansionPanelActions>
                    {actionButtons}
                </ExpansionPanelActions>
            </MuiExpansionPanel>
        );
    };

    //const panelProps = pickWithValues({ children, classes, panels, disabled: disablePanels, square });
    const {panels, square, variant, noMargins } = props;
    let panelsElements: JSX.Element[] = [];
    if (panels && panels.length) {
        _.forEach(panels, (panel: PanelProps, index) => {
            if (noMargins) {
                panelsElements.push(createNoMarginsPanel(panel, index, !!square, variant === 'accordion'));
            } else {
                panelsElements.push(createCommonPanel(panel, index, !!square, variant === 'accordion'));
            }
        });
    }

    return (
        <div>
            {panelsElements}
        </div>
    );
};

ExpansionPanel.propTypes = ExpansionPanelTypes;

ExpansionPanel.defaultProps = {
    variant: 'accordion',
};

export default ExpansionPanel;
