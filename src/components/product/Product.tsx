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
import Error from "../Error";

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
        setLoading(false);
      }
    }
    fetchProduct();
  }, [params.productId]);

  if (loading) {
    return <SkeletonProduct />;
  }

  if (error) {
    return <Error />;
    // return <SkeletonProduct />
  }

  return (
    <main className="font-secondary bg-white md:h-[80vh] flex items-center justify-center">
      <div className="flex flex-col md:justify-center gap-8 w-full lg:w-[80%] md:flex-row">
        <div className="image p-4 relative md:w-[300px] lg:w-[400px] rounded-xl flex items-center justify-center ">
          <img src={product?.image} alt={product?.title} />
          <span
            onClick={() => {
              addToFavClickHandler(requiredItem(product?.id!), product?.id!);
            }}
            className={`absolute top-4 right-6 p-2 rounded-full cursor-pointer active:scale-[95%] bg-neutral-100 border border-neutral-300 ${
              isFav(product?.id!) ? "text-red-500" : "text-black"
            }`}
          >
            <FiHeart />
          </span>
        </div>
        <div className="body p-4 flex flex-col gap-8 md:w-[50%]">
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
            <p className="text-4xl font-bold font-primary">
              ${product?.price}/-
            </p>
          </div>

          <div className="actions flex flex-col md:flex-row gap-2">
            <div className="md:w-[50%]">
              <Button text="Buy Now" width="full" primary />
            </div>
            <div
              onClick={() => addToCartClickHandler(product!, product?.id!)}
              className="md:w-[50%]"
            >
              <Button text="Add to cart" width="full" primary />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product;
