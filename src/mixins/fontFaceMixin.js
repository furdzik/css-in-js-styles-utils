import { css } from '@emotion/react';

export const fontFaceMixin = (familyName, src, weight = 'normal', fontStyle = 'normal') => css`
  @font-face {
    font-family: "${familyName}";
    font-style: ${fontStyle};
    font-weight: ${weight};
    src:
      url("${src.woff}") format("woff"),
      url("${src.ttf}") format("truetype"),
      url("${src.svg}##{${familyName}") format("svg");
  }
`;
