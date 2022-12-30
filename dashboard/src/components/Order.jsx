import React from "react";

const Order = (props) => {
  const { wo, po, catalog, description, required_date, shippingStatus } = props;
  return (
    <div>
      <div
        className="card border-primary mb-3"
        style={{ maxWidth: "18rem", margin: "1rem auto" }}
      >
        <div className="card-header">{wo}</div>
        <div className="card-body text-primary">
          <h5 className="card-title">{catalog}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
