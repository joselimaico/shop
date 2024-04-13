"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/interfaces";
import { useState } from "react";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const { images, slug, price, title } = product;
  const [displayImage, setDisplayImage] = useState(images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={title}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(images[1])}
          onMouseLeave={() => setDisplayImage(images[0])}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" href={`/product/${slug}`}>
          {title}
        </Link>
        <span className="font-bold">${price}</span>
      </div>
    </div>
  );
};
