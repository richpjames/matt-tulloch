const prodProducts = require("./data/prod-products.json");

exports.handler = async () => {
  console.log("get prod books");
  return {
    statusCode: 200,
    body: JSON.stringify(prodProducts),
  };
};
