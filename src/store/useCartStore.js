import { create } from "zustand";
import carts from "../data/carts";

const useCartStore = create((set) => ({
  carts: [
    {
      id: 1,
      productId: 2,
      quantity: 3,
    },
    {
      id: 2,
      productId: 4,
      quantity: 1,
    },
  ],

  addCart: (newCart) => set((state) => ({ carts: [...state.carts, newCart] })),

  increaseQty: (productId) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === productId ? { ...el, quantity: el.quantity + 1 } : el
      ),
    })),

  decreaseQty: (productId) =>
    set((state) => ({
      carts: state.carts.map((el) =>
        el.id === productId ? { ...el, quantity: el.quantity - 1 } : el
      ),
    })),

  delCart: (productId) =>
    set((state) => ({
      carts: state.carts.filter((el) => el.id !== productId),
    })),
}));

export default useCartStore;
