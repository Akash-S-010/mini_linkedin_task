import React from 'react';
import { Calendar, User } from 'lucide-react';

const Post = ({ post }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInMinutes < 1) {
      return 'Just now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
              {post.author?.name || post.authorName || (post.author && typeof post.author === 'string' ? 'User' : 'Anonymous')}
            </h3>
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              {formatDate(post.createdAt)}
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="text-gray-800 leading-relaxed flex-grow text-sm sm:text-base">
        {post.content}
      </div>
    </div>
  );
};

export default Post; 