import { create } from "zustand";

interface CartItem {
  cartItemKey: string;
  selectedVariantId: string;
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
  updateItemVariant: (itemKey: string, updates: Partial<CartItem>) => void;
  updateItemQuantity: (itemKey: string, quantity: number) => void;
  removeItem: (itemKey: string) => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  updateItemVariant: (itemKey, updates) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.cartItemKey === itemKey
          ? { ...item, ...updates }
          : item,
      ),
    })),

  updateItemQuantity: (itemKey, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.cartItemKey === itemKey
          ? { ...item, quantity }
          : item,
      ),
    })),

  removeItem: (itemKey) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.cartItemKey !== itemKey,
      ),
    })),
}));
