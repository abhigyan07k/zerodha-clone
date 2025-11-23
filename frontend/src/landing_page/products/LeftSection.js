import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-center flex-column flex-md-row">
        <div className="col-12 col-md-6 text-center">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
        <div className="col-12 col-md-6 p-4 text-center text-md-start">
          <h1 className="mb-3 mt-3">{productName}</h1>
          <p className="mb-3 mt-3">{productDescription}</p>
          <div>
            <a className="text-decoration-none me-3" href={tryDemo}>
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a className="text-decoration-none" href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3 d-flex justify-content-center justify-content-md-start">
            <a href={googlePlay}>
              <img
                src="media/googlePlayBadge.svg"
                className="me-3 img-fluid"
                alt="Google Play"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                className="img-fluid"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
