import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categories: [
    { id: 0, name: "All", isActive: true },
    { id: 1, name: "Electronics", isActive: false },
    { id: 2, name: "Jewelry", isActive: false },
    { id: 3, name: "Men's Clothing", isActive: false },
    { id: 4, name: "Women's Clothing", isActive: false },
  ],
  activeCategory: (categoryId) =>
    set((state) => ({
      categories: state.categories.map((el) =>
        el.id === categoryId
          ? { ...el, isActive: true }
          : { ...el, isActive: false }
      ),
    })),
}));

export default useCategoryStore;
