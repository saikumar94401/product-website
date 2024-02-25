import React from "react";
import "./RelatedProduct.scss";
function RelatedProduct(props) {
  const { img, name, discount, description, price } = props.product;
  let discount_cost = price - (discount / 100) * price;
  discount_cost = Math.floor(discount_cost * 100) / 100;

  return (
    <div className="related-product-card">
      <img className="related-product-img" src={img} alt="dektop" />
      <div className="related-product-rating-card">
        <div className="related-product-offer-card">
          <span className="discount-off">{discount}% Off</span>
          <span className="limited-text">Limited time </span>
        </div>
        <p className="related-product-name">{name}</p>
        <p className="related-product-description">{description}</p>
        <div className="related-product-price-card">
          <span className="related-product-price">${discount_cost}</span>
          <span className="related-product-discount-price">${price}</span>
          <span className="related-product-discount">({discount}% off)</span>
        </div>
        <button className="related-product-view-btn">View Deal</button>
      </div>
    </div>
  );
}

export default RelatedProduct;
