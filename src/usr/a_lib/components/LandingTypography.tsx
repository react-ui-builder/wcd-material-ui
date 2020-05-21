import React from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import HiddenMUI from '@material-ui/core/Hidden';
import TypographyMUI from '@material-ui/core/Typography';
import StyleObjectBuilder from '../utils/StyleObjectBuilder';

const variantMapping: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'p',
  button: 'p',
  overline: 'p',
  srOnly: 'p',
  inherit: 'p'
};

export interface LandingTypographyProps {
  text?: string;
  bottomSpacing?: string;
  normalVariant?: any;
  smallVariant?: any;
  letterSpacing?: string;
  align?: any;
  color?: any;
}

const LandingTypography = (props: LandingTypographyProps) => {
  const {
    text,
    bottomSpacing,
    normalVariant,
    smallVariant,
    letterSpacing,
    align,
    color,
  } = props;

  const theme: Theme = useTheme();

  const wrapperDivStyle: any = {
    marginBottom: theme.spacing(parseInt(bottomSpacing || '0'))
  };

  const wrapperTextStyle: any = new StyleObjectBuilder().withStyleProps({ letterSpacing }).build();

  return (
    <React.Fragment>
      {/* Visible on big screen */}
      <HiddenMUI xsDown={true}>
        <div style={wrapperDivStyle}>
          <TypographyMUI
            variant={normalVariant}
            align={align}
            color={color}
            gutterBottom={false}
            variantMapping={variantMapping}
            style={wrapperTextStyle}
          >
            {text}
          </TypographyMUI>
        </div>
      </HiddenMUI>
      {/* Visible on small screen */}
      <HiddenMUI smUp={true}>
        <div style={wrapperDivStyle}>
          <TypographyMUI
            variant={smallVariant}
            align={align}
            color={color}
            gutterBottom={false}
            variantMapping={variantMapping}
            style={wrapperTextStyle}
          >
            {text}
          </TypographyMUI>
        </div>
      </HiddenMUI>
    </React.Fragment>
  );
};

export default LandingTypography;