// components/BlogWriter.tsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  lastEdited: string;
  tags: string[];
  category: string;
  status: 'draft' | 'published';
  readTime: string;
}

const BlogWriter: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPost, setCurrentPost] = useState<BlogPost>({
    id: '',
    title: '',
    content: '',
    excerpt: '',
    date: new Date().toISOString().split('T')[0],
    lastEdited: new Date().toISOString(),
    tags: [],
    category: 'Programming',
    status: 'draft',
    readTime: '0 min read'
  });
  const [newTag, setNewTag] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  // Calculate read time
  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Auto-save functionality
  useEffect(() => {
    if (autoSave && currentPost.content) {
      const timer = setTimeout(() => {
        handleSaveDraft();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentPost.content, autoSave]);

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleInputChange = (field: keyof BlogPost, value: string) => {
    setCurrentPost(prev => {
      const updated = { ...prev, [field]: value, lastEdited: new Date().toISOString() };
      
      if (field === 'content') {
        updated.readTime = calculateReadTime(value);
        // Auto-generate excerpt from first 150 characters
        if (!updated.excerpt && value.length > 0) {
          updated.excerpt = value.substring(0, 150) + (value.length > 150 ? '...' : '');
        }
      }
      
      return updated;
    });
  };

  const handleAddTag = () => {
    if (newTag.trim() && !currentPost.tags.includes(newTag.trim())) {
      setCurrentPost(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
        lastEdited: new Date().toISOString()
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setCurrentPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove),
      lastEdited: new Date().toISOString()
    }));
  };

  const handleSaveDraft = () => {
    if (!currentPost.title && !currentPost.content) return;

    const postToSave: BlogPost = {
      ...currentPost,
      id: currentPost.id || `post-${Date.now()}`,
      status: 'draft' as const
    };

    const updatedPosts = posts.filter(post => post.id !== postToSave.id);
    const newPosts = [postToSave, ...updatedPosts];
    
    setPosts(newPosts);
    localStorage.setItem('blogPosts', JSON.stringify(newPosts));
    
    // Show save notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg';
    notification.textContent = 'Draft saved!';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  const handlePublish = () => {
    if (!currentPost.title.trim()) {
      alert('Please add a title before publishing');
      return;
    }
    if (!currentPost.content.trim()) {
      alert('Please add content before publishing');
      return;
    }

    const postToPublish: BlogPost = {
      ...currentPost,
      id: currentPost.id || `post-${Date.now()}`,
      status: 'published' as const,
      date: new Date().toISOString().split('T')[0],
      lastEdited: new Date().toISOString()
    };

    const updatedPosts = posts.filter(post => post.id !== postToPublish.id);
    const newPosts = [postToPublish, ...updatedPosts];
    
    setPosts(newPosts);
    localStorage.setItem('blogPosts', JSON.stringify(newPosts));
    
    // Reset form
    setCurrentPost({
      id: '',
      title: '',
      content: '',
      excerpt: '',
      date: new Date().toISOString().split('T')[0],
      lastEdited: new Date().toISOString(),
      tags: [],
      category: 'Programming',
      status: 'draft',
      readTime: '0 min read'
    });

    // Show success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg';
    notification.textContent = 'Blog published successfully!';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const loadPost = (post: BlogPost) => {
    setCurrentPost(post);
    setIsPreview(false);
  };

  const createNewPost = () => {
    setCurrentPost({
      id: '',
      title: '',
      content: '',
      excerpt: '',
      date: new Date().toISOString().split('T')[0],
      lastEdited: new Date().toISOString(),
      tags: [],
      category: 'Programming',
      status: 'draft',
      readTime: '0 min read'
    });
    setIsPreview(false);
  };

  const publishedPosts = posts.filter(post => post.status === 'published');
  const draftPosts = posts.filter(post => post.status === 'draft');

  return (
    <>
      <Helmet>
        <title>Write Blog - Ritik Raj</title>
        <meta name="description" content="Write and publish your daily blog posts" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Daily Blog Writer</h1>
            <p className="text-gray-600">Write and publish your thoughts, one day at a time</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Writing Panel - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                {/* Toolbar */}
                <div className="flex flex-wrap gap-4 mb-6 pb-4 border-b border-gray-200">
                  <button
                    onClick={() => setIsPreview(false)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      !isPreview 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Write
                  </button>
                  <button
                    onClick={() => setIsPreview(true)}
                    disabled={!currentPost.content}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      isPreview 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    } ${!currentPost.content ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Preview
                  </button>
                  <div className="flex items-center gap-2 ml-auto">
                    <input
                      type="checkbox"
                      id="autoSave"
                      checked={autoSave}
                      onChange={(e) => setAutoSave(e.target.checked)}
                      className="rounded text-blue-600"
                    />
                    <label htmlFor="autoSave" className="text-sm text-gray-600">
                      Auto-save
                    </label>
                  </div>
                </div>

                {/* Title Input */}
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Blog post title..."
                    value={currentPost.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full text-2xl font-bold border-none focus:outline-none focus:ring-0 placeholder-gray-400"
                  />
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Date: </span>
                    {new Date(currentPost.date).toLocaleDateString()}
                  </div>
                  <div>
                    <span className="font-medium">Read time: </span>
                    {currentPost.readTime}
                  </div>
                  {currentPost.lastEdited && (
                    <div>
                      <span className="font-medium">Last edited: </span>
                      {new Date(currentPost.lastEdited).toLocaleTimeString()}
                    </div>
                  )}
                </div>

                {/* Category and Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={currentPost.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="Programming">Programming</option>
                      <option value="Technology">Technology</option>
                      <option value="Lifestyle">Lifestyle</option>
                      <option value="Personal">Personal</option>
                      <option value="Tutorial">Tutorial</option>
                      <option value="Thoughts">Thoughts</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tags
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                        placeholder="Add tag..."
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        onClick={handleAddTag}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {currentPost.tags.map(tag => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                          <button
                            onClick={() => handleRemoveTag(tag)}
                            className="hover:text-blue-900"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Editor/Preview */}
                {!isPreview ? (
                  <div className="mb-6">
                    <textarea
                      value={currentPost.content}
                      onChange={(e) => handleInputChange('content', e.target.value)}
                      placeholder="Start writing your blog post here... (Markdown supported)"
                      className="w-full h-96 border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
                    />
                    <div className="text-xs text-gray-500 mt-2">
                      Supports basic Markdown: **bold**, *italic*, `code`, # headings
                    </div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="prose prose-lg max-w-none border border-gray-300 rounded-lg p-6 h-96 overflow-y-auto">
                      <h1>{currentPost.title}</h1>
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: currentPost.content
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em>$1</em>')
                            .replace(/`(.*?)`/g, '<code>$1</code>')
                            .replace(/\n/g, '<br>')
                        }} 
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-gray-200">
                  <button
                    onClick={handleSaveDraft}
                    disabled={!currentPost.content && !currentPost.title}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Save Draft
                  </button>
                  <button
                    onClick={handlePublish}
                    disabled={!currentPost.content || !currentPost.title}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Publish Post
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="space-y-6">
              {/* New Post Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Start Fresh</h3>
                <button
                  onClick={createNewPost}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  + New Blog Post
                </button>
              </div>

              {/* Drafts */}
              {draftPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Drafts ({draftPosts.length})</h3>
                  <div className="space-y-3">
                    {draftPosts.slice(0, 5).map(post => (
                      <button
                        key={post.id}
                        onClick={() => loadPost(post)}
                        className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900 truncate">
                          {post.title || 'Untitled'}
                        </div>
                        <div className="text-sm text-gray-500">
                          Last edited: {new Date(post.lastEdited).toLocaleTimeString()}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Published Posts */}
              {publishedPosts.length > 0 && (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Published ({publishedPosts.length})
                  </h3>
                  <div className="space-y-3">
                    {publishedPosts.slice(0, 5).map(post => (
                      <button
                        key={post.id}
                        onClick={() => loadPost(post)}
                        className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900 truncate">
                          {post.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString()} • {post.readTime}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Writing Stats */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Writing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Words:</span>
                    <span className="font-medium">
                      {currentPost.content.trim().split(/\s+/).filter(word => word.length > 0).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Characters:</span>
                    <span className="font-medium">{currentPost.content.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Read time:</span>
                    <span className="font-medium">{currentPost.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWriter;