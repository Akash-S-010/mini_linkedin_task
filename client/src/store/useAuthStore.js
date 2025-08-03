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
        set({ loading: true, error: null });
        try {
            const res = await axiosInstance.post("/user/signup", formData);
            // After successful signup, automatically log in the user
            const loginRes = await axiosInstance.post("/user/login", {
                email: formData.email,
                password: formData.password
            });
            set({ user: loginRes.data.userData, loading: false, error: null });
            return loginRes.data.userData;
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Signup failed";
            set({
                user: null,
                error: errorMessage,
                loading: false,
            });
            throw new Error(errorMessage);
        }
    },


    //   user login
    login: async (formData) => {
        set({ loading: true, error: null });
        try {
            const res = await axiosInstance.post("/user/login", formData);
            set({ user: res.data.userData, loading: false, error: null });
            return res.data.userData;
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Login failed";
            set({
                user: null,
                error: errorMessage,
                loading: false,
            });
            throw new Error(errorMessage);
        }
    },

    //   user logout
    logout: async () => {
        set({ loading: true });
        try {
            await axiosInstance.post("/user/logout");
            set({ user: null, loading: false, error: null });
        } catch (err) {
            set({
                error: err.response?.data?.message || "Logout failed",
                loading: false,
            });
        }
    },
}));

export default useAuthStore;