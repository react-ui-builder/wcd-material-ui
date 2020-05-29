import PropTypes from 'prop-types';
import { Theme } from '@material-ui/core';

export interface PanelProps {
    id: string;
    action?: {
        divider?: boolean;
        buttons?: JSX.Element[];
    };
    disabled?: boolean;
    details?: JSX.Element;
    summary?: JSX.Element;
}

export interface ExpansionPanelProps {
    classes?: any;
    noMargins?: boolean;
    onChange?: (id: string, expanded: boolean) => any;
    square?: boolean;
    panels?: PanelProps[];
    theme?: Theme;
    variant?: 'expansionPanel' | 'accordion';
}

export const PanelTypes: PropTypes.InferProps<PanelProps> = {
    /**
     * ID
     */
    id: PropTypes.string.isRequired,
    /**
     * Actions configuration
     */
    action: PropTypes.shape({
        /**
         * Divider before actions section
         */
        divider: PropTypes.bool,
        /**
         * Action Buttons
         */
        buttons: PropTypes.arrayOf(PropTypes.node),
    }),
    /**
     *    If true, the panel will be displayed in a disabled state.
     */
    disabled: PropTypes.bool,
    /**
     * Node to be shown on expanded area
     */
    details: PropTypes.node,
    /**
     * Node to be shown on collapsed area
     */
    summary: PropTypes.node,
};

export const ExpansionPanelTypes: PropTypes.InferProps<ExpansionPanelProps> = {
    /**
     *    Override or extend the styles applied to the component. See CSS API below for more details.
     */
    classes: PropTypes.object,
    /**
     * if true - no top/bottom margins between panels
     */
    noMargins: PropTypes.bool,
    /**
     *    Callback fired when the expand/collapse state is changed.
     *
     *     Signature:
     *     function(id: string, expanded: boolean) => void
     *     id: panel id,
     *     expanded: The expanded state of the panel.
     */
    onChange: PropTypes.func,
    /**
     *    If true, rounded corners are disabled.
     */
    square: PropTypes.bool,
    /**
     * Panels
     */
    panels: PropTypes.arrayOf(PropTypes.shape(PanelTypes)),
    /**
     * Panel variants
     * 'individual' - each panel has own expand control
     * 'accordion' - accordion: if any panel is open, all other are closed
     * 'noMarginsAccordion' - squared accordion without margins between nodes
     */
    variant: PropTypes.oneOf(['expansionPanel', 'accordion'])

};
