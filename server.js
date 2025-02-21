const express = require("express");
const cors = require("cors");
const { findElements } = require("./findElement");

const app = express();
app.use(express.json());
app.use(cors());

// Creamos el endpoint que nos permita acceder al algoritmo
app.post("/findElement", (req, res) => {
  const { minCalories, maxWeight, elements } = req.body;

  //ejecutamos nuestro algotirmo
  const result = findElements(minCalories, maxWeight, elements);
  res.json(result);
});

// iniciamos el servidor el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
