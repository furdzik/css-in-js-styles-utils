import { css } from '@emotion/react';

import { typography } from '../basic/typography';

const NormalizeStyles = ({
  fontSize = typography.fontSize.normal,
  lineHeight = typography.lineHeight.normal,
  base = typography.fontSize.base
}) => css`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    background: red;
    font-size: ${base || typography.fontSize.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    font-size: ${fontSize || typography.fontSize.normal};
    line-height: ${lineHeight || typography.lineHeight.normal};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  textarea,
  select,
  input,
  button {
    outline: none;
  }

  input {
    padding: 0;
    border-radius: 0;

    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      pointer-events: none;
    }

    &::-webkit-contacts-auto-fill-button {
      position: absolute;
      right: 0;
      display: none;
      visibility: hidden;
      pointer-events: none;
    }

    &::-webkit-caps-lock-indicator,
    &::-webkit-credentials-auto-fill-button {
      display: none;
      pointer-events: none;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px #ffffff inset;
    }

    &:required {
      box-shadow: none;
    }
  }

  button {
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    &:active,
    &:focus {
      outline: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export {
  NormalizeStyles
};
