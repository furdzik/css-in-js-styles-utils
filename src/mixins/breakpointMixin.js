import { css } from '@emotion/react';

import { breakpoints } from '../basic/breakpoints';

export const breakpointMinWidthMixin = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const breakpointMaxWidthMixin = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] - 1}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
