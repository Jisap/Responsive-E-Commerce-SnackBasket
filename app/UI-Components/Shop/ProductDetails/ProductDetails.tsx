"use client"

import Image from "next/image"
import { StaticImageData } from 'next/image';
import Deals from "../../Index/Deals/Deals";
import toast from "react-hot-toast";
import { ProductType } from '../../../hooks/useCartActions';

interface ProductDetailsType {
  Id: string;
  image: string;
  title: string;
  price: string;
  lessprice: string;
  review: string;
  sold?: string;
  sale?: string;
}

interface Props {
  id?: string;
  products: ProductDetailsType[];

}

const ProductDetails = ({ id, products }:Props) => {
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails