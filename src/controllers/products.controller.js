const { Product } = require("../../products.orm");
const { isValidId } = require("../middlewares/validateProduct.middleware");

exports.getAllProducts = async (_req, res) => {
  try {
    const products = await Product.getAll();
    return res.status(200).json({
      error: false,
      message: "Produits recuperes avec succes.",
      data: products,
    });
  } catch (error) {
    console.error("[PRODUCTS::GET_ALL]", error);
    return res.status(500).json({
      error: true,
      message: "Une erreur interne est survenue, veuillez reessayer plus tard.",
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({
        error: true,
        message: "Requete invalide. L'id doit etre un entier positif.",
      });
    }

    const product = await Product.getById(id);

    if (!product) {
      return res.status(404).json({
        error: true,
        message: "Produit introuvable.",
      });
    }

    return res.status(200).json({
      error: false,
      message: "Produit recupere avec succes.",
      data: product,
    });
  } catch (error) {
    console.error("[PRODUCTS::GET_BY_ID]", error);
    return res.status(500).json({
      error: true,
      message: "Une erreur interne est survenue, veuillez reessayer plus tard.",
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const created = await Product.create(req.body);

    return res.status(201).json({
      error: false,
      message: "Produit cree avec succes.",
      data: created,
    });
  } catch (error) {
    console.error("[PRODUCTS::CREATE]", error);
    return res.status(500).json({
      error: true,
      message: "Une erreur interne est survenue, veuillez reessayer plus tard.",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({
        error: true,
        message: "Requete invalide. L'id doit etre un entier positif.",
      });
    }

    const updated = await Product.update(id, req.body);

    if (!updated) {
      return res.status(404).json({
        error: true,
        message: "Produit introuvable.",
      });
    }

    return res.status(200).json({
      error: false,
      message: "Produit mis a jour avec succes.",
      data: updated,
    });
  } catch (error) {
    console.error("[PRODUCTS::UPDATE]", error);
    return res.status(500).json({
      error: true,
      message: "Une erreur interne est survenue, veuillez reessayer plus tard.",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({
        error: true,
        message: "Requete invalide. L'id doit etre un entier positif.",
      });
    }

    const deleted = await Product.delete(id);

    if (!deleted) {
      return res.status(404).json({
        error: true,
        message: "Produit introuvable.",
      });
    }

    return res.status(204).send();
  } catch (error) {
    console.error("[PRODUCTS::DELETE]", error);
    return res.status(500).json({
      error: true,
      message: "Une erreur interne est survenue, veuillez reessayer plus tard.",
    });
  }
};
