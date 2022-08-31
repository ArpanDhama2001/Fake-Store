export const getAllProductURL = () => {
  return "https://fakestoreapi.com/products";
};
export const getProductURL = (id) => {
  return `https://fakestoreapi.com/products/${id}`;
};

export const getLimitedProducts = () => {
  return "https://fakestoreapi.com/products/1";
};

export const getAllCategories = () => {
  return "https://fakestoreapi.com/products/categories";
};

export const getInCategory = (category) => {
  return `https://fakestoreapi.com/products/category/${category}`;
};
