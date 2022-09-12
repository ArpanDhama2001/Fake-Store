import { useParams } from "react-router-dom";
import Product from "../components/product/Product";

const ProductPage = () => {
  const params = useParams();
  return <Product id={params.productId} />;
};

export default ProductPage;
