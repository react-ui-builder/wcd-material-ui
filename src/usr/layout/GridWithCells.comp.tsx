import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import GridMUI from '@material-ui/core/Grid';
import gridSpacingMap from '../a_lib/utils/gridSpacingMap';
import gridMap from '../a_lib/utils/gridMap';
import { GridWithCellsProps, GridWithCellsTypes } from './GridWithCells.props';

class GridWithCells extends React.Component<GridWithCellsProps, any> {

    static propTypes: PropTypes.InferProps<GridWithCellsProps>;
    static defaultProps: PropTypes.InferProps<GridWithCellsProps>;

    render() {
        const { spacing, alignContent, alignItems, direction, justify, wrap, cells } = this.props;
        const contentList: ReactNode[] = [];
        if (cells && cells.length > 0) {
            cells.forEach((contentCellItem, idx) => {
                const { child, lg, md, sm, xl, xs, zeroMinWidth } = contentCellItem;
                contentList.push(
                    <GridMUI
                        key={`cell${idx}`}
                        item={true}
                        lg={gridMap[lg!]}
                        md={gridMap[md!]}
                        sm={gridMap[sm!]}
                        xl={gridMap[xl!]}
                        xs={gridMap[xs!]}
                        zeroMinWidth={zeroMinWidth}
                    >
                        {child}
                    </GridMUI>
                );
            });
        }
        return (
            <GridMUI
                container={true}
                alignContent={alignContent}
                alignItems={alignItems}
                justify={justify}
                wrap={wrap}
                direction={direction}
                spacing={gridSpacingMap[spacing!] as any}
            >
                {contentList}
            </GridMUI>
        );
    }
}

GridWithCells.propTypes = GridWithCellsTypes;

GridWithCells.defaultProps = {
    spacing: '0',
    alignContent: 'stretch',
    alignItems: 'stretch',
    direction: 'row',
    justify: 'flex-start',
    wrap: 'nowrap',
    cells: [
        {
            child: <span/>,
            lg: 'false',
            md: 'false',
            sm: 'false',
            xl: 'false',
            xs: 'auto',
            zeroMinWidth: false,
        }
    ],
};

export default GridWithCells;
