export const getProdProducts = async () => {
  try {
    return await fetch("/.netlify/functions/get-prod-products")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (e) {
    console.log("getBooks Error", e);
  }
};
