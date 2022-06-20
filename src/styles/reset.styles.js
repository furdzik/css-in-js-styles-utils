import { css } from '@emotion/react';
import { typography } from '../basic/typography';

const ResetStyles = (
  fontSize = typography.fontSize.normal,
  lineHeight = typography.lineHeight.normal,
  baseFontSize = typography.fontSize.base
) => css`
  body {
    margin: 0;
  }
`;

export {
  ResetStyles
};
