import { StaticImageData } from "next/image";

// Tipos centralizados
export type CategoryType = {
  image: StaticImageData;
  title: string;
  products: string;
};

export type VendorType = {
  id: number;
  title: string;
  time: string;
  off: string;
  vendorMain: string;
  vendors: string[];
};

export type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

export interface MiddleNavbarProps {
  isFixed: boolean;
  cartCount: number;
  wishlistCount: number;
}

export type ProductType = {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold?: string;
  sale?: string;
  quantity?: number; // cantidad estándar
  rating?: number; // e.g., 4.5
  description?: string; // El texto largo de descripción
  offer?: string; // e.g., "Special Offer: 5 Days..."
  brand?: string; // e.g., "Lay's"
  features?: string[]; // Lista de características como "Gluten free"
  tags?: string[]; // e.g., ["Made in USA", "Ready to Eat"]
  specifications?: {
    [key: string]: string | undefined; // Para "Product Type", "Item Code", etc.
  };
  benefits?: Benefit[]; // Para "Fast Delivery", "Warranty", etc.
};

export type CartItem = ProductType & {
  quantity: number; // cantidad obligatoria en Cart
};


export type Benefit = {
  icon: string;
  title: string;
  description: string;
}

export type DealItem = {
  image: StaticImageData;
  title: string;
  description: string;
  className?: string;
};

export type BannerType = {
  image: StaticImageData;
  heading: string;
}

export interface Blog {
  id: number;
  image: string;
  title: string;
  tag: string;
  pere: string;
  pere2: string;
  pere3: string;
  date: string;
  comment: string;
}