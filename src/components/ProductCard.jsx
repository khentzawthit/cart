import React from "react";
import Rate from "./Rate";
import { Link, useNavigate } from "react-router";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
// import carts from "../data/carts";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  const { carts, addCart } = useCartStore();
  const navigate = useNavigate();

  // probagation အတွက်
  const addedHandler = (event) => {
    event.stopPropagation();
    toast.error("Already added");
  };

  const addCartHandler = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
    toast.success("Add successfully");
  };

  const productDetails = () => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div
      onClick={productDetails}
      // to={}
      className="border border-black p-3 flex flex-col items-start gap-5"
    >
      <img src={image} className="h-40 p-2 mx-auto" alt="" />
      <p className="line-clamp-2 text-sm">{title}</p>

      <Rate rate={rate} />

      <div className="flex justify-between items-end w-full ">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button
            onClick={addedHandler}
            className="border border-stone-950  text-sm px-2 py-1 bg-black text-white"
          >
            Added
          </button>
        ) : (
          <button
            onClick={addCartHandler}
            className="border border-stone-950  text-sm px-2 py-1"
          >
            Add Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
