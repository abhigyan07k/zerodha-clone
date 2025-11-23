import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 p-5 text-center">
          <img
            src="media/education.svg"
            className="img-fluid"
            alt="Education"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 p-5 mt-md-0 mt-4 text-center text-md-start">
          <h1 className="fs-2 mb-4">Free and open market education</h1>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="text-decoration-none">
            Varsity{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mb-3 mt-4">
            Trading Q&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="text-decoration-none">
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
