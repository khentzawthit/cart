import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const title = "Product Categories";
  const { categories } = useCategoryStore();

  return (
    <section id="productCategories" className="p-5">
      <Container>
        <h1 className="mb-5 text-xs text-gray-600 ">{title}</h1>
        <div className="flex overflow-scroll category-button-group">
          {/* <CategoryButton categoryName={"All"} current={true} /> */}

          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
