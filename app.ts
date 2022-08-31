const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;


const funcionario = [
  {
    name: "Cleyton",
    employee: "Programmer",
  },
  {
    name: "Lucas",
    employee: "Programmer",
  },
  {
    name: "Roberto",
    employee: "Customer",
  },
];

app.get("/", cors(), (req, res) => res.send(funcionario));

app.listen(port);
for (let i = 0; i < funcionario.length; i++) {
  console.log(`Object ${funcionario[i].name} - ${funcionario[i].employee}`);
  console.log(`Running on port ${port}`);
}
