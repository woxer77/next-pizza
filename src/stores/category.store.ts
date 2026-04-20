import { create } from 'zustand';

interface categoryStore {
  id: number;
  setCategory: (newValue: number) => void;
  intersectionIgnore: boolean;
  setIntersectionIgnore: (newValue: boolean) => void;
}

export const categoryStore = create<categoryStore>((set) => ({
  id: 0,
  setCategory: (newValue) => set(() => ({ id: newValue })),
  intersectionIgnore: false,
  setIntersectionIgnore: (newValue) => set(() => ({ intersectionIgnore: newValue }))
}));
