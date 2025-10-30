// Tipos centralizados
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
