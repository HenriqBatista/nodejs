const express = require("express");

const app = express();
const port = 5000;
const path = require("path");
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const products = require("./products");
const basePath = path.join(__dirname, "templates");

//arquivos staticos
app.use(express.static('public'))

app.use("/products", products);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`);
});
