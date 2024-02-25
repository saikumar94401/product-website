import React from "react";
import "./Home.scss";
import productList from "../../products.json";
import relatedProductList from "../../relatedProducts.json";
import ProductCard from "../ProductCard/ProductCard";
import RelatedProduct from "../RelatedProduct/RelatedProduct";
function Home() {
  return (
    <div className="home-page">
      <p className="heading">Best Website builders in ths US</p>
      <hr className="hr-line" />
      <div className="updated-details">
        <div className="update-date-disclosure">
          <div className="updated-date">
            <i class=" check-icon fa-regular fa-circle-check"></i>
            <p>Last Updated - February 22,2020</p>
          </div>
          <div className="disclosure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className=" check-icon bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <p>Advertising Disclosure</p>
          </div>
        </div>
        <div className="relevant-search">
          <p className="relevant-text">Top Relevant</p>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <hr className="hr-line" />
      <ul className="utility-list">
        <li>Tools</li>
        <li>AWS Builder</li>
        <li>Start Build</li>
        <li>Build Supplies</li>
        <li>Tooling</li>
        <li>BlueHosting</li>
      </ul>

      <div className="path-details">
        <a className="path-select" href="/">
          Home
        </a>
        <span>{">"}</span>
        <a href="/">Hosing for all</a>
        <span>{">"}</span>
        <a className="path-select" href="/">
          Hosting
        </a>
        <span>{">"}</span>
        <a href="/">Hosting6</a>
        <span>{">"}</span>
        <a href="/">Hosting5</a>
      </div>

      {/* Product Cards */}
      <div className="product-details">
        {productList.products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>

      {/* Related Product Cards */}
      <div className="related-products">
        <p className="related-product-heading">
          Related deals you might like for
        </p>

        <div className="related-product-list">
          {relatedProductList.relatedProducts.map((product) => {
            return <RelatedProduct key={product.id} product={product} />;
          })}
        </div>
      </div>

      {/* Sign up section  */}
      <div className="sign-up-section">
        <p>
          Sign up and get exlusive <br /> special deals
        </p>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Home;
