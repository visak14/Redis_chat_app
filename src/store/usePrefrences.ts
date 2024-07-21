
import { create } from "zustand";


type Prefrences = {
    soundEnabled: boolean;
    setSoundEnabled: (soundEnabled: boolean) => void;
};

export const usePreferences = create<Prefrences>((set) => ({
    soundEnabled: true,
    setSoundEnabled: (soundEnabled : boolean) => set({ soundEnabled})
}))