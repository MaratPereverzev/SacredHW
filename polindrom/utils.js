const checkVal = (fn, validate) => {
  if (
    typeof fn === "function" &&
    typeof validate === "object" &&
    Array.isArray(validate)
  ) {
    validate.forEach((data) => {
      if (typeof data === "object" && !Array.isArray(data)) {
        const result = fn(data.string);
        console.log("Результат теста");
        console.log(
          ` - Строка ${data.string} является полиндром: ${result} (ожидалось ${data.isPolindrom})`
        );
        console.log("-----------------------------------");
      }
    });
  }
};

module.exports = { checkVal };
