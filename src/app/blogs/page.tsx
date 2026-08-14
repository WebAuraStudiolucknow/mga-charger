import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs & Insights",
  description: "Technical guides, industry news, and insights on battery charging technology from MGA Electronics.",
};

export default function BlogsPage() {
  const featuredBlog = blogs[0];
  const regularBlogs = blogs.slice(1);

  return (
    <div className="bg-secondary-bg min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-border py-12 lg:py-16">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-text mb-6 tracking-tight">
            Knowledge Center
          </h1>
          <p className="text-lg text-secondary-text">
            Technical guides, industry trends, and maintenance tips from our engineering experts.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Featured Blog */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary-text mb-8 border-b border-border pb-4">Featured Article</h2>
          <div className="bg-white rounded-lg border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-accent transition-colors duration-300">
            <Link href={`/blogs/${featuredBlog.slug}`} className="relative aspect-[4/3] lg:aspect-auto">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                className="object-cover"
                priority
              />
            </Link>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-sm text-xs uppercase tracking-wider">
                  {featuredBlog.category}
                </span>
                <span className="text-secondary-text text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {featuredBlog.date}
                </span>
              </div>
              <Link href={`/blogs/${featuredBlog.slug}`}>
                <h3 className="text-2xl lg:text-4xl font-bold text-primary-text mb-4 hover:text-accent transition-colors leading-tight">
                  {featuredBlog.title}
                </h3>
              </Link>
              <p className="text-lg text-secondary-text mb-8 leading-relaxed">
                {featuredBlog.excerpt}
              </p>
              <Link
                href={`/blogs/${featuredBlog.slug}`}
                className="inline-flex items-center text-primary-text font-semibold hover:text-accent transition-colors group/link text-lg"
              >
                Read Full Article
                <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Regular Grid */}
        <div>
          <h2 className="text-2xl font-bold text-primary-text mb-8 border-b border-border pb-4">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBlogs.map((blog) => (
              <article key={blog.slug} className="group flex flex-col h-full bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <Link href={`/blogs/${blog.slug}`} className="relative h-56 overflow-hidden block">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="text-xs text-secondary-text flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {blog.date}
                    </span>
                  </div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <h3 className="text-xl font-bold text-primary-text mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-secondary-text mb-6 line-clamp-3 flex-grow text-sm">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center text-primary-text font-semibold hover:text-accent transition-colors group/link mt-auto text-sm"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
