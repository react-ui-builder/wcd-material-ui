import PropTypes from 'prop-types';

export interface FlexboxProps {
    flexDirection?: '' | 'row' | 'row-reverse' | 'column' | 'column-reverse';
    flexWrap?: '' | 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: '' |
        'center' |
        'start' |
        'end' |
        'flex-start' |
        'flex-end' |
        'left' |
        'right' |
        'normal' |
        'space-between' |
        'space-around' |
        'space-evenly' |
        'stretch';
    alignItems?: '' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'baseline' | 'normal' | 'stretch';
    alignContent?: '' |
        'center' |
        'start' |
        'end' |
        'flex-start' |
        'flex-end' |
        'baseline' |
        'space-between' |
        'space-around' |
        'space-evenly' |
        'normal' |
        'stretch';
    order?: number;
    flex?: string;
    flexGrow?: number;
    flexShrink?: number;
    alignSelf?: '' |
        'auto' |
        'center' |
        'start' |
        'end' |
        'flex-start' |
        'flex-end' |
        'baseline' |
        'normal' |
        'stretch';
}

export const FlexboxTypes: PropTypes.InferProps<FlexboxProps> = {
    /**
     * The flex-direction CSS property sets how flex items are placed
     * in the flex container defining the main axis and the direction (normal or reversed).
     */
    flexDirection: PropTypes.oneOf(['', 'row', 'row-reverse', 'column', 'column-reverse']),
    /**
     * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
     */
    flexWrap: PropTypes.oneOf(['', 'nowrap', 'wrap', 'wrap-reverse']),
    /**
     * The CSS justify-content property defines how the browser distributes space between and around content
     * items along the main-axis of a flex container, and the inline axis of a container.
     */
    justifyContent: PropTypes.oneOf([
        '',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'left',
        'right',
        'normal',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch'
    ]),
    /**
     * The CSS align-items property sets the align-self value on all direct children as a group.
     */
    alignItems: PropTypes.oneOf([
        '', 'center', 'start', 'end', 'flex-start', 'flex-end', 'baseline', 'normal', 'stretch'
    ]),
    /**
     * The CSS align-content property sets the distribution of space between
     * and around content items along a flexbox's cross-axis.
     */
    alignContent: PropTypes.oneOf([
        '',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'baseline',
        'space-between',
        'space-around',
        'space-evenly',
        'normal',
        'stretch'
    ]),
    /**
     * The order CSS property sets the order to lay out an item in a flex or grid container.
     * Items in a container are sorted by ascending order value and then by their source code order.
     */
    order: PropTypes.number,
    /**
     * The flex CSS property sets how a flex item will grow or shrink to fit the space available in its flex container.
     * It is a shorthand for flex-grow, flex-shrink, and flex-basis.
     */
    flex: PropTypes.string,
    /**
     * The flex-grow CSS property sets the flex grow factor of a flex item main size.
     * It specifies how much of the remaining space in the flex container should be assigned to the item
     * (the flex grow factor).
     */
    flexGrow: PropTypes.number,
    /**
     * The flex-shrink CSS property sets the flex shrink factor of a flex item.
     * If the size of all flex items is larger than the flex container,
     * items shrink to fit according to flex-shrink.
     */
    flexShrink: PropTypes.number,
    /**
     * The align-self CSS property overrides a grid or flex item's align-items value.
     * In Flexbox, it aligns the item on the cross axis.
     */
    alignSelf: PropTypes.oneOf([
        '',
        'auto',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'baseline',
        'normal',
        'stretch'
    ]),

};