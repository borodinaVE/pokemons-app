export const getHeight = (height: number) =>
  `${height}'00'  ${(height * 2.54).toFixed(1)}m`;
