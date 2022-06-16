import { css } from '@emotion/react';

export const breakpointMinWidthMixin = (acc, current, breakpoints) => {
  acc[current] = (...args) => css`
    @media (min-width: ${breakpoints[current]}) {
      ${css(...args)};
    }
  `;

  return acc;
};


export const breakpointMaxWidthMixin = (acc, current, breakpoints) => {
  acc[current] = (...args) => css`
    @media (max-width: ${breakpoints[current]}) {
      ${css(...args)};
    }
  `;

  return acc;
};
