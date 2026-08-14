import productsData from './products.json';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  slug: string;
  specifications: ProductSpecification[];
  features: string[];
  featured: boolean;
}

export const products: Product[] = productsData as Product[];
