const validate = [
  {
    string: "ajbnadbad",
    find: "a",
    count: 3,
  },
  {
    string: "",
    find: "e",
    count: 0,
  },
  {
    string: "oooOOOooo",
    find: "o",
    count: 6,
  },
  {
    string: "badgl;ajsd",
    find: ";",
    count: 1,
  },
];

const findAndCountSymbols = (string, find) => {
  if (typeof string === "string") {
    const regexp = new RegExp(`${find}`, "g");
    const matches = string.match(regexp);
    const count = matches ? matches.length : 0;
    return { string: string, symbol: find, count: count };
  }
};

module.exports = { findAndCountSymbols, validate };
