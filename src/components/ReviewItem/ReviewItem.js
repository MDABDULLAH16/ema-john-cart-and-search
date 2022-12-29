import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { handleDeleteProduct, product } = props;
  const { img, name, shipping, quantity, price } = product;
  return (
    <div className="review-item">
      <div>
        <img className="review-img" src={img} alt="" />
      </div>
      <div className="review-details-container">
        <div className="review-details " title={name}>
          <p>Name: {name.length > 20 ? name.slice(20) + "..." : name}</p>
          <p>
            <small>Price: $ {price}</small>
          </p>
          <p>
            <small>Shipping Charge:{shipping}</small>
          </p>
          <p>
            <small>Quantity:{quantity}</small>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleDeleteProduct(product)}
            className="delete-button"
          >
            <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
