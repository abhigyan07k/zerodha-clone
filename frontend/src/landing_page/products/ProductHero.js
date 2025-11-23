import React from "react";

function ProductHero() {
  return (
    <div className="container">
      <div className="row p-3 m-3">
        <div className="col text-center">
          <h1 className="fs-2 mb-3">Zerodha Products</h1>
          <h5 className="text-muted mb-3">
            Sleek, modern, and intuitive trading platforms
          </h5>
          <p>
            Check out our
            <a style={{ textDecoration: "none" }} href="">
              {" "}
              investment offerings
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductHero;
