const devProducts = require("./data/dev-products.json");

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(devProducts),
  };
};
