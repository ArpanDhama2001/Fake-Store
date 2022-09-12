import { useState, useEffect } from "react";
import Ratings from "../Ratings";
import { getProduct } from "../../data/api/apiURL";
import { useParams } from "react-router-dom";
import { ItemeState } from "../../features/productsSlice";
import Button from "../Button";
import SkeletonProduct from "./SkeletonProduct";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addToCart, remove, setQty } from "../../features/cartSlice";
import { FiHeart } from "react-icons/fi";
import { addToFav, removeFromFav } from "../../features/favouriteSlice";

function Product({ id }: { id?: string }) {
  const params = useParams();
  const [product, setProduct] = useState<ItemeState>();
  const products = useAppSelector((state) => state.products);
  const cartProducts = useAppSelector((state) => state.cart);
  const favProducts = useAppSelector((state) => state.fav);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>("");

  const dispatch = useAppDispatch();

  const isInCart = (id: number): boolean => {
    let item = cartProducts.value.filter((item) => item.id === id);
    return item.length ? true : false;
  };

  const addToCartClickHandler = (item: ItemeState, id: number): void => {
    if (!isInCart(id)) {
      dispatch(addToCart(item));
      dispatch(setQty(id));
    } else {
      dispatch(remove(id));
    }
  };

  const isFav = (id: number): boolean => {
    let item = favProducts.value.filter((item) => item.id === id);
    return item.length ? true : false;
  };

  const requiredItem = (id: number): ItemeState => {
    let product = products.data.filter((item) => item.id === id)[0];
    return product;
  };

  const addToFavClickHandler = (item: ItemeState, id: number): void => {
    !isFav(id) ? dispatch(addToFav(item)) : dispatch(removeFromFav(id));
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(getProduct(Number(params.productId)));
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
      }
    }
    fetchProduct();
  }, []);

  if (loading) {
    return <SkeletonProduct />;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <main className="font-secondary bg-white flex flex-col gap-8 ">
      <div className="image p-4 relative">
        <img src={product?.image} alt={product?.title} />
        <span
          onClick={() => {
            addToFavClickHandler(requiredItem(product?.id!), product?.id!);
          }}
          className={`absolute top-4 right-6 p-2 rounded-full bg-neutral-100 border border-neutral-300 ${
            isFav(product?.id!) ? "text-red-500" : "text-black"
          }`}
        >
          <FiHeart />
        </span>
      </div>
      <div className="body p-4 flex flex-col gap-8">
        <div className="rating flex flex-col gap-2">
          <button className="px-2 w-fit font-primary text-neutral-500 bg-neutral-200 shadow-lg">
            {product?.category}
          </button>
          <h2 className="text-3xl text-neutral-700 font-primary font-bold leading-10">
            {product?.title}
          </h2>

          <span className="">
            <Ratings rating={product?.rating} />
          </span>
        </div>

        <div className="description text-neutral-500">
          <p className="leading-7">{product?.description}</p>
        </div>

        <div className="price">
          <p className="text-4xl font-bold font-primary">${product?.price}/-</p>
        </div>

        <div className="actions flex flex-col gap-2">
          <Button text="Buy Now" width="full" primary />
          <div onClick={() => addToCartClickHandler(product!, product?.id!)}>
            <Button text="Add to cart" width="full" primary />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
