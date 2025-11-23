import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="fs-1">Charges</h1>
        <p className="text-center mt-3 text-muted fs-5">
          List of all charges and taxes
        </p>
      </div>

      {/* Pricing Sections */}
      <div className="row p-5 mt-5">
        <div className="col-12 col-md-6 col-lg-4 p-4 text-center">
          <img
            src="media/pricing0.svg"
            alt="pricingimg"
            className="img-fluid"
          />
          <h2 className="fs-4 mt-4">Free equity delivery</h2>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-4 text-center">
          <img
            src="media/intradayTrades.svg"
            alt="intradayimg"
            className="img-fluid"
          />
          <h2 className="fs-4 mt-4">Intraday and F&O trades</h2>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 p-4 text-center">
          <img
            src="media/pricing0.svg"
            alt="pricingimg"
            className="img-fluid"
          />
          <h2 className="fs-4 mt-4">Free direct MF</h2>
          <p className="text-muted mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
