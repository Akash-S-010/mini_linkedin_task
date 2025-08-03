import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, Shield, Zap, Heart, Code } from 'lucide-react';
import useScrollToTop from '../hooks/useScrollToTop';

const About = () => {
  useScrollToTop();
  
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Professional Networking',
      description: 'Connect with professionals and build meaningful relationships in your industry.'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: 'Share Your Thoughts',
      description: 'Create and share posts to engage with your professional network.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: 'Secure & Private',
      description: 'Your data is protected with JWT authentication and secure practices.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Real-time Updates',
      description: 'Stay updated with the latest posts from your network in real-time.'
    }
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'JWT', category: 'Authentication' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mini LinkedIn
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              A professional networking platform built with modern technologies to help you connect, share, and grow your professional network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Feed
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Mini LinkedIn?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built with modern web technologies and best practices to provide a seamless professional networking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-lg text-gray-600">
              Our platform leverages the latest web technologies for optimal performance and user experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg mb-3">
                  <Code className="w-8 h-8 text-blue-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Professional Community?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start connecting with professionals, sharing insights, and growing your network today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-lg font-semibold">Mini LinkedIn</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting professionals, one post at a time.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Mini LinkedIn. Built with ❤️ for the developer community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
