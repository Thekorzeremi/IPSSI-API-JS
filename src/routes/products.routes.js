const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");
const validateWithJoi = require("../middlewares/validateWithJoi.middleware");
const { createProductSchema, updateProductSchema } = require("../dtos/products.dtos");

router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);
router.post("/", validateWithJoi(createProductSchema), productsController.createProduct);
router.put(
  "/:id",
  validateWithJoi(updateProductSchema),
  productsController.updateProduct,
);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
