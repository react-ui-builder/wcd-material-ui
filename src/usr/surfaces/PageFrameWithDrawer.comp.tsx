import React from 'react';
import PropTypes from 'prop-types';
import { Theme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import StyleObjectBuilder from 'usr/a_lib/utils/StyleObjectBuilder';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { PageFrameWithDrawerTypes, PageFrameWithDrawerProps } from './PageFrameWithDrawer.props';

const styles: any = (theme: Theme) => ({
    root: {
        display: 'flex',
        position: 'relative',
        width: '100%',
    },
    topAreaToolbar: theme.mixins.toolbar,
    topLeftAppBar: (props: PageFrameWithDrawerProps) => ({
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.up('sm')]: {
            left: 0,
            width: `${props.leftArea!.leftAreaWidth}px`
        },
    }),
    topLeftArea: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    topCentralAppBar: (props: PageFrameWithDrawerProps) => ({
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${props.leftArea!.leftAreaWidth}px)`,
            marginLeft: `${props.leftArea!.leftAreaWidth}px`,
        },
    }),
    topCentralArea: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    topCentralAreaLeftSection: {
        width: theme.spacing(5),
        marginRight: theme.spacing(1),
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    topLeftAreaCloseButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
    topCentralAreaCentralSection: {
        flexGrow: 1,
    },
    topCentralAreaRightSection: {
        width: theme.spacing(5),
        marginLeft: theme.spacing(1),
        display: 'flex',
        justifyContent: 'flex-end'
    },
    leftArea: {
        flexShrink: 0,
    },
    centralAreaWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    centralArea: {
        display: 'flex',
        position: 'relative',
        flexGrow: 1,
    },
    hiddenArea: {
        display: 'none',
    },
    actionArea: {
        position: 'fixed',
        bottom: '1em',
        right: '1em',
        zIndex: 10,
    },
});

class PageFrameWithDrawer extends React.Component<PageFrameWithDrawerProps, any> {

    static propTypes: PropTypes.InferProps<PageFrameWithDrawerProps>;
    static defaultProps: PageFrameWithDrawerProps;

    constructor(props: PageFrameWithDrawerProps) {
        super(props);
        this.state = {
            drawerOpen: false,
        };
    }

    handleDrawerOpenClick = (e: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({ drawerOpen: true });
    };

    handleDrawerCloseClick = (e: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.setState({ drawerOpen: false });
    };

    render() {
        const {
            theme,
            classes,
            hiddenElements,
            actionArea,
            centralArea,
            leftArea,
            topCentralArea,
            topLeftArea,
            pageHeight,
        } = this.props;

        const { drawerOpen } = this.state;

        let rootStyle: any = {};
        if (pageHeight) {
            rootStyle.height = pageHeight;
        }

        const topCentralAppBarStyle = new StyleObjectBuilder(theme)
            .withPalette(topCentralArea!.topCentralPalette)
            .build();

        const topCentralAreaCentralSectionStyle = new StyleObjectBuilder()
            .withStyleProps(topCentralArea!.topCentralAreaCentralSectionPadding)
            .build();

        const topCentralAreaRightSectionStyle = new StyleObjectBuilder()
            .withStyleProps(topCentralArea!.topCentralAreaRightSectionPadding)
            .build();

        const topLeftAppBarStyle = new StyleObjectBuilder(theme)
            .withPalette(topLeftArea!.topLeftAreaPalette)
            .build();

        const topLeftAreaStyle = new StyleObjectBuilder()
            .withStyleProps(topLeftArea!.topLeftAreaPadding)
            .build();

        let centralAreaStyle = new StyleObjectBuilder(theme)
            .withPalette(centralArea!.centralAreaPalette)
            .withStyleProps(centralArea!.centralAreaPadding)
            .build();

        let leftAreaStyle = new StyleObjectBuilder(theme)
            .withStyleProps(leftArea!.leftAreaPadding)
            .withPalette(leftArea!.leftAreaPalette)
            .build();
        leftAreaStyle.width = `${leftArea!.leftAreaWidth}px`;

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.root} style={rootStyle}>
                    <AppBar
                        position="fixed"
                        style={topCentralAppBarStyle}
                        elevation={parseInt((topCentralArea!.topCentralAreaElevation as string))}
                        className={classes.topCentralAppBar}
                    >
                        <div
                            className={`${classes.topCentralArea} ${classes.topAreaToolbar}`}
                        >
                            <div className={classes.topCentralAreaLeftSection}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.handleDrawerOpenClick}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </div>
                            <div
                                className={classes.topCentralAreaCentralSection}
                                style={topCentralAreaCentralSectionStyle}
                            >
                                {topCentralArea!.topCentralAreaCentralSectionElement}
                            </div>
                            <div
                                className={classes.topCentralAreaRightSection}
                                style={topCentralAreaRightSectionStyle}
                            >
                                {topCentralArea!.topCentralAreaRightSectionElement}
                            </div>
                        </div>
                    </AppBar>
                    <Hidden smUp implementation="js">
                        <Drawer
                            className={classes.leftArea}
                            variant="temporary"
                            style={{ width: `${leftArea!.leftAreaWidth}px` }}
                            open={drawerOpen}
                            anchor="left"
                            PaperProps={{ style: leftAreaStyle }}
                            ModalProps={{ keepMounted: true }}
                            onClose={this.handleDrawerCloseClick}
                        >
                            <div className={classes.topAreaToolbar}>
                                <IconButton
                                    onClick={this.handleDrawerCloseClick}
                                    className={classes.topLeftAreaCloseButton}
                                >
                                    <CloseIcon/>
                                </IconButton>
                            </div>
                            {leftArea!.leftAreaElement}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="js">
                        <Drawer
                            className={classes.leftArea}
                            variant="permanent"
                            style={{ width: `${leftArea!.leftAreaWidth}px` }}
                            PaperProps={{ style: leftAreaStyle }}
                        >
                            <AppBar
                                position="fixed"
                                style={topLeftAppBarStyle}
                                elevation={parseInt((topLeftArea!.topLeftAreaElevation as string))}
                                className={classes.topLeftAppBar}
                            >
                                <div
                                    className={`${classes.topLeftArea} ${classes.topAreaToolbar}`}
                                    style={topLeftAreaStyle}
                                >
                                    {topLeftArea!.topLeftAreaElement}
                                </div>
                            </AppBar>
                            <div className={classes.topAreaToolbar}/>
                            {leftArea!.leftAreaElement}
                        </Drawer>
                    </Hidden>
                    <main
                        className={classes.centralAreaWrapper}
                        style={centralAreaStyle}
                    >
                        <div className={classes.topAreaToolbar}/>
                        <div className={classes.centralArea}>
                            {centralArea!.centralAreaElement}
                        </div>
                    </main>
                </div>
                <div className={classes.actionArea}>
                    {actionArea!.actionAreaElement}
                </div>
                <div className={classes.hiddenArea}>
                    {hiddenElements}
                </div>
            </React.Fragment>
        );
    }
}

PageFrameWithDrawer.propTypes = PageFrameWithDrawerTypes;

PageFrameWithDrawer.defaultProps = {
    topLeftArea: {
        topLeftAreaElevation: '1',
        topLeftAreaElement: <span/>,
    },
    topCentralArea: {
        topCentralAreaElevation: '1',
    },
    leftArea: {
        leftAreaWidth: 250,
        leftAreaElement: <span/>
    },
    centralArea: {
        centralAreaElement: <span/>,
    },
    actionArea: {
        actionAreaElement: null,
    }
};

export default withStyles(styles, { withTheme: true })(PageFrameWithDrawer);
