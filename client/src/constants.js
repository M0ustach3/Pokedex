const HOST = "192.168.1.69";
const PROTOCOL = "http";
const PORT = 8080;
export const Constants = {
  "API_URL": `${PROTOCOL}://${HOST}:${PORT}/api`,
  "POKEMON_SPRITES_URL":  `${PROTOCOL}://${HOST}:${PORT}/pokemons`,
  "ITEMS_SPRITES_URL":  `${PROTOCOL}://${HOST}:${PORT}/items`,
  "TYPES_COLORS": {
    "Normal": "#A8A878",
    "Fighting": "#C03028",
    "Flying": "#A890F0",
    "Poison": "#A040A0",
    "Ground": "#E0C068",
    "Rock": "#B8A038",
    "Bug": "#A8B820",
    "Ghost": "#705898",
    "Steel": "#B8B8D0",
    "Fire": "#F08030",
    "Water": "#6890F0",
    "Grass": "#78C850",
    "Electric": "#F8D030",
    "Psychic": "#F85888",
    "Ice": "#98D8D8",
    "Dragon": "#7038F8",
    "Dark": "#705848",
    "Fairy": "#EE99AC"
  }
}
