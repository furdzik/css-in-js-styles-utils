import { css } from '@emotion/react';

export const breakpointMinWidthMixin = (acc, current, breakpoints) => {
  acc[current] = (...args) => css`
    @media (min-width: ${breakpoints[current]}) {
      ${css(...args)};
    }
  `;

  return acc;
};


// export const breakpointMaxWidthMixin = Object
//   .keys(breakpoints)
//   .reduce((acc, current) => {
//   acc[current] = (...args) => css`
//     @media (max-width: ${breakpoints[current] - 1}) {
//       ${css(...args)};
//     }
//   `;
//
//   return acc;
// }, {});
