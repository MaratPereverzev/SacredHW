const checkVal = (fn, validate) => {
  if (
    typeof fn === "function" &&
    typeof validate === "object" &&
    Array.isArray(validate)
  ) {
    validate.forEach((data) => {
      if (typeof data === "object" && !Array.isArray(data)) {
        const result = fn(data.string, data.find);
        console.log("Результат теста");
        console.log(
          `В строке ${result.string} искался символ ${result.symbol}. Количество найденных символов: ${result.count} (ожидалось ${data.count})`
        );
        console.log("-----------------------------------------");
      }
    });
  }
};

module.exports = { checkVal };
