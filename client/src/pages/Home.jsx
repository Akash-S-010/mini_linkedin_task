import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import usePostStore from '../store/usePostStore';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { RefreshCw, AlertCircle } from 'lucide-react';
import useScrollToTop from '../hooks/useScrollToTop';

const Home = () => {
  const { user } = useAuthStore();
  const { posts, loading, error, fetchPosts } = usePostStore();
  const navigate = useNavigate();
  
  useScrollToTop();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleRefresh = () => {
    fetchPosts();
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="mb-8">
              <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mini LinkedIn</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Connect with developers, share your thoughts, and explore the latest insights from the tech community
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 lg:mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Connect</h3>
              <p className="text-gray-600 text-center text-sm">Build your professional network with developers worldwide</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Share</h3>
              <p className="text-gray-600 text-center text-sm">Share your thoughts, projects, and insights with the community</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">Discover</h3>
              <p className="text-gray-600 text-center text-sm">Explore the latest trends and insights from the developer world</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Join thousands of developers sharing their thoughts and building connections
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/login')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Create Account
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                Join the developer community today and start sharing your thoughts! 🚀
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-blue-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Active Developers</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-green-600 mb-1">5000+</div>
              <div className="text-sm text-gray-600">Posts Shared</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md">
              <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Community Active</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Explore Developer Thoughts
          </h1>
          <p className="text-gray-600">
            Stay connected with your professional network
          </p>
        </div>

        {/* Posts Section */}
        <div className="space-y-6">
          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          {/* Loading State */}
          {loading && posts.length === 0 && (
            <Loading message="Loading posts..." />
          )}

          {/* Posts List */}
          {!loading && posts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <RefreshCw className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No posts yet
              </h3>
              <p className="text-gray-600">
                Be the first to share something with your network!
              </p>
            </div>
          )}

          {/* Posts Grid - Horizontal Layout */}
          {posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {posts.length > 0 && (
            <div className="text-center pt-4">
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh Feed
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
