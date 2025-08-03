import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Loader2 } from 'lucide-react';
import usePostStore from '../store/usePostStore';
import toast from 'react-hot-toast';

const CreatePost = ({ onPostCreated }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { createPost, loading } = usePostStore();
  
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
      if (onPostCreated) {
        onPostCreated();
      }
    } catch (error) {
      toast.error('Failed to create post');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {/* Post Input */}
          <div>
            <textarea
              {...register('content', {
                required: 'Post content is required',
                maxLength: {
                  value: maxCharacters,
                  message: `Post cannot exceed ${maxCharacters} characters`
                }
              })}
              placeholder="What's on your mind?"
              className={`w-full p-4 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                errors.content ? 'border-red-500' : 'border-gray-300'
              } ${isExpanded ? 'min-h-[120px]' : 'min-h-[80px]'}`}
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
  );
};

export default CreatePost; 