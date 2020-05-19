import get from 'lodash/get';
import isString from 'lodash/isString';
import { Theme } from '@material-ui/core';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

const hueMap: {[id: string]: any} = {
  'white': '#ffffff',
  'black': '#000000',
  'red': red,
  'pink': pink,
  'purple': purple,
  'deepPurple': deepPurple,
  'indigo': indigo,
  'blue': blue,
  'lightBlue': lightBlue,
  'cyan': cyan,
  'teal': teal,
  'green': green,
  'lightGreen': lightGreen,
  'lime': lime,
  'yellow': yellow,
  'amber': amber,
  'orange': orange,
  'deepOrange': deepOrange,
  'brown': brown,
  'grey': grey,
  'blueGrey': blueGrey
};

export default function (colorHue: string, colorShade: string, theme?: Theme) {
  let foundColor: any = null;
  if (colorHue) {
    foundColor = hueMap[colorHue];
    if (!foundColor) {
      if (theme) {
        foundColor = get(theme, `palette.${colorHue}`);
      }
    } else if (!isString(foundColor)) {
      if (colorShade) {
        foundColor = foundColor[colorShade];
      } else {
        foundColor = foundColor[500];
      }
    }
  }
  return foundColor;
}
