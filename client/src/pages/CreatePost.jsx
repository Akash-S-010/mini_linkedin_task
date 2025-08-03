import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2, ArrowLeft } from 'lucide-react';
import usePostStore from '../store/usePostStore';
import useAuthStore from '../store/useAuthStore';
import toast from 'react-hot-toast';
import useScrollToTop from '../hooks/useScrollToTop';

const CreatePost = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { createPost, loading } = usePostStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  
  useScrollToTop();
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      content: ''
    }
  });

  const content = watch('content');
  const characterCount = content?.length || 0;
  const maxCharacters = 1000;

  const onSubmit = async (data) => {
    try {
      await createPost(data.content);
      toast.success('Post created successfully!');
      reset();
      setIsExpanded(false);
      navigate('/');
    } catch (error) {
      toast.error('Failed to create post');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Please log in to create posts
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
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <button
              onClick={() => navigate('/')}
              className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Create Post</h1>
          </div>
          <p className="text-gray-600">
            Share your thoughts with your professional network
          </p>
        </div>

        {/* Create Post Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Post Input */}
              <div>
                <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                  What's on your mind?
                </label>
                <textarea
                  {...register('content', {
                    required: 'Post content is required',
                    maxLength: {
                      value: maxCharacters,
                      message: `Post cannot exceed ${maxCharacters} characters`
                    }
                  })}
                  placeholder="Share your professional insights, achievements, or thoughts..."
                  className={`w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    errors.content ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  } ${isExpanded ? 'min-h-[200px]' : 'min-h-[120px]'}`}
                  onFocus={() => setIsExpanded(true)}
                  disabled={loading}
                />
                {errors.content && (
                  <p className="text-sm text-red-600 mt-1">{errors.content.message}</p>
                )}
              </div>

              {/* Character Count and Submit */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {characterCount}/{maxCharacters} characters
                </div>
                <button
                  type="submit"
                  disabled={loading || !content?.trim() || characterCount > maxCharacters}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Posting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Post
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Tips */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Tips for great posts:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Share your professional achievements and milestones</li>
            <li>• Discuss industry trends and insights</li>
            <li>• Ask questions to engage your network</li>
            <li>• Keep it professional and respectful</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreatePost; 