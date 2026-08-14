import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, Calendar, User, ArrowLeft } from "lucide-react";
import { blogs } from "@/data/blogs";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default function BlogDetailPage({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs.filter(b => b.slug !== blog.slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen pb-20">
      <article>
        {/* Header */}
        <div className="bg-secondary-bg pt-12 pb-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <Link 
              href="/blogs" 
              className="inline-flex items-center text-sm font-semibold text-secondary-text hover:text-accent mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all articles
            </Link>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-sm text-xs uppercase tracking-wider">
                {blog.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-primary-text mb-6 tracking-tight leading-[1.15]">
              {blog.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-secondary-text text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {blog.date}
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {blog.author}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-10 relative z-10">
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden shadow-lg border border-border mb-12">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="prose prose-lg max-w-none text-secondary-text leading-relaxed prose-headings:text-primary-text prose-a:text-accent">
            <p className="text-xl leading-relaxed text-primary-text font-medium mb-8">
              {blog.excerpt}
            </p>
            {/* Split content by double newlines for paragraphs if needed, or just render it directly */}
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      
      {/* Related */}
      {relatedBlogs.length > 0 && (
        <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-20 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-primary-text mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogs.map((rel) => (
              <Link key={rel.slug} href={`/blogs/${rel.slug}`} className="group flex space-x-4">
                <div className="w-24 h-24 relative rounded-md overflow-hidden shrink-0 border border-border">
                  <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-text group-hover:text-accent transition-colors line-clamp-2 mb-1">{rel.title}</h4>
                  <p className="text-sm text-secondary-text line-clamp-2">{rel.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
