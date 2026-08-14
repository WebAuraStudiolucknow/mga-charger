import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight, ArrowRight, Download, Check } from "lucide-react";
import { products } from "@/data/products";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-secondary-bg min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border py-6">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center text-sm text-secondary-text flex-wrap gap-y-2">
            <Link href="/" className="hover:text-accent transition-colors shrink-0">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
            <Link href="/products" className="hover:text-accent transition-colors shrink-0">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
            <Link href={`/products?category=${product.category}`} className="hover:text-accent transition-colors shrink-0">{product.categoryName}</Link>
            <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
            <span className="text-primary-text font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
        {/* Main Product Area */}
        <div className="bg-white rounded-lg border border-border overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Gallery */}
            <div className="p-8 lg:p-12 bg-secondary-bg border-b lg:border-b-0 lg:border-r border-border relative">
              <div className="aspect-square relative flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-4 mt-8 overflow-x-auto pb-2">
                  {product.gallery.map((img, i) => (
                    <div key={i} className="w-20 h-20 shrink-0 rounded-md border border-border bg-white relative overflow-hidden cursor-pointer hover:border-accent">
                      <Image src={img} alt="" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-8 lg:p-12 flex flex-col">
              <div className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                {product.categoryName}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary-text mb-4 tracking-tight">
                {product.name}
              </h1>
              <p className="text-lg text-secondary-text mb-8 leading-relaxed">
                {product.shortDescription}
              </p>

              <div className="mb-8 flex-grow">
                <h3 className="font-semibold text-primary-text mb-4 text-lg">Key Features</h3>
                <ul className="space-y-3">
                  {product.features?.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                      <span className="text-secondary-text font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
                <Link
                  href={`/contact-us?product=${product.slug}`}
                  className="flex-1 bg-accent text-white px-6 py-3.5 rounded-sm font-semibold hover:bg-accent-dark transition-colors flex items-center justify-center shadow-sm"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/brochure"
                  className="flex-1 bg-white text-primary-text border border-border px-6 py-3.5 rounded-sm font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Brochure
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Details Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-primary-text mb-6">Product Overview</h2>
              <div className="prose prose-gray max-w-none text-secondary-text leading-relaxed">
                <p>{product.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary-text mb-6">Technical Specifications</h2>
              <div className="bg-white border border-border rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary-bg/50 transition-colors">
                        <th className="py-4 px-6 font-semibold text-primary-text w-1/3 bg-secondary-bg/30">{spec.label}</th>
                        <td className="py-4 px-6 text-secondary-text">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-primary-text mb-4">Need Custom Specifications?</h3>
              <p className="text-secondary-text mb-6 text-sm leading-relaxed">
                We manufacture custom chargers based on specific voltage, current, and application requirements.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors"
              >
                Discuss Custom Solution
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold text-primary-text mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <Link key={rel.id} href={`/products/${rel.slug}`} className="group bg-white rounded-lg border border-border overflow-hidden hover:border-accent transition-colors flex items-center p-4">
                  <div className="w-20 h-20 bg-secondary-bg rounded-md relative shrink-0">
                    <Image src={rel.image} alt={rel.name} fill className="object-cover rounded-md" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-primary-text group-hover:text-accent transition-colors line-clamp-2 mb-1">{rel.name}</h4>
                    <span className="text-xs text-secondary-text uppercase tracking-wider">{rel.categoryName}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
