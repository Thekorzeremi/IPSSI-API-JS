const express = require("express");
const cors = require("cors");

const productsRoutes = require("./src/routes/products.routes");
const logger = require("./src/middlewares/logger.middleware");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger);

app.get("/", (_req, res) => {
  return res.send("<pre>API TP CRUD Products</pre>");
});

app.use("/products", productsRoutes);

app.use((req, res) => {
  return res.status(404).json({
    error: true,
    message: `Route introuvable: ${req.method} ${req.originalUrl}`,
  });
});

app.listen(PORT, () => {
  console.log(`Serveur demarre sur : http://localhost:${PORT}`);
});
