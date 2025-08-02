import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore.js";
import { useEffect } from "react";

const Navbar = () => {
  const { user, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-blue-600">
        min
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link
              to="/create"
              className="bg-blue-600 text-white px-4 py-1 rounded-md"
            >
              Create Post
            </Link>
            <Link to="/profile" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-sm font-semibold">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <span>{user.name}</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue-600 font-medium">
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
