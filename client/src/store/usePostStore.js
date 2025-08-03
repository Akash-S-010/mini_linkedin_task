import { create } from "zustand";
import axiosInstance from "../services/axios";

export const usePostStore = create((set, get) => ({
    posts: [],
    userPosts: [],
    loading: false,
    error: null,

    // Fetch all posts for home feed
    fetchPosts: async () => {
        set({ loading: true });
        try {
            const res = await axiosInstance.get("/posts");
            set({ posts: res.data, loading: false, error: null });
        } catch (err) {
            set({
                error: err.response?.data?.message || "Failed to fetch posts",
                loading: false,
            });
        }
    },

    // Create a new post
    createPost: async (content) => {
        set({ loading: true });
        try {
            const res = await axiosInstance.post("/posts", { content });
            const newPost = res.data.post;
            
            // Add the new post to the beginning of the posts array
            set(state => ({
                posts: [newPost, ...state.posts],
                loading: false,
                error: null
            }));
            
            return newPost;
        } catch (err) {
            set({
                error: err.response?.data?.message || "Failed to create post",
                loading: false,
            });
            throw err;
        }
    },

    // Fetch user's own posts for profile
    fetchUserPosts: async () => {
        set({ loading: true });
        try {
            const res = await axiosInstance.get("/user/profile");
            set({ 
                userPosts: res.data.posts, 
                loading: false, 
                error: null 
            });
        } catch (err) {
            set({
                error: err.response?.data?.message || "Failed to fetch user posts",
                loading: false,
            });
        }
    },

    // Clear error
    clearError: () => set({ error: null }),
}));

export default usePostStore; 