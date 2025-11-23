import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-4 mb-5">
      <div className="row text-center mt-5">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* First Platform */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/smallcaseLogo.png"
            className="img-fluid"
            style={{ width: "50%" }}
            alt="Smallcase"
          />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        {/* Second Platform */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/streakLogo.png"
            className="img-fluid"
            style={{ width: "45%" }}
            alt="Streak"
          />
          <p className="text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Third Platform */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/sensibullLogo.svg"
            className="img-fluid"
            style={{ width: "50%" }}
            alt="Sensibull"
          />
          <p className="text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Fourth Platform */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/zerodhaFundhouse.png"
            className="img-fluid"
            style={{ width: "50%" }}
            alt="Zerodha Fundhouse"
          />
          <p className="text-muted text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Fifth Platform */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/dittoLogo.png"
            className="img-fluid"
            style={{ width: "35%" }}
            alt="Ditto"
          />
          <p className="text-muted text-small">
            Insurance advisory platform that helps you understand and buy the
            right insurance plans.
          </p>
        </div>

        {/* Sixth Platform */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <img
            src="media/goldenpiLogo.png"
            className="img-fluid"
            style={{ width: "50%" }}
            alt="GoldenPi"
          />
          <p className="text-muted text-small">
            Bonds investment platform that allows retail investors to invest in
            high-yield fixed-income products.
          </p>
        </div>

        {/* Sign-up Button */}
        <div className="col-12 mt-4">
          <button className="p-2 btn btn-primary fs-5 w-100 w-md-50">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
