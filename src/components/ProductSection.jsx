import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";
// import products from "../data/products";

const ProductSection = () => {
  const { products } = useProductStore();
  const { categories } = useCategoryStore();

  const currentCategory = categories.find((el) => el.isActive === true);
  // console.log(currentCategory);
  return (
    <section className="px-5 mb-3">
      <Container>
        <h3 className="mb-5 text-xs text-gray-600 italic">
          Available Products List
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {products
            .filter(
              (el) =>
                currentCategory.name === "All" ||
                el.category === currentCategory.name
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
