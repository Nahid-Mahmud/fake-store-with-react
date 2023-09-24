//

const getStoredProducts = () => {
  // get existing item
  const storedProducts = localStorage.getItem("favourites");

  if (storedProducts) {
    return JSON.parse(storedProducts);
  } else return [];
};

const saveProducts = (id) => {
  const existingStoredProducts = getStoredProducts();
  const isExist = existingStoredProducts.find((productId) => productId === id);

  if (!isExist) {
    existingStoredProducts.push(id);
    localStorage.setItem("favourites", JSON.stringify(existingStoredProducts));
  }
};

export { saveProducts, getStoredProducts };
