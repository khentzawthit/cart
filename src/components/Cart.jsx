import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQty, decreaseQty, delCart } = useCartStore();

  const increaseBtn = () => {
    increaseQty(id);
  };

  const decreaseBtn = () => {
    if (quantity > 1) {
      decreaseQty(id);
    } else {
      delCart(id);
    }
  };

  const product = products.find((el) => el.id === productId);

  const cost = product.price * quantity;

  return (
    <div className="border border-black px-2 py-0.5 grid grid-cols-6">
      <div className="col-span-1 flex relative">
        <img
          src={product.image}
          className="absolute top-3 h-11   items-center justify-center "
          alt=""
        />
      </div>
      <div className="col-span-3 flex flex-col gap-2 p-1 md-p-0">
        <p className="text-xs font-bold md:text-sm">{product.title}</p>
        <p className="text-gray-500 text-sm">Price ({product.price})</p>
      </div>
      <div className="col-span-1 p-2 flex flex-col items-center justify-center gap-1">
        <p className="text-sm font-bold">Quantity</p>
        <div className="flex gap-2">
          <button
            className="bg-stone-900 text-white rounded-full px-1 py-0.5 active:scale-95  "
            onClick={decreaseBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span>{quantity}</span>
          <button
            className="bg-stone-900 text-white rounded-full px-1 py-0.5 active:scale-95  "
            onClick={increaseBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <p className="text-end font-bold  md:text-xl">{cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
