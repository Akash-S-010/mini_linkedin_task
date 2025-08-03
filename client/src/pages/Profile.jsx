import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuthStore from '../store/useAuthStore';
import usePostStore from '../store/usePostStore';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { User, Mail, Edit3, Save, X, LogOut, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import axiosInstance from '../services/axios';
import useScrollToTop from '../hooks/useScrollToTop';

const Profile = () => {
  const { user, fetchUser } = useAuthStore();
  const { userPosts, loading, error, fetchUserPosts } = usePostStore();
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const navigate = useNavigate();
  
  useScrollToTop();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: user?.name || '',
      bio: user?.bio || ''
    }
  });

  useEffect(() => {
    if (user) {
      fetchUserPosts();
    }
  }, [user, fetchUserPosts]);

  const handleLogout = async () => {
    try {
      await axiosInstance.post('/user/logout');
      navigate('/login');
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  const onSubmit = async (data) => {
    setIsUpdating(true);
    try {
      await axiosInstance.put('/user/profile', data);
      await fetchUser(); // Refresh user data
      setIsEditing(false);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setIsUpdating(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Please log in to view your profile
          </h2>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-4 sm:py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {user.name}
                </h1>
                <div className="flex items-center justify-center sm:justify-start text-gray-600 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm sm:text-base break-all">{user.email}</span>
                </div>
                {user.bio && (
                  <p className="text-gray-700 max-w-md text-sm sm:text-base">{user.bio}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </button>
                </>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>

          {/* Edit Profile Form */}
          {isEditing && (
            <form onSubmit={handleSubmit(onSubmit)} className="border-t pt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    defaultValue={user.name}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    {...register('bio')}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base resize-none"
                    defaultValue={user.bio}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="w-full sm:w-auto flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm sm:text-base"
                >
                  {isUpdating ? (
                    <>
                      <Loading size="small" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* User's Posts Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            My Posts ({userPosts.length})
          </h2>

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 flex items-center mb-4 sm:mb-6">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" />
              <span className="text-red-700 text-sm sm:text-base">{error}</span>
            </div>
          )}

          {/* Loading State */}
          {loading && userPosts.length === 0 && (
            <Loading message="Loading your posts..." />
          )}

          {/* Posts List */}
          {!loading && userPosts.length === 0 && (
            <div className="text-center py-8 sm:py-12 bg-white rounded-lg border border-gray-200">
              <div className="text-gray-400 mb-4">
                <User className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
                No posts yet
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Start sharing your thoughts with your network!
              </p>
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                Create Your First Post
              </button>
            </div>
          )}

          {/* Posts - Vertical Layout for Profile */}
          <div className="space-y-3 sm:space-y-4">
            {userPosts.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
