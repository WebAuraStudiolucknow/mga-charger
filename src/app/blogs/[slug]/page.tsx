import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { getBlogBySlug, getBlogs } from "@/lib/payloadApi";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Article Not Found" };

  return {
    title: `${blog.title} | MGA Charger`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getBlogs();
  const relatedBlogs = allBlogs.filter(b => b.slug !== blog.slug).slice(0, 2);
  const isHtmlContent = Boolean(blog.content && (blog.content.includes('<p>') || blog.content.includes('<h2>') || blog.content.includes('<h3>') || blog.content.includes('<ul>') || blog.content.includes('<div') || blog.content.includes('<br')));

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
          
          <div className="prose prose-lg max-w-none text-secondary-text leading-relaxed prose-headings:text-primary-text prose-headings:font-bold prose-a:text-accent prose-a:font-semibold prose-img:rounded-xl prose-strong:text-primary-text">
            <p className="text-xl leading-relaxed text-primary-text font-medium mb-8">
              {blog.excerpt}
            </p>
            
            {isHtmlContent ? (
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            ) : (
              blog.content.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))
            )}
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
