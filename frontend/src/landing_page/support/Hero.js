import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 text-center" id="supportWrapper">
        <h4 className="fs-3">Support Portal</h4>
        <a href="" className="fs-5">
          Track Tickets
        </a>
      </div>

      <div className="row p-4 m-2">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12 p-3">
          <h1 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="form-control mb-3"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
          />
          <div className="d-flex flex-wrap gap-2">
            <a href="" className="text-decoration-none">
              Track account opening
            </a>
            <a href="" className="text-decoration-none">
              Track segment activation
            </a>
            <a href="" className="text-decoration-none">
              Intraday margins
            </a>
            <a href="" className="text-decoration-none">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 col-md-12 p-4">
          <h1 className="fs-3">Featured</h1>
          <ol className="ps-3" style={{ lineHeight: "2rem" }}>
            <li>
              <a href="" className="text-decoration-none">
                Rights Entitlements listing in February 2025
              </a>
            </li>
            <li>
              <a href="" className="text-decoration-none">
                Latest Intraday leverages and Square-off timings
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
