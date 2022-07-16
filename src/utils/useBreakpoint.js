import _throttle from 'lodash/throttle';

export const useBreakpoint = (breakpoint) => {
  let isBreakpoint = window.innerWidth <= breakpoint;

  const calculateIsBreakpoint = _throttle(() => {
    isBreakpoint = window.innerWidth <= breakpoint;
  }, 500);

  window.addEventListener('resize', calculateIsBreakpoint);

  return isBreakpoint;
};

export const useBreakpointHeight = (breakpoint) => {
  let isBreakpoint = window.innerHeight <= breakpoint;

  const calculateIsBreakpoint = _throttle(() => {
    isBreakpoint = window.innerHeight <= breakpoint;
  }, 500);

  window.addEventListener('resize', calculateIsBreakpoint);

  return isBreakpoint;
};
