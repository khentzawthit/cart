import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" mt-auto">
      <Container>
      <div className="  bg-black text-white text-center">
        {date.getFullYear()} Online Shop
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
