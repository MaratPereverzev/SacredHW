const checkVal = (fn, validate) => {
  if (
    typeof fn === "function" &&
    typeof validate === "object" &&
    Array.isArray(validate)
  ) {
    validate.forEach((data) => {
      if (typeof validate === "object" && !Array.isArray(data)) {
        const result = fn(data.card);
        if (result) {
          const [sumDigits, isCorrect] = result;
          console.log("Результат теста:");
          console.log(
            ` - Сумма цифр карты ${data.card} по алгоритму Луны = ${sumDigits} (ожидалось ${data.sumDigits})`
          );
          console.log(
            ` - Коррестность номера карты ${isCorrect} (ожидалось ${data.result})`
          );
        }
        console.log("-------------------------------");
      }
    });
  }
};

module.exports = { checkVal };
