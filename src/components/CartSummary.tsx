import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../features/cartSlice";
import { useAppDispatch } from "../hooks";
import { RootState } from "../store";
import { totalPrice, deliveryDate, checkPromoCode } from "../utilities";
import Button from "./Button";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartSummary = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  const [focus, setFocus] = useState<number>(0);
  const [deliveryCharge, setDeliveryCharge] = useState<number>(0);
  const [code, setCode] = useState<string>("");
  const [codeStatus, setCodeStatus] = useState<
    "pending" | "correct" | "invalid"
  >("pending");
  let [dis, setDis] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(totalPrice());

  useEffect(() => {
    setSubTotal(totalPrice());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const handleClick = () => {
    var discount: "pending" | "correct" | "invalid" = checkPromoCode(code);
    setCodeStatus(discount);
    discount === "correct"
      ? setDis(Math.round(subTotal * 0.2 * 100) / 100)
      : setDis(0);
  };

  const notify = () => {
    toast.success("Purchase Successfull", {
      toastId: "1",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(clearCart());
  };

  return (
    <section className="bg-white p-4 rounded-lg mb-4  font-secondary lg:max-w-[30%]">
      <article className="delivery flex flex-col gap-4 border-b border-dashed pb-4 border-neutral-300">
        <h2 className="text-neutral-600 text-lg">Delivery</h2>
        <div className="bg-secondary border border-solid border-neutral-200 text-lg max-w-fit py-1 text-neutral-600 rounded-lg">
          <button
            onClick={() => {
              setFocus(0);
              setDeliveryCharge(0);
            }}
            className={`outline-none ${
              !focus ? "text-black shadow-md bg-white" : ""
            } py-1 px-4 rounded-lg transition-all duration-[400ms] ease-in-out`}
          >
            Free
          </button>
          <button
            onClick={() => {
              setFocus(1);
              setDeliveryCharge(9.99);
            }}
            className={`outline-none ${
              focus ? "text-black shadow-md bg-white" : ""
            } py-1 px-4 rounded-lg transition-all duration-[400ms] ease-in-out`}
          >
            Express: $9.99
          </button>
        </div>
        <h4 className="text-sm text-neutral-400 -mt-3">
          Delivery date: {deliveryDate(focus)}
        </h4>
      </article>

      <article className="promocode flex flex-col gap-4 border-b border-dashed py-4 border-neutral-300">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={`border-solid border-2 ${
            codeStatus !== "pending"
              ? codeStatus === "correct"
                ? " border-green-300"
                : " border-rose-400"
              : "border-neutral-200"
          } max-w-fit rounded-lg flex justify-between items-center transition- duration-200 ease-in`}
        >
          <input
            type="text"
            name="promocode"
            value={code}
            placeholder="Promocode"
            onChange={(e) => {
              setCode(e.target.value);
            }}
            className={`outline-none py-1 px-2 rounded-lg grow max-w-[70%] `}
          />
          <button
            onClick={() => {
              handleClick();
            }}
            className="px-4 py-[8px] hover:bg-neutral-100 border border-neutral-200 border-r-0 rounded-lg active:scale-[98%]"
          >
            Apply
          </button>
        </form>
        <h2
          className={`${
            codeStatus === "correct" ? "text-green-400" : "text-red-400"
          } text-sm -mt-3 ${
            codeStatus !== "pending" ? "" : "hidden"
          } transition- duration-200 ease-in `}
        >
          {dis ? "20% off discount" : "Invalid promocode"}
        </h2>
      </article>

      <article className="subtotal flex flex-col gap-4 border-b border-dashed py-4 border-neutral-300 text-neutral-400">
        <div className="flex justify-between gap-3 text-neutral-600">
          <h2>Subtotal</h2>
          <h2>${subTotal}</h2>
        </div>
        <div className="flex justify-between gap-3">
          <h3>Discount</h3>
          <h3>- ${dis}</h3>
        </div>
        <div className="flex justify-between gap-3">
          <h3>Delivery</h3>
          <h3>+ ${`${focus ? "9.99" : "0.00"}`}</h3>
        </div>
      </article>

      <article className="total flex flex-col gap-4 py-4">
        <div className="flex justify-between">
          <h2>Total</h2>
          <h2>
            $
            {subTotal -
              Math.round(dis * 100) / 100 +
              Math.round(deliveryCharge * 100) / 100}
          </h2>
        </div>
        <div onClick={() => notify()}>
          <Button primary width="full" text="Proceed to checkout" />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide}
          />
        </div>
        <Link to="/">
          <Button primary={false} text="Continue shopping" width="full" />
        </Link>
      </article>
    </section>
  );
};

export default CartSummary;
