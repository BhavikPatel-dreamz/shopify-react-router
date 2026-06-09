import { create } from "zustand";

interface CartItem {
  product: any;
  id: string;
  title: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
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