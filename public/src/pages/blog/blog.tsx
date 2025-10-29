// BlogPost.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you'd fetch the post by ID from an API or database
  const post: BlogPost = {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a React project with TypeScript and explore the benefits of type safety in your web applications.",
    content: `
      <p>TypeScript has revolutionized the way we build React applications by bringing static typing to the JavaScript ecosystem. In this comprehensive guide, we'll explore how to set up a React project with TypeScript and leverage its powerful features.</p>
      
      <h2>Why TypeScript with React?</h2>
      <p>TypeScript provides several benefits for React development:</p>
      <ul>
        <li>Better code completion and IntelliSense</li>
        <li>Early error detection</li>
        <li>Improved code maintainability</li>
        <li>Enhanced team collaboration</li>
      </ul>
      
      <h2>Setting Up Your Project</h2>
      <p>To create a new React project with TypeScript, you can use Create React App:</p>
      <pre><code>npx create-react-app my-app --template typescript</code></pre>
      
      <p>This sets up everything you need to start building type-safe React applications.</p>
    `,
    author: "Ritik Raj",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React",
    tags: ["React", "TypeScript", "Web Development"],
    imageUrl: "/api/placeholder/800/400"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {post.imageUrl && (
            <div className="h-64 bg-gray-200">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500">{post.readTime}</span>
              </div>
              <span className="text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-semibold text-gray-600">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  Twitter
                </button>
                <button className="text-gray-600 hover:text-blue-800 transition-colors">
                  LinkedIn
                </button>
                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* You can map through related posts here */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Advanced React Patterns with TypeScript
              </h3>
              <p className="text-gray-600 mb-4">
                Explore advanced React patterns and how to implement them with TypeScript...
              </p>
              <Link to="/blog/2" className="text-blue-600 hover:text-blue-800 font-medium">
                Read more →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                State Management in React Applications
              </h3>
              <p className="text-gray-600 mb-4">
                Comparing different state management solutions for React apps...
              </p>
              <Link to="/blog/3" className="text-blue-600 hover:text-blue-800 font-medium">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;