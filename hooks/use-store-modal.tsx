import { create } from "zustand";

interface useStoreModalInterface{
    isopen: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export const useStoreModal = create<useStoreModalInterface>((set) => ({
    isopen: false,
    onOpen: () => set({isopen:true}),
    onClose: () => set({isopen: false}),
}));