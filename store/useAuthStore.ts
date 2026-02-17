import { create } from "zustand";
import api from "@/services/api";

type User = {
  _id: string;
  name: string;
  email: string;
};

type AuthStore = {
  user: User | null;
  isCheckingAuth: boolean;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await api.get("/auth/me");
      set({ user: res.data, isCheckingAuth: false });
    } catch {
      set({ user: null, isCheckingAuth: false });
    }
  },

  logout: async () => {
    await api.post("/auth/logout");
    set({ user: null });
  },
}));
