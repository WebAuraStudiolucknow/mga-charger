import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  ChevronRight, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Award, 
  PhoneCall, 
  FileText, 
  Star,
  Settings2,
  Wrench,
  Gauge
} from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { BsWhatsapp } from "react-icons/bs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} | MGA Electronics Industrial Chargers`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-secondary-bg/60 min-h-screen pb-24">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-border/80 py-4">
        <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-xs sm:text-sm text-secondary-text flex-wrap gap-y-1">
            <Link href="/" className="hover:text-accent transition-colors shrink-0 font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 shrink-0 text-secondary-text/60" />
            <Link href="/products" className="hover:text-accent transition-colors shrink-0 font-medium">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 shrink-0 text-secondary-text/60" />
            <Link href={`/products?category=${product.category}`} className="hover:text-accent transition-colors shrink-0 font-medium">{product.categoryName}</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 shrink-0 text-secondary-text/60" />
            <span className="text-primary-text font-bold truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        
        {/* Main Product Hero Card */}
        <div className="bg-white rounded-[24px] sm:rounded-[28px] border border-border/80 shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Product Image & Showcase (Left 5 Columns) */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-white border-b lg:border-b-0 lg:border-r border-border/80 flex flex-col justify-between items-center relative">
              
              {/* Trust Badges Bar */}
              <div className="w-full flex items-center justify-between mb-4 z-10">
                <span className="inline-flex items-center text-[11px] font-bold text-accent bg-accent-light px-3 py-1 rounded-full border border-accent/20">
                  <Award className="w-3.5 h-3.5 mr-1" /> ISO 9001:2015 Certified
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Made in India
                </span>
              </div>

              {/* Main Image */}
              <div className="aspect-square relative w-full my-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Quick Quality Tags */}
              <div className="w-full grid grid-cols-3 gap-2 pt-4 border-t border-gray-200/80 text-center">
                <div className="p-2 rounded-lg bg-white/80 border border-gray-200/50">
                  <ShieldCheck className="w-4 h-4 text-accent mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-primary-text block">Overload Guard</span>
                </div>
                <div className="p-2 rounded-lg bg-white/80 border border-gray-200/50">
                  <Zap className="w-4 h-4 text-accent mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-primary-text block">High Surge Cap</span>
                </div>
                <div className="p-2 rounded-lg bg-white/80 border border-gray-200/50">
                  <Cpu className="w-4 h-4 text-accent mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-primary-text block">Pure DC Output</span>
                </div>
              </div>
            </div>

            {/* Product Info & B2B Actions (Right 7 Columns) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Category & Title */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-md">
                    {product.categoryName}
                  </span>
                  
                  {/* Rating Tag */}
                  <div className="flex items-center text-xs font-bold text-accent bg-accent-light px-3 py-1 rounded-full border border-accent/20">
                    <Star className="w-3.5 h-3.5 fill-accent mr-1" />
                    <span>4.9</span>
                    <span className="text-secondary-text font-normal ml-1">(1,240 Industrial Ratings)</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-primary-text tracking-tight mb-4 leading-tight">
                  {product.name}
                </h1>

                <p className="text-base sm:text-lg text-secondary-text mb-8 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Quick Product Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <div className="bg-secondary-bg p-3.5 rounded-xl border border-border/70">
                    <span className="text-[10px] font-bold text-secondary-text uppercase block mb-0.5">MANUFACTURER</span>
                    <span className="text-xs sm:text-sm font-bold text-primary-text block truncate">MGA Electronics</span>
                  </div>
                  <div className="bg-secondary-bg p-3.5 rounded-xl border border-border/70">
                    <span className="text-[10px] font-bold text-secondary-text uppercase block mb-0.5">WARRANTY</span>
                    <span className="text-xs sm:text-sm font-bold text-primary-text block truncate">1 Year OEM Warranty</span>
                  </div>
                  <div className="bg-secondary-bg p-3.5 rounded-xl border border-border/70">
                    <span className="text-[10px] font-bold text-secondary-text uppercase block mb-0.5">DISPATCH</span>
                    <span className="text-xs sm:text-sm font-bold text-primary-text block truncate">Within 24-48 Hours</span>
                  </div>
                </div>

                {/* Key Features List */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary-text mb-3">Key Features & Capabilities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features?.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm font-medium text-primary-text bg-white border border-border/60 p-2.5 rounded-lg shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-accent mr-2.5 shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* B2B Action Bar: Request Quote, WhatsApp & Download Specs */}
              <div className="pt-6 border-t border-border/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/contact-us?product=${product.slug}`}
                  className="flex-1 bg-accent text-white px-5 py-3.5 rounded-xl font-bold hover:bg-accent-dark transition-all duration-300 flex items-center justify-center shadow-md shadow-accent/20 text-xs sm:text-sm group"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Request Quote</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/917499394690?text=Hi%20MGA%20Electronics%2C%20I%20am%20interested%20in%20product%3A%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-md shadow-emerald-500/20 text-xs sm:text-sm"
                >
                  <BsWhatsapp className="w-4 h-4 mr-2 shrink-0 text-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/brochure"
                  className="flex-1 bg-white text-primary-text border border-border hover:border-accent hover:bg-secondary-bg px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center text-xs sm:text-sm shadow-2xs"
                >
                  <Download className="w-4 h-4 mr-2 text-accent" />
                  <span>Download Specs</span>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Detailed Information Tabs / Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Technical Specifications Table */}
            <section className="bg-white rounded-2xl border border-border/80 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/80">
                <div className="flex items-center">
                  <Gauge className="w-6 h-6 text-accent mr-3" />
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-text">Technical Specifications</h2>
                </div>
                <span className="text-xs font-semibold text-secondary-text bg-secondary-bg px-3 py-1 rounded-full border border-border/60">
                  Model: MGA-{product.slug.toUpperCase()}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {product.specifications.map((spec, i) => (
                      <tr key={i} className="border-b border-border/60 last:border-0 hover:bg-secondary-bg/60 transition-colors">
                        <th className="py-3.5 px-4 font-semibold text-primary-text text-sm w-1/3 bg-secondary-bg/40">{spec.label}</th>
                        <td className="py-3.5 px-4 text-secondary-text font-medium text-sm">{spec.value}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-border/60 hover:bg-secondary-bg/60 transition-colors">
                      <th className="py-3.5 px-4 font-semibold text-primary-text text-sm w-1/3 bg-secondary-bg/40">Transformer Winding</th>
                      <td className="py-3.5 px-4 text-secondary-text font-medium text-sm">100% Electrolytic High-Purity Copper</td>
                    </tr>
                    <tr className="border-b border-border/60 hover:bg-secondary-bg/60 transition-colors">
                      <th className="py-3.5 px-4 font-semibold text-primary-text text-sm w-1/3 bg-secondary-bg/40">Enclosure Type</th>
                      <td className="py-3.5 px-4 text-secondary-text font-medium text-sm">Heavy-Gauge Steel Powder Coated Box</td>
                    </tr>
                    <tr className="border-b border-border/60 hover:bg-secondary-bg/60 transition-colors">
                      <th className="py-3.5 px-4 font-semibold text-primary-text text-sm w-1/3 bg-secondary-bg/40">Operating Temperature</th>
                      <td className="py-3.5 px-4 text-secondary-text font-medium text-sm">-10°C to +55°C (Continuous Duty)</td>
                    </tr>
                    <tr className="hover:bg-secondary-bg/60 transition-colors">
                      <th className="py-3.5 px-4 font-semibold text-primary-text text-sm w-1/3 bg-secondary-bg/40">Warranty</th>
                      <td className="py-3.5 px-4 text-secondary-text font-medium text-sm">2 Years Comprehensive OEM Warranty</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Built-in Protection Features */}
            <section className="bg-white rounded-2xl border border-border/80 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center mb-6 pb-4 border-b border-border/80">
                <ShieldCheck className="w-6 h-6 text-accent mr-3" />
                <h2 className="text-xl sm:text-2xl font-bold text-primary-text">Protection & Electrical Safety</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary-bg border border-border/60 flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mr-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-text text-sm mb-1">Short Circuit Protection</h4>
                    <p className="text-xs text-secondary-text leading-relaxed">Automatic electronic trip preventing damage during terminal short circuits.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary-bg border border-border/60 flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mr-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-text text-sm mb-1">Reverse Polarity Guard</h4>
                    <p className="text-xs text-secondary-text leading-relaxed">Safety interlock protection in case clamp connections are reversed.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary-bg border border-border/60 flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mr-4">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-text text-sm mb-1">Thermal Cutout Switch</h4>
                    <p className="text-xs text-secondary-text leading-relaxed">Internal heat sensors safely shut down charging under extreme ambient temperatures.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary-bg border border-border/60 flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mr-4">
                    <Settings2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-text text-sm mb-1">Auto Float Mode</h4>
                    <p className="text-xs text-secondary-text leading-relaxed">Automatically switches to trickle float charge once full battery voltage is achieved.</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Need Custom Spec B2B Box */}
            <div className="bg-gradient-to-br from-deep-navy to-accent-dark text-white p-6 sm:p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                <Wrench className="w-6 h-6 text-accent-light" />
              </div>

              <h3 className="text-xl font-bold mb-3 leading-tight">Need Custom OEM Specifications?</h3>
              <p className="text-white/80 text-xs sm:text-sm mb-6 leading-relaxed font-light">
                We manufacture customized industrial battery chargers according to your exact voltage rating, current output, and enclosure design.
              </p>

              <Link
                href="/contact-us"
                className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-5 rounded-xl transition-all flex items-center justify-center text-sm shadow-md group"
              >
                <span>Request Custom Build</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Direct B2B Technical Assistance Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border/80 shadow-xs">
              <h3 className="text-base font-bold text-primary-text mb-2">Technical Sales Assistance</h3>
              <p className="text-xs text-secondary-text mb-6">Have questions regarding charger compatibility or bulk commercial orders?</p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+917499394690" 
                  className="flex items-center p-3 rounded-xl bg-secondary-bg hover:bg-accent-light hover:border-accent/30 border border-border/60 transition-all text-primary-text hover:text-accent font-semibold text-xs sm:text-sm"
                >
                  <PhoneCall className="w-4 h-4 text-accent mr-3 shrink-0" />
                  <span>Call +91-7499394690</span>
                </a>
                
                <a 
                  href="mailto:mgacharger@yahoo.com" 
                  className="flex items-center p-3 rounded-xl bg-secondary-bg hover:bg-accent-light hover:border-accent/30 border border-border/60 transition-all text-primary-text hover:text-accent font-semibold text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4 text-accent mr-3 shrink-0" />
                  <span>Email: mgacharger@yahoo.com</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Showcase */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border/80">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-accent font-bold text-xs uppercase tracking-wider">MORE OPTIONS</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-text tracking-tight">Related Products</h2>
              </div>
              <Link href="/products" className="text-accent font-semibold text-sm hover:underline hidden sm:inline-flex items-center">
                View All Catalog <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

