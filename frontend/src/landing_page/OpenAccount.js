import React from "react";

function OpenAccount() {
  return (
    <div className="container p-4 mb-5">
      <div className="row text-center">
        <h1 className="mt-4 fs-2">Open a Zerodha account</h1>
        <p className="mt-3 mb-4 fs-5 text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <div>
          <button
            className="p-3 btn btn-primary fs-5 mt-3 w-50 w-md-25"
            style={{ maxWidth: "250px" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
