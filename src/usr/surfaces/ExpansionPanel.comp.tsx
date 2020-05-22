import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelMUI from "@material-ui/core/ExpansionPanel";
import { ExpansionPanelProps, ExpansionPanelTypes } from './ExpansionPanel.props';

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import pickWithValues from "../a_lib/utils/pickWithValues";

/**
 *  Expansion panels contain creation flows and allow lightweight editing of an element.
 *  An expansion panel is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.
 */

class ExpansionPanel extends React.Component<ExpansionPanelProps, any> {

    static propTypes: PropTypes.InferProps<ExpansionPanelProps>;
    static defaultProps: PropTypes.InferProps<ExpansionPanelProps>;

    render() {
        const {
            children, classes, defaultExpanded, disabled, expanded, square,
            summaryText, detailsText, id, areaControls
        } = this.props;
        const panelProps = pickWithValues({ children, classes, defaultExpanded, disabled, expanded, square });
        return (
            <div>
                <ExpansionPanelMUI {...panelProps}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls={areaControls}
                        id={id}
                    >
                        <Typography>{summaryText}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            {detailsText}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanelMUI>
            </div>
        );
    }
}

ExpansionPanel.propTypes = ExpansionPanelTypes;

ExpansionPanel.defaultProps = {
    defaultExpanded: false,
    id: 'expanded_panel_1',
    areaControls: 'panel1a-conten',
    detailsText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus sit amet blandit leo lobortis eget.`,
    summaryText: `Expanded Panel 1`,
};

export default ExpansionPanel;
