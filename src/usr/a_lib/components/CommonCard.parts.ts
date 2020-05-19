import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

export const CommonCardHeader = withStyles(() => ({
  title: {
    fontSize: '16px',
    fontWeight: 700
  },
  subheader: {
    fontSize: '10px'
  }
}))(CardHeader);

export const CommonCardAvatar = withStyles(() => ({
  root: {
    width: '1.5em',
    height: '1.5em',
    fontSize: '12px'
  }
}))(Avatar);

export const CommonCardContent = withStyles(() => ({
  root: {
    flexGrow: 1,
  }
}))(CardContent);

export const CommonCardActionArea = withStyles(() => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
}))(CardActionArea);

export const CommonCard = withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }
}))(Card);

export const CommonCardMedia = withStyles(() => ({
  root: {
    width: '100%',
    height: '250px',
    borderBottom: '1px solid #cdcdcd',
    backgroundSize: '100%',
    backgroundPosition: 'top center'
  }
}))(CardMedia);
