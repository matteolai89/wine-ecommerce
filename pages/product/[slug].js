import { React, useState } from "react";
import { client, urlFor } from "../../lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, description } = product;
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd } = useStateContext();
  return (
    <>
      <div className="product-detail-container">
        <img
          src={urlFor(image && image[index])}
          className="product-detail-image"
        />

        <div className="product-detail-desc">
          <h1>{name}</h1>

          <p className="description">{description}</p>
          <h4>Better served with:</h4>
          <p className="details">{details}</p>
          <div className="buy-container">
            <p className="price">€{price}</p>
            <p className="price-taxes">Price inc taxes</p>
            <div className="quantity">
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="add-to-cart"
                onClick={() => {
                  onAdd(product, qty);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug{
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  const BannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(BannerQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
