import _throttle from 'lodash/throttle';

export const useBreakpoint = (breakpoint) => {
  let isPortrait = window.innerWidth <= breakpoint;

  const calculateIsPortrait = _throttle(() => {
    isPortrait = window.innerWidth <= breakpoint;
  }, 500);

  window.addEventListener('resize', calculateIsPortrait);

  return isPortrait;
};
