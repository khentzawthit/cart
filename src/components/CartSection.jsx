import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import carts from "../data/carts";
import Container from "./Container";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;
    return pv + cost;
  }, 0);

  const tax = total * 0.03;

  const netTotal = total + tax;

  return (
    <>
      <Container className="px-3">
        <div className="flex flex-col gap-3  ">
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart} />
          ))}
        </div>
        {carts.length === 0 && (
          <p className="text-center text-3xl  font-bold">No List</p>
        )}
      </Container>
      <Container className="px-3">
        <div className="mt-[100px]">
          <div className="border border-black "></div>
          <div className="flex gap-5 justify-end p-2">
            <div className="">
              <p className="text-gray-500">Total</p>
              <p className=" text-center text-xl font-bold">
                {total.toFixed(2)}
              </p>
            </div>
            <div className="">
              <p className="text-gray-500">Tax</p>
              <p className=" text-center text-xl font-bold">{tax.toFixed(2)}</p>
            </div>
            <div className="">
              <p className="text-gray-500">Net Total</p>
              <p className=" text-center text-xl font-bold">
                {netTotal.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex justify-end p-4">
            <button className="border border-stone-950 px-2 py-0.5 ">
              Order Now
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartSection;
