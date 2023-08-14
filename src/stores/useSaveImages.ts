import { create } from "zustand";
import { ImageCard } from "../types";

interface SaveImages {
  cards: ImageCard[];
  saveCard: (card: ImageCard) => void;
  removeCard: (id: string) => void;
}

export const useSaveImages = create<SaveImages>((set) => ({
  cards: [],
  saveCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
  removeCard: (id: string) =>
    set((state) => ({ cards: [...state.cards.filter((c) => c.id !== id)] })),
}));
