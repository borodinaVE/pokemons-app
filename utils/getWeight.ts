export const getWeight = (weight: number) =>
  `${weight.toFixed(1)}lbs ${(weight * 0.45359237).toFixed(1)}kg`;
