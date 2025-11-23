import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center text-md-start border-top">
        {/* Brokerage Calculator Section */}
        <div className="col-12 col-md-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul className="text-muted" style={{ lineHeight: "2" }}>
            <li>
              Call & Trade and RMS auto-squared off: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contracts notes will be sent via e-mail.</li>
            <li>
              Physical copy of contract notes, if required, shall be charged ₹20
              per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order
              (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* List of Charges Section */}
        <div className="col-12 col-md-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
