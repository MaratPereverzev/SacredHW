const { ceil } = require("math");
const validate = [
  {
    string: "abba",
    isPolindrom: true,
  },
  {
    string: "123322",
    isPolindrom: false,
  },
  {
    string: "abcba",
    isPolindrom: true,
  },
  {
    string: "ab",
    isPolindrom: false,
  },
];

const isPolindrom = (str) => {
  for (let i = 0; i < ceil(str.length) / 2; i++)
    if (str[i] != str[str.length - i - 1]) return false;
  return true;
};

module.exports = { isPolindrom, validate };
