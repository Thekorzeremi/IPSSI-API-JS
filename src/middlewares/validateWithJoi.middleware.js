const validateWithJoi = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      return res.status(400).json({
        error: true,
        message: error.message,
      });
    }
  };
};

module.exports = validateWithJoi;
