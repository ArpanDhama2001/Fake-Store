// import { } from "react";
import { deliveryDate } from "../utilities/deliveryDateCalculator";

const CartSummary = () => {
  return (
    <section className="bg-white p-4 rounded-lg mb-4  font-secondary sm:w-[90%] sm:mx-auto lg:max-w-[30%]">
      <article className="delivery flex flex-col gap-4 border-b border-dashed pb-4 border-neutral-300">
        <h2 className="text-neutral-600 text-lg">Delivery</h2>
        <div className="bg-secondary border border-solid border-neutral-200 text-lg max-w-fit py-1 text-neutral-600 rounded-lg">
          <button
            autoFocus
            onClick={() => {}}
            className="outline-none focus:outline-none focus:text-black focus:shadow-md focus:bg-white py-1 px-4 rounded-lg transition-all duration-[400ms] ease-in-out"
          >
            Free
          </button>
          <button className="outline-none focus:outline-none focus:text-black focus:shadow-md focus:bg-white py-1 px-4 rounded-lg transition-all duration-[400ms] ease-in-out">
            Express: $9.99
          </button>
        </div>
        <h4 className="text-sm text-neutral-400 -mt-3">
          Delivery date: {deliveryDate()}
        </h4>
      </article>

      <article className="promocode flex flex-col gap-4 border-b border-dashed py-4 border-neutral-300">
        <div className="border border-solid border-neutral-200 max-w-fit rounded-lg flex justify-between items-center">
          <input
            type="text"
            name="promocode"
            placeholder="Promocode"
            className="outline-none py-1 px-2 rounded-lg grow max-w-[70%]"
          />
          <button className="px-4 py-[8px] hover:bg-neutral-100 border border-neutral-200 border-r-0 rounded-lg">
            Apply
          </button>
        </div>
        <h2 className="text-neutral-400 text-sm -mt-3">20% off discount</h2>
      </article>

      <article className="subtotal flex flex-col gap-4 border-b border-dashed py-4 border-neutral-300 text-neutral-400">
        <div className="flex justify-between gap-3 text-neutral-600">
          <h2>Subtotal</h2>
          <h2>$80</h2>
        </div>
        <div className="flex justify-between gap-3">
          <h3>Discount</h3>
          <h3>- $16.19</h3>
        </div>
        <div className="flex justify-between gap-3">
          <h3>Delivery</h3>
          <h3>$0.00</h3>
        </div>
      </article>

      <article className="total flex flex-col gap-4 py-4">
        <div className="flex justify-between">
          <h2>Total</h2>
          <h2>$78.76</h2>
        </div>
        <button className="w-full py-[10px] px-4 bg-primary hover:opacity-90 text-white rounded-lg">
          Proceed to checkout
        </button>
        <button className="w-full py-[10px] px-4 border border-neutral-200 hover:bg-neutral-100 shadow-sm rounded-lg -mt-2">
          Continue shopping
        </button>
      </article>
    </section>
  );
};

export default CartSummary;
