# css-in-js-styles-utils

Utils for Styled Components (packages: `styled-components`, `@emotion`, `linaria` etc.).

### Table of content

1. [Installation and usage](#installation-and-usage)
   - [`css-in-js` normalize and reset](#css-in-js-normalize-and-reset)
   - [`css-in-js` mixins](#css-in-js-mixins)
   - [React components utils](#react-components-utils)
2. [Licence](#licence)
3. [Contributing](#contributing)

# Installation and usage

Step 1:

```
npm i css-in-js-styles-utils
```

Step 2:

Import whatever function you need. See description below.

## `css-in-js` normalize and reset

### Normalize

This normalizes styles for styled components packages, to use it you need to install one of the styled-components packages like: `@emotion`.

```js
import { css } from '@emotion/react';
import { NormalizeStyles } from 'css-in-js-styles-utils';

// @emotion
const GlobalStyles = css`
  ${NormalizeStyles};
`;

export {
  GlobalStyles
};
```

### Reset

```js
import { css } from '@emotion/react';
import { ResetStyles } from 'css-in-js-styles-utils';

// @emotion
const GlobalStyles = css`
  ${ResetStyles};
`;

export {
  GlobalStyles
};
```

## `css-in-js` mixins

### List of mixins

### breakpoint's mixins and default breakpoints

- `breakpoints` - list of default breakpoints
- `breakpointMinWidthMixin` - Responsive web design - min-width mixin
- `breakpointMaxWidthMixin` - Responsive web design - max-width mixin

```js
import { breakpoints } from 'css-in-js-styles-utils';
```

#### Default breakpoints values:

|     Breakpoint name | Value  |
|--------------------:|:------:|
|          smallPhone | 320px  |
|       portraitPhone | 360px  |
|      landscapePhone | 480px  |
|         smallTablet | 600px  |
|      portraitTablet | 768px  |
|     landscapeTablet | 840px  |
|         smallLaptop | 1024px |
|              laptop | 1280px |
|             desktop | 1366px |
|           hdDesktop | 1440px |
|          fhdDesktop | 1920px |

### Use with mixins

1. Create style mixin:

    ```js
    // styles/breakpointMixin.js
    
    import { breakpoints, breakpointMinWidthMixin } from 'css-in-js-styles-utils';
    
    export const breakpointMixin = Object
      .keys(breakpoints)
      .reduce(
        (acc, current) => breakpointMinWidthMixin(acc, current, breakpoints), {}
      );
    ```
    
    And then you can use it like this:
    
    ```js
    // some component e.g.: Button.styles.js
    // import breakpointMixin from previesly created file

    const ButtonWrapper = styled.div`
      color: yellow; // mobile styles
      
      ${breakpointMixin.smallTablet(css`
        color: red; // style for 600px width or more
      `)};
    `;
    ```

2. Import every time

@TODO

### OPTIONS:

1. You can use your own breakpoint's object:

```js
// 1. Create style mixin

// styles/breakpointMixin.js
import { breakpointMinWidthMixin } from 'css-in-js-styles-utils';

const breakpoints = {
  phone: '360px',
  tablet: '600px',
  laptop: '1280px',
  desktop: '1366px'
};

export const breakpointMixin = Object
  .keys(breakpoints)
  .reduce(
    (acc, current) => breakpointMinWidthMixin(acc, current, breakpoints), {}
  );

// some component e.g.: Button.styles.js
// import breakpointMixin from previesly created file

const ButtonWrapper = styled.div`
  color: yellow; // mobile styles
  
  // Use names that exist in yor own breakpoints variable
  ${breakpointMixin.phone(css`
    color: red; // style for 600px width or more
  `)};
`;

// 2. Import every time

@TODO
```

### Change HEX color to RGB (with transparency)

**Arguments:**

- **hex** - is required, e.g. `#000000` (you need to provide a 6 digit hex color)
- **alpha** - is optional - use if you want to have hex color with opacity

```js
import { hexToRgbMixin } from 'css-in-js-styles-utils';

const ButtonWrapper = styled.div`
  color: hexToRgbMixin('#000000', .3);
`;
```
### FontFace mixin

**Arguments:**
- familyName
- src - object with woff, ttf and svg paths
- weight - default: 'normal'
- fontStyle - default: 'normal'

```js
import { fontFaceMixin } from 'css-in-js-styles-utils';

import myFontWoff from './assets/fonts/myFont.woff';
import myFontTtf from './assets/fonts/myFont.ttf';
import myFontSvg from './assets/fonts/myFont.svg';

const src = {
  woff: myFontWoff,
  ttf: myFontTtf,
  svg: myFontSvg,
};

const GlobalStyles = css`
  // Normal
  ${fontFaceMixin('myFontName', src)};
  // Bold
  ${fontFaceMixin('myFontName', src, 400)};
  // Italic
  ${fontFaceMixin('myFontName', src, 'normal', 'italic')};

  body {
    font-family: 'myFontName';
  }
`;
```

## React components utils

### Breakpoint hook for React

If you don't want to render some component when in mobile use `useBreakpoint` hook.

```js
import { useBreakpoint, breakpoints }  from 'css-in-js-styles-utils';

const SomeComponent = (props) => {
  // return true if window inner width is smaller or equle of provided breakpoint
  const isMobile = useBreakpoint(breakpoints.phone);
  
  return (
    <React.Fragment>
      <div>This I want to show alway.</div>
      {
        isMobile ? (
          <div>But this ony on mobile.</div>
        ) : null
      }
    </React.Fragment>
  );
};
```

## Licence

This project uses [MIT Licence](LICENSE)

## Contributing

If you want to contribute read the [contributing guidelines]() before opening an issue or pull request [WIP].

## Style guide

This project uses Kamisama style guidelines: [IF.Kamisama](https://github.com/furdzik/IF.Kamisama).
