export const getDevProducts = async () => {
  try {
    return await fetch("/.netlify/functions/get-dev-products")
      .then((res) => res.json())
      .catch((err) => console.error(err));
  } catch (e) {
    console.log("getBooks Error", e);
  }
};
