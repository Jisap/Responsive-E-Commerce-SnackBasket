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