import isEmpty from 'lodash/isEmpty';
import forOwn from 'lodash/forOwn';
import pickWithValues from './pickWithValues';
import findColor from './colorMap';
import { Theme } from '@material-ui/core';

class StyleObjectBuilder {

  theme?: Theme;
  propsObject: any;

  constructor (theme?: Theme) {
    if (theme) { this.theme = theme; }
    this.propsObject = {};
  }

  withStyleProps(props: any) {
    this.propsObject = {...this.propsObject, ...props};
    return this;
  }

  withPalette(paletteProps: any) {
    if (!this.theme) {
      throw Error('StyleObjectBuilder does not have MUI theme reference set up. Set theme reference in the constructor');
    }
    if (paletteProps) {
      if (paletteProps.color) {
        const { colorHue, colorShade } = paletteProps.color;
        this.propsObject.color = findColor(colorHue, colorShade, this.theme);
      }
      if (paletteProps.backgroundColor) {
        const { colorHue, colorShade } = paletteProps.backgroundColor;
        this.propsObject.backgroundColor = findColor(colorHue, colorShade, this.theme);
      }
    }
    return this;
  }

  build(): any {
    let resultObject: any = {};
    const validProps: any = pickWithValues(this.propsObject);
    if (!isEmpty(validProps)) {
      forOwn(validProps, (value, prop) => {
        resultObject[prop] = value;
      });
    }
    return resultObject;
  }
}

export default StyleObjectBuilder;
