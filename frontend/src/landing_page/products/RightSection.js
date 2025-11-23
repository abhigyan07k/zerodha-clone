import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-12 col-md-6 p-5 text-md-start text-center">
          <h1 className="mb-3 mt-3">{productName}</h1>
          <p className="mb-3 mt-3">{productDescription}</p>
          <a style={{ textDecoration: "none" }} href={learnMore}>
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Image Section */}
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
