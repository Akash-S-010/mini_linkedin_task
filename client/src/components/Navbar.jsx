import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore.js";
import { LogOut } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, fetchUser, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold text-blue-600">
        min
      </Link>

      {/* Center Links */}
      <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <Link
          to="/"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          About Us
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link
              to="/create"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
            >
              Create Post
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/profile" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-lg font-semibold text-blue-800">
                  {user.name?.charAt(0).toUpperCase() || "?"}
                </div>
                <span className="hidden md:block text-gray-700 font-medium hover:text-blue-600 transition-colors duration-200">
                  {user.name}
                </span>
              </Link>
              <button
                onClick={async () => {
                  try {
                    await logout();
                    navigate('/login');
                    toast.success('Logged out successfully');
                  } catch (error) {
                    toast.error('Logout failed');
                  }
                }}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;