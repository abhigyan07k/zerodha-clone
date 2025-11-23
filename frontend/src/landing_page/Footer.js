import React from "react";

function Footer() {
  return (
    <footer className="mb-0 py-4" style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container border-top">
        <div className="row mt-5 text-center text-md-start">
          {/* Logo & Social Icons */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <img src="media/logo.svg" alt="logo" style={{ width: "50%" }} />
            <p className="text-muted mt-3">
              &copy; 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div>
              <i className="fa-brands fa-x-twitter fs-4 text-muted mx-2"></i>
              <i className="fa-brands fa-square-facebook fs-4 text-muted mx-2"></i>
              <i className="fa-brands fa-instagram fs-4 text-muted mx-2"></i>
              <i className="fa-brands fa-linkedin-in fs-4 text-muted mx-2"></i>
            </div>
            <div className="border mt-3"></div>
            <div className="mt-2">
              <i className="fa-brands fa-youtube text-muted mx-2 fs-4"></i>
              <i className="fa-brands fa-whatsapp text-muted mx-2 fs-4"></i>
              <i className="fa-brands fa-telegram text-muted mx-2 fs-4"></i>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <p>
              <strong>Company</strong>
            </p>
            {[
              "About",
              "Products",
              "Pricing",
              "Referral programme",
              "Careers",
              "Zerodha.tech",
              "Open source",
              "Press & media",
              "Zerodha Cares (CSR)",
            ].map((item, index) => (
              <a
                key={index}
                className="d-block text-muted text-decoration-none mb-1"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Support Links */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <p>
              <strong>Support</strong>
            </p>
            {[
              "Contact us",
              "Support portal",
              "Z-Connect blog",
              "List of charges",
              "Downloads & resources",
              "Videos",
              "Market overview",
              "How to file a complaint?",
              "Status of your complaints",
            ].map((item, index) => (
              <a
                key={index}
                className="d-block text-muted text-decoration-none mb-1"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Account Links */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <p>
              <strong>Account</strong>
            </p>
            {["Open an account", "Fund transfer"].map((item, index) => (
              <a
                key={index}
                className="d-block text-muted text-decoration-none mb-1"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer & Legal Notices */}
        <div className="mt-5 text-muted" style={{ fontSize: ".75rem" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorized transactions in your account. Update your
            mobile number/email ID with your stock brokers..."
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
