const express = require("express");
const { peopleList } = require("./peopleList");
const PORT = 3000;

const app = express();
const router = express.Router();

app.use("/user", router);

router.get("/", (req, res) => {
  const filters = req.query;

  const request_keys = Object.keys(filters);
  const person_keys = Object.keys(peopleList[0]);
  const keys = request_keys.filter((key) => person_keys.includes(key));

  const result = peopleList.filter((person) => {
    let status = true;
    keys.forEach((key) => {
      if (person[key] !== filters[key]) status = false;
    });
    return status;
  });
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is being listened on port ${PORT}`);
});
