const validate = [
  {
    string: "ajbnadbad",
    find: "a",
    count: 3,
    index: [0, 4, 7],
  },
  {
    string: "",
    find: "e",
    count: 0,
    index: ["совпадений не найдено"],
  },
  {
    string: "oooOOOooo",
    find: "o",
    count: 6,
    index: [0, 1, 2, 6, 7, 8],
  },
  {
    string: "badgl;ajsd",
    find: ";",
    count: 1,
    index: [5],
  },
];

const findAndCountSymbols = (string, find) => {
  if (typeof string === "string") {
    const regexp = new RegExp(`${find}`, "g");
    const matches = [...string.matchAll(regexp)];
    const count = matches ? matches.length : 0;
    const index = matches.map((foundSymbol) => foundSymbol.index);
    return {
      string: string,
      symbol: find,
      count: count,
      index: index.length > 0 ? index : "совпадений не найдено",
    };
  }
};

module.exports = { findAndCountSymbols, validate };
