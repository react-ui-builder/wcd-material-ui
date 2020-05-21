import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles: any = makeStyles(theme => ({
  button: {
    position: 'relative',
  },
  progress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 1,
  }
}));

const progressCircleSizesMap: {[id: string]: number} = {
  'small': 16,
  'medium': 20,
  'large': 24,
};

export interface ButtonCircularProgressProps {
  size?: string;
}

const ButtonCircularProgress = (props: ButtonCircularProgressProps) => {
  const classes: any = useStyles();
  const progressSize: number = progressCircleSizesMap[props.size || 'medium'];
  const progressStyle: any = {
    marginTop: -(progressSize / 2),
    marginLeft: -(progressSize / 2),
  };
  return (
    <CircularProgress
      size={progressSize}
      style={progressStyle}
      className={classes.progress}
    />
  );
};

export default ButtonCircularProgress;