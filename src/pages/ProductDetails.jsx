import React from "react";
import { useParams } from "react-router";
// import products from "../data/products";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";

const ProductDetails = () => {
  const { products } = useProductStore();
  const { productId } = useParams();
  // console.log(productId);
  const currentProduct = products.find((product) => product.id == productId);
  // console.log(currentProduct);
  return (
    <Container className="p-4">
      <Breadcrumb currentPageTitle="Product-details" />
      <div className="border border-black p-3 ">
        <div className="block sm:grid md:grid-cols-2">
          <div className=" col-span-1 flex items-center mb-5">
            <img
              src={currentProduct.image}
              alt=""
              className="w-32 md:w-52 block mx-auto"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-5 items-start">
            <h2 className="font-bold text-xl ">{currentProduct.title}</h2>
            <p className="bg-gray-400 px-6 py-0.5 inline-block text-xs">
              {currentProduct.category}
            </p>
            <p className=" text-sm">{currentProduct.description}</p>
            <div className="flex justify-between w-full items-center">
              <p>Price : {currentProduct.price}</p>
              <button className="border border-stone-950  text-sm px-2 py-1 text-nowrap">
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
