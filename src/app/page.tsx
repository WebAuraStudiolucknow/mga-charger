import { HeroCarousel } from "@/components/home/HeroCarousel";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ProductCategories } from "@/components/home/ProductCategories";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WhyMGA } from "@/components/home/WhyMGA";
import { Applications } from "@/components/home/Applications";
import { CustomSolutions } from "@/components/home/CustomSolutions";
import { CompanyStats } from "@/components/home/CompanyStats";
import { ClientLogos } from "@/components/home/ClientLogos";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogPreview } from "@/components/home/BlogPreview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ScrollReveal><TrustStrip /></ScrollReveal>
      <ScrollReveal><FeaturedProducts /></ScrollReveal>
      <ScrollReveal><ProductCategories /></ScrollReveal>
      <AboutPreview />
      <ScrollReveal><WhyMGA /></ScrollReveal>
      <ScrollReveal><CustomSolutions /></ScrollReveal>
      <ScrollReveal><CompanyStats /></ScrollReveal>
      <ScrollReveal><ClientLogos /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><BlogPreview /></ScrollReveal>
      <ScrollReveal><ContactCTA /></ScrollReveal>
    </>
  );
}
