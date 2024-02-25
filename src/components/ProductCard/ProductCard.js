import React from "react";
import "./ProductCard.scss";
function ProductCard(props) {
  const {
    img,
    id,
    name,
    rating,
    review,
    highlights,
    specification,
    description,
  } = props.product;

  return (
    <div className="product-">
      <>
        {id === 1 && (
          <div className="best-choice-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trophy best-icon"
              viewBox="0 0 16 16"
            >
              <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
            </svg>
            <p>Best Choice</p>
          </div>
        )}

        {id === 2 && (
          <div className="best-choice-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-gem best-icon "
              viewBox="0 0 16 16"
            >
              <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
            </svg>
            <p>Best Value</p>
          </div>
        )}
        {/* Other content that's always rendered */}
      </>
      <div className="product-card">
        <p className="product-id">{id}</p>
        <div className="product-image-name">
          <img className="product-image" src={img} alt="desktop" />
          <p>{name}</p>
        </div>

        {/* Product description */}
        <div className="product-content">
          <p>
            <b>{specification}</b> {description}
          </p>
          <div className="main-higlights">
            <p>
              <b>Main highlights</b>
            </p>
            {[1, 2, 3].includes(id) && (
              <p className="main-highlights-text">{highlights}</p>
            )}
            {id === 4 && (
              <>
                {" "}
                <ul className="main-highlight-list">
                  <li>
                    <span className="rating">9.9 </span>{" "}
                    <span className="highlight-item">Building Responsive</span>
                  </li>
                  <li>
                    <span className="rating">8.9 </span>{" "}
                    <span className="highlight-item">Cool</span>
                  </li>
                  <li>
                    <span className="rating">8.9 </span>{" "}
                    <span className="highlight-item">Docs</span>
                  </li>
                </ul>
                <p className="reasons">Why we love it</p>
                <ul className="reasons-list">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span>Documentation</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span>Easy Use</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span>Out Of Box</span>
                  </li>
                </ul>
              </>
            )}
          </div>

          <div className="show-more">
            <p className="show-more-text">Show more</p>
            <i className=" show-more-icon fa-solid fa-chevron-down"></i>
          </div>
        </div>
        {/* Product Ratings */}
        <div className="product-ratings">
          <div className="rating">
            <p className="rating-rounded">{rating}</p>
            <p className="rating-category">{review}</p>
            <div className="rating-stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
          </div>
          <button className="product-view">View</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
