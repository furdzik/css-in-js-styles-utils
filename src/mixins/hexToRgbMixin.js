export const hexToRgbMixin = (hex, alpha) => {
  const redHex = parseInt(hex.slice(1, 3), 16);
  const gHex = parseInt(hex.slice(3, 5), 16);
  const bHex = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${redHex} ${gHex} ${bHex} / ${alpha})`;
  }

  return `rgba(${redHex} ${gHex} ${bHex})`;
};
