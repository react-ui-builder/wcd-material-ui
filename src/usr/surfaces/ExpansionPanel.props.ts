import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Theme } from '@material-ui/core';

export interface ExpansionPanelProps {
    children?: any;
    classes?: any;
    defaultExpanded?: boolean;
    disabled?: boolean;
    expanded?: boolean;
    onChange?: () => any;
    square?: boolean;

    areaControls: string;
    detailsText: string;
    id: string;
    summaryText: string;

    theme?: Theme;
}

export const ExpansionPanelTypes: PropTypes.InferProps<ExpansionPanelProps> = {
    /**
     * The content of the expansion panel.
     */
    children: PropTypes.node,
    /**
     *    Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * If true, expands the panel by default.
     */
    defaultExpanded: PropTypes.bool,
    /**
     *    If true, the panel will be displayed in a disabled state.
     */
    disabled: PropTypes.bool,
    /**
     * If true, expands the panel, otherwise collapse it. Setting this prop enables control over the panel.
     */
    expanded: PropTypes.bool,
    /**
     *    Callback fired when the expand/collapse state is changed.
     *
     *     Signature:
     *     function(event: object, expanded: boolean) => void
     *     event: The event source of the callback.
     *     expanded: The expanded state of the panel.
     */
    onChange: PropTypes.func,
    /**
     *    If true, rounded corners are disabled.
     */
    square: PropTypes.bool,
    /**
     * area-controls value

     id: string;

     */
    areaControls: PropTypes.string.isRequired,
    /**
     * ID
     */
    id: PropTypes.string.isRequired,
    /**
     * Text to be shown on expanded area
     */
    detailsText: PropTypes.string.isRequired,
    /**
     * Text to be shown on collapsed area
     */
    summaryText: PropTypes.string.isRequired,
};
