import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { blogs as staticBlogs } from "@/data/blogs";
import { getBlogs } from "@/lib/payloadApi";

interface Props {
  initialBlogs?: any[];
}

export async function BlogPreview({ initialBlogs }: Props) {
  const blogsData = initialBlogs && initialBlogs.length > 0
    ? initialBlogs
    : await getBlogs();

  const blogList = blogsData && blogsData.length > 0 ? blogsData.slice(0, 3) : staticBlogs.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-off-white">
      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="text-accent font-semibold tracking-wider text-xs uppercase mb-4 flex items-center">
              <span className="w-6 h-[2px] bg-accent mr-3"></span>
              LATEST INSIGHTS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-text tracking-tight leading-[1.1]">
              Technical guides & industry trends.
            </h2>
          </div>
          <Link
            href="/blogs"
            className="hidden md:flex items-center text-primary-text font-bold hover:text-accent transition-colors group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogList.map((article: any) => (
            <Link 
              key={article.slug || article.id}
              href={`/blogs/${article.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-border hover:border-accent hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 flex flex-col h-full"
            >
              {/* Top Image */}
              <div className="relative aspect-[16/10] overflow-hidden shrink-0 border-b border-border/50">
                <Image
                  src={article.image || article.imagePath || '/images/ev-charger-guide.jpg'}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              {/* Bottom Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent-light px-2.5 py-1 rounded-sm">
                    {article.category || 'Technology'}
                  </span>
                  <span className="text-xs text-secondary-text font-medium flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    {article.date || 'Feb 2026'}
                  </span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-primary-text mb-4 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-secondary-text mb-8 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-sm font-bold text-primary-text group-hover:text-accent transition-colors">
                    Read Article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-off-white text-primary-text group-hover:bg-accent group-hover:text-white transition-colors flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
