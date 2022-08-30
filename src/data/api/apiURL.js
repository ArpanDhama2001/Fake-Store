export const getProduct = {
  method: "GET",
  url: "https://my-store2.p.rapidapi.com/catalog/products",
  params: { limit: "1000" },
  headers: {
    "X-RapidAPI-Key": "bbedd09bb2mshe86e77d95268f4ap1402a6jsnff42fc14bb14",
    "X-RapidAPI-Host": "my-store2.p.rapidapi.com",
  },
};

export const deleteProduct = (id) => {
  return {
    method: "DELETE",
    url: `https://my-store2.p.rapidapi.com/catalog/product/${id}`,
    headers: {
      "X-RapidAPI-Key": "bbedd09bb2mshe86e77d95268f4ap1402a6jsnff42fc14bb14",
      "X-RapidAPI-Host": "my-store2.p.rapidapi.com",
    },
  };
};
