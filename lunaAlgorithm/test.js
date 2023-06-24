const validate = [
  {
    card: "4242 4242 4242 4242",
    sumDigits: 80,
    result: true,
  },
  {
    card: "4918 5813 3014 7738",
    sumDigits: 79,
    result: false,
  },
  {
    card: "4561 2612 1234 5464",
    sumDigits: 57,
    result: false,
  },
  {
    card: "4561 2612 1234 5467",
    sumDigits: 60,
    result: true,
  },
  {
    card: "123asd5asd sadasd4564|=+das!#~",
    sumDigits: null,
    result: false,
  },
  {
    card: "abcdefg aadfbjad afbdlfbkj",
    sumDigits: null,
    result: false,
  },
];

const cardValidator = (cardNumber) => {
  if (/(\d{4}\s?){4}/.test(cardNumber)) {
    let sumDigits = 0;
    const cardWithoutSpace = cardNumber.replaceAll(" ", "");
    cardWithoutSpace.split("").forEach((digit, index) => {
      digit = +digit;
      if (index % 2 === 0) digit *= 2;
      sumDigits += digit > 9 ? digit - 9 : digit;
    });
    return [sumDigits, sumDigits % 10 === 0];
  } else {
    console.log("incorrect input");
    return null;
  }
};

module.exports = { cardValidator, validate };
