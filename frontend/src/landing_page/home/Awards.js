import React from "react";

function Awards() {
  return (
    <div className="container">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 p-5 text-center">
          <img
            src="media/largestBroker.svg"
            className="img-fluid"
            alt="Largest Broker"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 p-5 mt-md-0 mt-4 text-center text-md-start">
          <h1>Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* List Section */}
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. securities</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <img
            src="/media/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-3 w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
