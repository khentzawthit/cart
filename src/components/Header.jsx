import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import useCartStore from "../store/useCartStore";

const Header = () => {
  const { carts } = useCartStore();

  return (
    <header className="px-5 py-5">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className=" text-3xl font-bold font-serif">
            Online Shop
          </Link>
          <Link
            to={"/my-cart"}
            className="relative border border-stone-950 px-3 py-2 me-2 hover:bg-stone-800 duration-300 text-nowrap"
          >
            My Cart
            <span className="text-white bg-stone-800 px-2 rounded-full absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
