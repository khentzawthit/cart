import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const activeHandler = () => {
    activeCategory(id);
  };
  return (
    <button
      onClick={activeHandler}
      className={`${
        isActive && "bg-black text-white"
      } border text-nowrap border-gray-400 p-2 me-2 active:scale-95 duration-300`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
