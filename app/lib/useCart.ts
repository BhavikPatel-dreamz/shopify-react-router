import { create } from "zustand";

interface CartItem {
  id: string;
  title: string;
  image: string;
  price: number;
  size: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
}));