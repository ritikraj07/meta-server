// BlogPost.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
  slug: string;
  metaDescription: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // In real app, fetch by slug from API
  const post: BlogPost = {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a React project with TypeScript and explore the benefits of type safety in your web applications.",
    content: `
      <p>TypeScript has revolutionized the way we build React applications by bringing static typing to the JavaScript ecosystem.</p>
      <!-- Your content here -->
    `,
    author: "Ritik Raj",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "React",
    tags: ["React", "TypeScript", "Web Development"],
    imageUrl: "/api/placeholder/800/400",
    slug: "getting-started-with-react-and-typescript",
    metaDescription: "Complete guide to setting up React with TypeScript. Learn type safety, best practices, and productivity tips for web development."
  };

  // Generate structured data for the blog post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.imageUrl,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Software Engineer"
    },
    "publisher": {
      "@type": "Person",
      "name": post.author,
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourportfolio.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yourportfolio.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", ")
  };

  const canonicalUrl = `https://yourportfolio.com/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} - Ritik Raj</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        <meta property="og:site_name" content="Ritik Raj Portfolio" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        {post.imageUrl && <meta name="twitter:image" content={post.imageUrl} />}
        <meta name="twitter:creator" content="@yourtwitterhandle" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              ← Back to Blog
            </Link>
          </nav>

          <article itemScope itemType="https://schema.org/BlogPosting">
            <header className="mb-8">
              {post.imageUrl && (
                <div className="h-64 bg-gray-200 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={`Featured image for ${post.title}`}
                    className="w-full h-full object-cover"
                    itemProp="image"
                    loading="eager"
                  />
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span 
                    className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    itemProp="articleSection"
                  >
                    {post.category}
                  </span>
                  <span className="text-gray-500" itemProp="timeRequired">
                    {post.readTime}
                  </span>
                </div>
                <time 
                  className="text-gray-500" 
                  itemProp="datePublished" 
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              <h1 
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                itemProp="headline"
              >
                {post.title}
              </h1>

              <p 
                className="text-xl text-gray-600 mb-6 leading-relaxed"
                itemProp="description"
              >
                {post.excerpt}
              </p>

              <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-lg font-semibold text-gray-600">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900" itemProp="name">
                    {post.author}
                  </p>
                  <p className="text-gray-500" itemProp="jobTitle">
                    Software Engineer
                  </p>
                </div>
              </div>
            </header>

            <div 
              className="prose prose-lg max-w-none mb-8"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <footer className="border-t border-gray-200 pt-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    itemProp="keywords"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-blue-600 transition-colors">
                  Share on Twitter
                </button>
                <button className="text-gray-600 hover:text-blue-800 transition-colors">
                  Share on LinkedIn
                </button>
              </div>
            </footer>
          </article>

          {/* Related posts section */}
        </div>
      </div>
    </>
  );
};

export default BlogPost;