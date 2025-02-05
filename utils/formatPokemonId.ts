export const formatPokemonId = (id: number) => {
  if (id < 10) {
    return '#00' + id.toString();
  }

  if (id < 100) {
    return '#0' + id.toString();
  }

  return '#' + id.toString();
};
