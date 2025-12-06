import React from "react";

const BagSummary = () => {
  const BagSummary = {
    totalItem: 3,
    totalMRP: 536,
    totalDiscount: 66,
    finalPayment: 473,
  };
  return (
    <>
      <div class="bag-details-container">
        <div class="price-header">
          PRICE DETAILS (${BagSummary.totalItem} Items){" "}
        </div>
        <div class="price-item">
          <span class="price-item-tag">Total MRP</span>
          <span class="price-item-value">₹${BagSummary.totalMRP}</span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Discount on MRP</span>
          <span class="price-item-value priceDetail-base-discount">
            -₹${BagSummary.totalDiscount}
          </span>
        </div>
        <div class="price-item">
          <span class="price-item-tag">Convenience Fee</span>
          <span class="price-item-value">₹99</span>
        </div>
        <hr />
        <div class="price-footer">
          <span class="price-item-tag">Total Amount</span>
          <span class="price-item-value">₹${BagSummary.finalPayment}</span>
        </div>
      </div>
      <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
      </button>
    </>
  );
};

export default BagSummary;
