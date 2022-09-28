import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img src={urlFor(image && image[0])} className="product-image"></img>
          <div className="info">
            <span>+ INFO</span>
          </div>
          <div className="prod-info-container">
            <p className="product-name">{name}</p>
            <p className="product-price">€{price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Product;
