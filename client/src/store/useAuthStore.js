import { create } from "zustand";
import axiosInstance from "../services/axios";

export const useAuthStore = create((set) => ({
    user: null,
    loading: false,
    error: null,


    //   fetch user or check user
    fetchUser: async () => {
        set({ loading: true });
        try {
            const res = await axiosInstance.get("/user/me");
            if (res.data) {
                set({ user: res.data, loading: false });
            }
        } catch (err) {
            set({
                user: null,
                error: err.response?.data?.message || "Failed",
                loading: false,
            });
        }
    },


    //   user signup
    signup: async (formData) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post("/user/signup", formData);
            set({ user: res.data, loading: false });
        } catch (err) {
            set({
                user: null,
                error: err.response?.data?.message || "Failed",
                loading: false,
            });
        }
    },


    //   user login
    login: async (formData) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post("/user/login", formData);
            set({ user: res.data.userData, loading: false });
        } catch (err) {
            set({
                user: null,
                error: err.response?.data?.message || "Failed",
                loading: false,
            });
        }
    },
}));

export default useAuthStore;