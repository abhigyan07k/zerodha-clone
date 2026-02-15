import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        {/* Hero Image */}
        <div className="col-12">
          <img
            src="media/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-4"
          />
        </div>

        {/* Heading */}
        <div className="col-12">
          <h1 className="mt-3">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
        </div>

        {/* Signup Button */}
        <div className="col-12">
          <a
            href="https://6925ae556e0190c873e0379a--relaxed-jelly-b23fb9.netlify.app/"
            target="blank"
          >
            <button className="btn btn-primary fs-5 mt-3 w-50 w-md-50 w-lg-25">
              Go to Dashboard
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
