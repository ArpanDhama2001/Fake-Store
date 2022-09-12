import { useState, useEffect } from "react";
import Ratings from "../Ratings";
import { getProduct } from "../../data/api/apiURL";
import { useParams } from "react-router-dom";
import { ItemeState } from "../../features/productsSlice";
import Button from "../Button";

function Product({ id }: { id?: string }) {
  const params = useParams();
  const [product, setProduct] = useState<ItemeState>();

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(getProduct(Number(params.productId)));
      const data = await res.json();
      setProduct(data);
    }
    fetchProduct();
  }, []);

  return (
    <main>
      <div className="image">
        <img src={product?.image} alt={product?.title} />
      </div>

      <div className="body">
        <h2>{product?.title}</h2>

        <div className="feats flex">
          <p className="pr-2">${product?.price}</p>
          <span className="px-2 border-x-2 border-stone-100">
            <Ratings rating={product?.rating} />
          </span>
          <button className="ml-2 px-2 font-primary text-neutral-500 bg-neutral-200 ">
            {product?.category}
          </button>
        </div>

        <div className="description">
          <p>{product?.description}</p>
        </div>

        <div className="actions flex gap-4">
          <Button text="Buy Now" width="full" primary />
          <Button text="Add to cart" width="full" primary />
        </div>
      </div>
    </main>
  );
}

export default Product;
