const isValidId = (id) => Number.isInteger(Number(id)) && Number(id) > 0;

module.exports = {
  isValidId,
};
